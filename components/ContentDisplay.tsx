
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Section, ContentItem, ContentItemType, ReviewQuestionItem, ChatMessage, PracticalScenarioItem, FurtherStudyItem, TableData, ChartDataType, InteractiveScenarioData, PracticalExerciseData, PhishingSimulatorData, PasswordStrengthCheckerData, WifiSimulatorData, CautionaryTaleData, InteractiveConceptData, ThreatExplainerData, ActionableChecklistData, MicroLearningTipData, EndOfChapterActionsData, FlashcardSetData } from '../types';
import TableDisplay from './TableDisplay';
import FormulaDisplay from './FormulaDisplay';
import ChartDisplay from './ChartDisplay';
import DiagramDisplay from './DiagramDisplay';
import InteractiveScenario from './InteractiveScenario';
import PhishingSimulator from './PhishingSimulator';
import PasswordStrengthChecker from './PasswordStrengthChecker';
import WifiSimulator from './WifiSimulator';
import CautionaryTaleDisplay from './CautionaryTaleDisplay';
import InteractiveConceptDisplay from './InteractiveConceptDisplay';
import ThreatExplainerDisplay from './ThreatExplainerDisplay';
import ActionableChecklistDisplay from './ActionableChecklistDisplay';
import MicroLearningTipDisplay from './MicroLearningTipDisplay';
import EndOfChapterActionsDisplay from './EndOfChapterActionsDisplay';
import FlashcardSetDisplay from './FlashcardSetDisplay';

import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { getChapterTitle } from '../constants';

// Helper to safely parse JSON from Gemini, handling potential markdown fences
const parseGeminiJsonResponse = <T,>(responseText: string): T | null => {
  let jsonStr = responseText.trim();
  const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
  const match = jsonStr.match(fenceRegex);
  if (match && match[2]) {
    jsonStr = match[2].trim();
  }
  try {
    return JSON.parse(jsonStr) as T;
  } catch (e) {
    console.error("Failed to parse JSON response:", e, "Raw response:", responseText);
    return null;
  }
};

