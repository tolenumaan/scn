
import React, { useState } from 'react';
import { InteractiveScenarioData, InteractiveScenarioChoice } from '../types';

interface InteractiveScenarioProps {
  scenarioData: InteractiveScenarioData;
}

const InteractiveScenario = ({ scenarioData }: InteractiveScenarioProps): JSX.Element => {
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleChoiceClick = (choice: InteractiveScenarioChoice) => {
    setSelectedChoiceId(choice.id);
    if (choice.isCorrect) {
      setIsCompleted(true);
    }
  };

  const resetScenario = () => {
    setSelectedChoiceId(null);
    setIsCompleted(false);
  };

  const selectedFeedback = selectedChoiceId ? scenarioData.choices.find(c => c.id === selectedChoiceId) : null;

  const getFeedbackClasses = (type?: 'success' | 'warning' | 'error'): string => {
    switch (type) {
      case 'success':
        return 'bg-green-700 bg-opacity-30 text-green-300 border-green-600';
      case 'warning':
        return 'bg-yellow-700 bg-opacity-30 text-yellow-300 border-yellow-600';
      case 'error':
        return 'bg-red-700 bg-opacity-30 text-red-300 border-red-600';
      default:
        return 'bg-slate-700 bg-opacity-40 text-slate-300 border-slate-600';
    }
  };
  
  // Icon for feedback messages
  const FeedbackIcon = ({ type }: { type?: 'success' | 'warning' | 'error' }) => {
    switch (type) {
      case 'success':
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>;
      case 'warning':
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1.75-5.75a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3z" clipRule="evenodd" /></svg>;
      case 'error':
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-red-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>;
      default:
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-cyan-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>;
    }
  };

  return (
    <div className="my-8 p-6 glassmorphic rounded-lg shadow-xl border border-[rgba(0,240,240,0.25)]">
      <h3 className="text-xl robotic-title mb-3">{scenarioData.title}</h3>
      <p className="mb-4 leading-relaxed">{scenarioData.description}</p>

      {!isCompleted && (
        <div className="space-y-3 mb-4">
          {scenarioData.choices.map((choice) => (
            <button
              key={choice.id}
              onClick={() => handleChoiceClick(choice)}
              disabled={!!selectedChoiceId}
              className={`w-full text-left px-4 py-3 rounded-md transition-all duration-150 ease-in-out
                          robotic-title !text-sm !font-semibold
                          ${selectedChoiceId === choice.id 
                            ? (choice.isCorrect 
                                ? 'bg-green-600 bg-opacity-80 text-white ring-2 ring-green-500 scale-105' 
                                : 'bg-red-600 bg-opacity-80 text-white ring-2 ring-red-500')
                            : (selectedChoiceId && selectedChoiceId !== choice.id)
                                ? 'bg-slate-800 bg-opacity-60 text-slate-500 cursor-not-allowed'
                                : 'bg-slate-700 hover:bg-slate-600 text-cyan-200 hover:text-cyan-100 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900'
                          }
                          ${!!selectedChoiceId ? 'cursor-not-allowed' : ''}`}
            >
              {choice.text}
            </button>
          ))}
        </div>
      )}

      {selectedFeedback && (
        <div className={`p-4 mt-4 rounded-md border text-sm ${getFeedbackClasses(selectedFeedback.feedbackType)}`}>
          <FeedbackIcon type={selectedFeedback.feedbackType} />
          <strong className="font-semibold robotic-title !text-base">Feedback: </strong>
          {selectedFeedback.feedback}
        </div>
      )}

      {isCompleted && (
        <div className={`p-4 mt-4 rounded-md border text-sm ${getFeedbackClasses('success')}`}>
          <FeedbackIcon type='success' />
          <strong className="font-semibold robotic-title !text-base">Scenario Cleared! </strong>
          {scenarioData.successMessage}
        </div>
      )}
      
      {(selectedChoiceId || isCompleted) && (
         <button
            onClick={resetScenario}
            className="mt-6 px-4 py-2 bg-slate-600 hover:bg-slate-500 text-slate-100 font-medium rounded-md transition-colors duration-150 robotic-title !text-sm !font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-current focus:ring-slate-500"
          >
           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
             <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
           </svg>
            Reset Scenario
          </button>
      )}

    </div>
  );
};

export default InteractiveScenario;