const PracticalExerciseDisplay = ({ exerciseData }: { exerciseData: PracticalExerciseData }) => {
  return (
    <div className="my-8 p-6 glassmorphic rounded-lg shadow-xl border border-[rgba(0,240,240,0.25)]">
      <h3 className="text-xl robotic-title mb-1">Practical Exercise: {exerciseData.title}</h3>
      <p className="text-sm text-slate-400 mb-4 italic">Apply your knowledge with this hands-on task.</p>
      
      <div className="mb-4">
        <h4 className="text-lg robotic-title !text-cyan-300 mt-4 mb-2">Introduction</h4>
        <p className="leading-relaxed text-slate-300">{exerciseData.introduction}</p>
      </div>

      <div className="mb-4">
        <h4 className="text-lg robotic-title !text-cyan-300 mt-4 mb-2">Tasks</h4>
        <ul className="list-decimal list-outside pl-6 space-y-2 text-slate-300">
          {exerciseData.tasks.map((task) => (
            <li key={task.id} className="leading-relaxed marker:text-cyan-400 marker:font-semibold">
              {task.description}
              {task.details && <p className="text-xs text-slate-400 italic mt-1 ml-2 whitespace-pre-line">{task.details}</p>}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-lg robotic-title !text-cyan-300 mt-4 mb-2">Expected Outcome</h4>
        <p className="leading-relaxed text-slate-300">{exerciseData.expectedOutcome}</p>
      </div>

      {exerciseData.notes && (
        <div className="mt-4 p-3 bg-slate-800 bg-opacity-50 border border-slate-700 rounded-md">
          <h5 className="text-base robotic-title !text-yellow-400 mb-1">Notes & Hints</h5>
          <p className="text-sm text-slate-400 leading-relaxed whitespace-pre-line">{exerciseData.notes}</p>
        </div>
      )}
    </div>
  );
};


interface ContentDisplayProps {
  section: Section | null;
  chapterId?: string;
  isMastered?: boolean;
  toggleMastered?: () => void;
  endOfChapterContent?: ContentItem[];
}

const LoadingSpinner = () => (
  <div className="flex justify-center items-center my-4">
    <div className="w-8 h-8 border-4 border-cyan-500 border-opacity-25 border-t-cyan-500 rounded-full animate-spin loading-spinner"></div>
    <p className="ml-3 text-cyan-300 robotic-title !font-semibold">Engaging AI Matrix...</p>
  </div>
);

const ContentDisplay = ({ section, chapterId, isMastered, toggleMastered, endOfChapterContent }: ContentDisplayProps): JSX.Element | null => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aiError, setAiError] = useState<string | null>(null);
  
  const [keyTakeaways, setKeyTakeaways] = useState<string[] | null>(null);
  const [reviewQuestions, setReviewQuestions] = useState<ReviewQuestionItem[] | null>(null);
  const [visibleAnswers, setVisibleAnswers] = useState<Record<number, boolean>>({});
  const [practicalScenario, setPracticalScenario] = useState<PracticalScenarioItem | null>(null);
  const [furtherStudy, setFurtherStudy] = useState<FurtherStudyItem[] | null>(null);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState<string>('');
  const [isChatLoading, setIsChatLoading] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const ai = useRef<GoogleGenAI | null>(null);

  useEffect(() => {
    // Initialize AI client only once
    if (!ai.current && process.env.API_KEY) {
        ai.current = new GoogleGenAI({ apiKey: process.env.API_KEY });
    } else if (!process.env.API_KEY) {
        console.warn("API_KEY environment variable not set. AI features will be disabled.");
        setAiError("API Key not configured. AI features are unavailable.");
    }
  }, []);

  const resetAiContent = () => {
    setKeyTakeaways(null);
    setReviewQuestions(null);
    setVisibleAnswers({});
    setPracticalScenario(null);
    setFurtherStudy(null);
    setAiError(null);
  };
  
  useEffect(() => {
    resetAiContent(); // Reset AI content when section changes
    setChatMessages([]); // Reset chat when section changes
  }, [section]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const generateContent = useCallback(async (prompt: string, type: 'takeaways' | 'questions' | 'scenario' | 'study' | 'chat', currentSectionContent?: string) => {
    if (!ai.current) {
      setAiError("AI client not initialized. Cannot generate content.");
      setIsLoading(false);
      setIsChatLoading(false);
      return;
    }
    if (type !== 'chat') setIsLoading(true); else setIsChatLoading(true);
    setAiError(null);

    const fullPrompt = currentSectionContent 
        ? `Based on the following section content titled "${section?.title}" from chapter "${getChapterTitle(chapterId)}":\n\n${currentSectionContent}\n\n${prompt}`
        : prompt;

    try {
      const response: GenerateContentResponse = await ai.current.models.generateContent({
        model: 'gemini-2.5-flash-preview-04-17',
        contents: fullPrompt,
        config: type === 'chat' ? { systemInstruction: "You are a helpful AI Cybersecurity Tutor. Keep your answers concise and relevant to the user's question and the provided context. If the question is outside cybersecurity, politely decline." } : {
          responseMimeType: "application/json", // Expect JSON for structured content
        }
      });
      
      const textResponse = response.text;

      if (type !== 'chat') { // Structured content types
        const parsedData = parseGeminiJsonResponse<any>(textResponse);

        if (!parsedData) {
            throw new Error("Failed to parse AI response as JSON.");
        }

        switch (type) {
          case 'takeaways':
            setKeyTakeaways(parsedData.key_takeaways || []);
            break;
          case 'questions':
            setReviewQuestions(parsedData.review_questions || []);
            setVisibleAnswers({});
            break;
          case 'scenario':
            setPracticalScenario(parsedData.practical_scenario || null);
            break;
          case 'study':
            setFurtherStudy(parsedData.further_study_recommendations || []);
            break;
        }
      } else { // Chat response
         setChatMessages(prev => [...prev, { id: Date.now().toString(), sender: 'ai', text: textResponse }]);
      }

    } catch (error: any) {
      console.error(`Error generating ${type}:`, error);
      const errorMessage = error.message || "An unexpected error occurred with the AI model.";
      setAiError(`AI Error: ${errorMessage}`);
      if (type === 'chat') {
        setChatMessages(prev => [...prev, { id: Date.now().toString(), sender: 'ai', text: `Sorry, I encountered an error: ${errorMessage}` }]);
      }
    } finally {
      if (type !== 'chat') setIsLoading(false); else setIsChatLoading(false);
    }
  }, [section, chapterId]);

  const handleGenerateTakeaways = () => {
    if (!section) return;
    const sectionText = section.content.map(item => item.text || (item.items ? item.items.join(' ') : '')).join('\n');
    const prompt = `Generate 3-5 key takeaways for the cybersecurity topic: "${section.title}". Each takeaway should be a concise sentence. Return as a JSON object with a key "key_takeaways" containing an array of strings.`;
    generateContent(prompt, 'takeaways', sectionText);
  };

  const handleGenerateReviewQuestions = () => {
    if (!section) return;
    const sectionText = section.content.map(item => item.text || (item.items ? item.items.join(' ') : '')).join('\n');
    const prompt = `Generate 2-3 review questions (can be multiple choice or short answer) based on the cybersecurity topic: "${section.title}". For MCQs, provide options. Provide the correct answer and a brief explanation for each. Return as a JSON object with a key "review_questions" containing an array of objects, each with "question", "options" (optional array of strings), "answer" (string), and "explanation" (string).`;
    generateContent(prompt, 'questions', sectionText);
  };
  
  const handleGeneratePracticalScenario = () => {
    if (!section) return;
    const sectionText = section.content.map(item => item.text || (item.items ? item.items.join(' ') : '')).join('\n');
    const prompt = `Describe a brief practical scenario or application tip related to "${section.title}". This could be a "what-if" situation or a real-world example. Optionally, include a few guidance points or hints. Return as a JSON object with a key "practical_scenario" containing an object with "description" (string) and "guidance" (optional array of strings).`;
    generateContent(prompt, 'scenario', sectionText);
  };

  const handleGenerateFurtherStudy = () => {
    if (!section) return;
    const sectionText = section.content.map(item => item.text || (item.items ? item.items.join(' ') : '')).join('\n');
    const prompt = `Suggest 1-2 further study resources (e.g., specific articles, tools, official documentation webpages - provide hypothetical URLs if actual ones aren't known but describe what they would point to) for the topic "${section.title}". For each, provide a title, a brief description of what it covers, and a link (can be conceptual if not a real URL). Return as a JSON object with a key "further_study_recommendations" containing an array of objects, each with "title" (string), "link" (string, optional), and "description" (string).`;
    generateContent(prompt, 'study', sectionText);
  };

  const toggleAnswer = (index: number) => {
    setVisibleAnswers(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isChatLoading || !section) return;

    const userMessage: ChatMessage = { id: Date.now().toString(), sender: 'user', text: chatInput };
    setChatMessages(prev => [...prev, userMessage]);
    
    const sectionContext = section.content.map(item => {
        if (item.text) return item.text;
        if (item.items) return item.items.join('; ');
        if (item.tableData?.caption) return `Table: ${item.tableData.caption}`;
        // Add other content types to context if needed
        if (item.practicalExerciseData?.title) return `Practical Exercise: ${item.practicalExerciseData.title}`;
        return '';
    }).filter(Boolean).join('\n');

    const prompt = `Context: Section "${section.title}" from chapter "${getChapterTitle(chapterId)}". Content summary: """${sectionContext.substring(0,1000)}...""" Question: "${chatInput}"`;
    generateContent(prompt, 'chat');
    setChatInput('');
  };


  const renderContentItem = (item: ContentItem, index: number): JSX.Element | null => {
    switch (item.type) {
      case ContentItemType.HEADING3:
        return <h3 key={index} className="text-2xl robotic-title mt-6 mb-3">{item.text}</h3>;
      case ContentItemType.HEADING4:
        return <h4 key={index} className="text-xl robotic-title mt-4 mb-2">{item.text}</h4>;
      case ContentItemType.PARAGRAPH:
        // Enhanced to render analogies with emphasis
        if (item.text?.includes(" = ")) { // Simple check for analogy pattern
            const parts = item.text.split(" = ");
            if (parts.length === 2) {
                 return <p key={index} className="my-3 leading-relaxed">
                    <strong className="text-cyan-300 italic">{parts[0]}</strong> = <em className="italic text-slate-300">{parts[1]}</em>
                 </p>;
            }
        }
        return <p key={index} className="my-3 leading-relaxed">{item.text}</p>;
      case ContentItemType.LIST:
        return (
          <ul key={index} className="list-disc list-inside my-3 pl-4 space-y-1">
            {item.items?.map((li, i) => <li key={i} className="leading-relaxed marker:text-cyan-400">{li}</li>)}
          </ul>
        );
      case ContentItemType.TABLE:
        return item.tableData ? <TableDisplay key={index} tableData={item.tableData} /> : <p key={index} className="text-red-400">Table data missing.</p>;
      case ContentItemType.FORMULA:
        return item.formulaString ? <FormulaDisplay key={index} formulaString={item.formulaString} /> : <p key={index} className="text-red-400">Formula string missing.</p>;
      case ContentItemType.CHART:
        return item.chartData ? <ChartDisplay key={index} chartData={item.chartData} /> : <p key={index} className="text-red-400">Chart data missing.</p>;
      case ContentItemType.DIAGRAM:
        return item.diagramDefinition ? <DiagramDisplay key={index} diagramDefinition={item.diagramDefinition} /> : <p key={index} className="text-red-400">Diagram definition missing.</p>;
      case ContentItemType.INTERACTIVE_SCENARIO:
        return item.interactiveScenarioData ? <InteractiveScenario key={index} scenarioData={item.interactiveScenarioData} /> : <p key={index} className="text-red-400">Interactive scenario data missing.</p>;
      case ContentItemType.PRACTICAL_EXERCISE:
        return item.practicalExerciseData ? <PracticalExerciseDisplay key={index} exerciseData={item.practicalExerciseData} /> : <p key={index} className="text-red-400">Practical exercise data missing.</p>;
      case ContentItemType.PHISHING_SIMULATOR:
        return item.phishingSimulatorData ? <PhishingSimulator key={index} simulatorData={item.phishingSimulatorData} /> : <p key={index} className="text-red-400">Phishing simulator data missing.</p>;
      case ContentItemType.PASSWORD_STRENGTH_CHECKER:
        return item.passwordStrengthCheckerData ? <PasswordStrengthChecker key={index} checkerData={item.passwordStrengthCheckerData} /> : <p key={index} className="text-red-400">Password strength checker data missing.</p>;
      case ContentItemType.WIFI_SIMULATOR:
        return item.wifiSimulatorData ? <WifiSimulator key={index} simulatorData={item.wifiSimulatorData} /> : <p key={index} className="text-red-400">Wi-Fi simulator data missing.</p>;
      
      // New Content Types
      case ContentItemType.CAUTIONARY_TALE:
        return item.cautionaryTaleData ? <CautionaryTaleDisplay key={index} taleData={item.cautionaryTaleData} /> : <p key={index} className="text-red-400">Cautionary tale data missing.</p>;
      case ContentItemType.INTERACTIVE_CONCEPT:
        return item.interactiveConceptData ? <InteractiveConceptDisplay key={index} conceptData={item.interactiveConceptData} /> : <p key={index} className="text-red-400">Interactive concept data missing.</p>;
      case ContentItemType.THREAT_EXPLAINER:
        return item.threatExplainerData ? <ThreatExplainerDisplay key={index} explainerData={item.threatExplainerData} /> : <p key={index} className="text-red-400">Threat explainer data missing.</p>;
      case ContentItemType.ACTIONABLE_CHECKLIST:
        return item.actionableChecklistData ? <ActionableChecklistDisplay key={index} checklistData={item.actionableChecklistData} /> : <p key={index} className="text-red-400">Actionable checklist data missing.</p>;
      case ContentItemType.MICRO_LEARNING_TIP:
        return item.microLearningTipData ? <MicroLearningTipDisplay key={index} tipData={item.microLearningTipData} /> : <p key={index} className="text-red-400">Micro-learning tip data missing.</p>;
      case ContentItemType.END_OF_CHAPTER_ACTIONS:
        return item.endOfChapterActionsData ? <EndOfChapterActionsDisplay key={index} actionsData={item.endOfChapterActionsData} /> : <p key={index} className="text-red-400">End of chapter actions data missing.</p>;
      case ContentItemType.FLASHCARD_SET:
        return item.flashcardSetData ? <FlashcardSetDisplay key={index} setData={item.flashcardSetData} /> : <p key={index} className="text-red-400">Flashcard set data missing.</p>;
      default:
        return <p key={index} className="text-yellow-400">Unsupported content type: {item.type}</p>;
    }
  };

  if (!section && !endOfChapterContent) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl robotic-title mb-4">No Section Selected</h2>
        <p className="text-slate-400">Please select a section from the sidebar to view its content.</p>
      </div>
    );
  }

  return (
    <article className="p-4 md:p-8 h-full overflow-y-auto prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl max-w-none">
      {section && (
        <>
          <div className="flex justify-between items-start mb-6 pb-4 border-b border-[rgba(0,240,240,0.2)]">
            <div>
              <p className="text-sm text-cyan-400 robotic-title !font-semibold tracking-wider">{getChapterTitle(chapterId) || "Chapter"}</p>
              <h1 className="text-3xl md:text-4xl robotic-title leading-tight mb-0">{section.id} - {section.title}</h1>
            </div>
            {toggleMastered && (
                <button
                    onClick={toggleMastered}
                    title={isMastered ? "Mark as Not Mastered" : "Mark as Mastered"}
                    className={`mt-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ease-in-out flex items-center shadow-md hover:shadow-lg
                                ${isMastered 
                                    ? 'bg-green-600 bg-opacity-80 text-white hover:bg-green-500' 
                                    : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                                } border ${isMastered ? 'border-green-500' : 'border-slate-600'} robotic-title !text-xs !font-medium`}
                >
                    {isMastered ? (
                        <><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> Mastered</>
                    ) : (
                        <><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Mark as Mastered</>
                    )}
                </button>
            )}
          </div>
          {section.content.map(renderContentItem)}
        </>
      )}
      
      {endOfChapterContent && endOfChapterContent.length > 0 && (
        <div className="mt-10 pt-6 border-t-2 border-[rgba(0,240,240,0.3)]">
           {endOfChapterContent.map(renderContentItem)}
        </div>
      )}

      {aiError && <p className="my-4 p-3 bg-red-700 bg-opacity-50 text-red-200 border border-red-500 rounded-md">{aiError}</p>}
      
      {/* AI Generated Content Section - only show if a section is active */}
      {section && ai.current && (
        <div className="mt-10 pt-6 border-t-2 border-[rgba(0,240,240,0.3)]">
          <h2 className="text-2xl robotic-title mb-6">AI Learning Enhancements</h2>
          
          {isLoading && <LoadingSpinner />}

          {/* Key Takeaways */}
          <div className="mb-8">
            <button 
              onClick={handleGenerateTakeaways} 
              disabled={isLoading}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-cyan-300 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-150 robotic-title !text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
              Generate Key Takeaways
            </button>
            {keyTakeaways && keyTakeaways.length > 0 && (
              <div className="mt-4 p-4 glassmorphic rounded-lg key-takeaways-container">
                <h3 className="text-lg robotic-title mb-2">Key Takeaways:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {keyTakeaways.map((item, i) => <li key={i} className="marker:text-cyan-400">{item}</li>)}
                </ul>
              </div>
            )}
          </div>

          {/* Review Questions */}
          <div className="mb-8">
            <button 
              onClick={handleGenerateReviewQuestions} 
              disabled={isLoading}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-cyan-300 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-150 robotic-title !text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg>
              Generate Review Questions
            </button>
            {reviewQuestions && reviewQuestions.length > 0 && (
              <div className="mt-4 p-4 glassmorphic rounded-lg review-questions-container">
                <h3 className="text-lg robotic-title mb-2">Review Questions:</h3>
                {reviewQuestions.map((q, i) => (
                  <div key={i} className="mb-4 p-3 bg-slate-800 bg-opacity-60 rounded">
                    <p className="font-semibold text-slate-200">{i + 1}. {q.question}</p>
                    {q.options && (
                      <ul className="list-alpha list-inside pl-2 my-2 space-y-1">
                        {q.options.map((opt, optIdx) => <li key={optIdx} className="marker:text-cyan-500">{opt}</li>)}
                      </ul>
                    )}
                    <button 
                      onClick={() => toggleAnswer(i)}
                      className="text-xs px-3 py-1 bg-cyan-700 hover:bg-cyan-600 text-cyan-100 rounded robotic-title !text-xs !font-medium mt-1"
                    >
                      {visibleAnswers[i] ? 'Hide' : 'Show'} Answer
                    </button>
                    {visibleAnswers[i] && (
                      <div className="mt-2 p-2 bg-slate-700 bg-opacity-70 rounded answer-block">
                        <p className="text-sm text-green-300"><strong className="robotic-title !text-green-400 !font-semibold">Answer:</strong> {q.answer}</p>
                        {q.explanation && <p className="text-xs text-slate-400 mt-1"><strong className="robotic-title !text-slate-300 !font-semibold">Explanation:</strong> {q.explanation}</p>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Practical Scenario */}
           <div className="mb-8">
            <button 
              onClick={handleGeneratePracticalScenario} 
              disabled={isLoading}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-cyan-300 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-150 robotic-title !text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
              Generate Practical Scenario
            </button>
            {practicalScenario && (
              <div className="mt-4 p-4 glassmorphic rounded-lg">
                <h3 className="text-lg robotic-title mb-2">Practical Scenario:</h3>
                <p className="mb-2">{practicalScenario.description}</p>
                {practicalScenario.guidance && practicalScenario.guidance.length > 0 && (
                    <>
                    <h4 className="text-sm robotic-title mt-3 mb-1">Things to consider:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                    {practicalScenario.guidance.map((item, i) => <li key={i} className="marker:text-cyan-500">{item}</li>)}
                    </ul>
                    </>
                )}
              </div>
            )}
          </div>

          {/* Further Study */}
          <div className="mb-8">
            <button 
              onClick={handleGenerateFurtherStudy} 
              disabled={isLoading}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-cyan-300 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-150 robotic-title !text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 16c1.255 0 2.443-.29 3.5-.804V4.804zM14.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 0114.5 16c1.255 0 2.443-.29 3.5-.804v-10A7.968 7.968 0 0014.5 4z" /></svg>
              Suggest Further Study
            </button>
            {furtherStudy && furtherStudy.length > 0 && (
              <div className="mt-4 p-4 glassmorphic rounded-lg">
                <h3 className="text-lg robotic-title mb-2">Further Study:</h3>
                {furtherStudy.map((item, i) => (
                  <div key={i} className="mb-3 p-3 bg-slate-800 bg-opacity-60 rounded">
                    <h4 className="font-semibold text-slate-200">{item.title}</h4>
                    <p className="text-sm my-1">{item.description}</p>
                    {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-400 hover:text-sky-300 underline break-all">{item.link}</a>}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* AI Cyber Tutor Terminal */}
          <div className="mt-12 pt-6 border-t border-[rgba(0,240,240,0.2)] ai-tutor-chat-container">
            <h3 className="text-xl robotic-title mb-4">AI Cyber Tutor Terminal</h3>
            <div 
                ref={chatContainerRef}
                className="h-64 overflow-y-auto p-4 bg-black bg-opacity-50 rounded-lg mb-4 border border-[rgba(0,240,240,0.25)] ai-tutor-chat-messages"
                aria-live="polite"
                aria-atomic="false"
            >
                {chatMessages.length === 0 && <p className="text-slate-500 text-sm italic">Ask a question about this section...</p>}
                {chatMessages.map(msg => (
                <div key={msg.id} className={`mb-3 p-3 rounded-lg max-w-[85%] text-sm shadow-md ${
                    msg.sender === 'user' 
                    ? 'bg-slate-700 bg-opacity-80 text-sky-200 ml-auto' 
                    : 'bg-slate-800 bg-opacity-70 text-slate-200 mr-auto'
                }`}>
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
                ))}
                {isChatLoading && (
                    <div className="flex items-center p-2 text-slate-400 mr-auto">
                        <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mr-2"></div>
                        <span>AI is typing...</span>
                    </div>
                )}
            </div>
            <form onSubmit={handleChatSubmit} className="flex items-center gap-3 ai-tutor-chat-input">
              <input 
                type="text" 
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                placeholder="Query the AI about this section..."
                disabled={isChatLoading || !ai.current}
                className="flex-grow p-3 bg-slate-800 bg-opacity-80 border border-slate-700 rounded-lg text-slate-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none placeholder-slate-500 disabled:opacity-60 transition-colors duration-150"
                aria-label="Ask the AI Cyber Tutor a question"
              />
              <button 
                type="submit" 
                disabled={isChatLoading || !chatInput.trim() || !ai.current}
                className="px-5 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-150 robotic-title !text-base !font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                aria-label="Send message to AI Tutor"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 16.571V11.691l4.456-1.008a1 1 0 00.908-1.258l-.299-.748a1 1 0 00-1.162-.832L9.93 9.42l-.229-3.231a1 1 0 00-.909-1.258L4.69 3.522l5.066-1.921c.264-.1.554-.1.818 0zM17 11a1 1 0 100-2h-3a1 1 0 100 2h3z" />
                </svg>
                <span className="ml-2">Send</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </article>
  );
};

export default ContentDisplay;
