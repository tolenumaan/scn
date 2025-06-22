
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useParams, Navigate, Link, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ContentDisplay from './components/ContentDisplay';
import { NOTEBOOK_DATA } from './constants';
import { Section, Chapter, MasteredSections, ContentItem } from './types';
import mermaid from 'mermaid'; // Import Mermaid

const findChapterAndSection = (chapters: Chapter[], chapterId?: string, sectionId?: string): { chapter: Chapter | null, section: Section | null } => {
  if (!chapterId) return { chapter: null, section: null };
  const chapter = chapters.find(c => c.id === chapterId);
  if (!chapter) return { chapter: null, section: null };
  if (!sectionId) return { chapter, section: null }; // Chapter found, but no specific section requested
  const section = chapter.sections.find(s => s.id === sectionId);
  return { chapter, section: section || null };
};

interface MainContentWrapperProps {
  masteredSections: MasteredSections;
  toggleMasteredSection: (chapterId: string, sectionId: string) => void;
}

const MainContentWrapper = ({ masteredSections, toggleMasteredSection }: MainContentWrapperProps): JSX.Element => {
  const { chapterId, sectionId } = useParams<{ chapterId: string; sectionId: string }>();
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [currentSection, setCurrentSection] = useState<Section | null>(null);
  const [endOfChapterContent, setEndOfChapterContent] = useState<ContentItem[] | undefined>(undefined);


  useEffect(() => {
    const { chapter, section } = findChapterAndSection(NOTEBOOK_DATA.chapters, chapterId, sectionId);
    setCurrentChapter(chapter);
    setCurrentSection(section);

    // Check if this is the last section of the chapter to display end-of-chapter content
    if (chapter && section) {
        const isLastSection = chapter.sections.indexOf(section) === chapter.sections.length - 1;
        if (isLastSection && chapter.endOfChapterContent) {
            setEndOfChapterContent(chapter.endOfChapterContent);
        } else {
            setEndOfChapterContent(undefined);
        }
    } else {
        setEndOfChapterContent(undefined);
    }

  }, [chapterId, sectionId]);
  
  const isMastered = !!chapterId && !!sectionId && masteredSections[`${chapterId}-${sectionId}`];

  return (
    <ContentDisplay 
        section={currentSection} 
        chapterId={chapterId}
        isMastered={isMastered}
        toggleMastered={currentSection ? () => { // only allow toggle if a section is displayed
            if (chapterId && sectionId) {
                toggleMasteredSection(chapterId, sectionId);
            }
        } : undefined}
        endOfChapterContent={endOfChapterContent}
    />
  );
};

interface AppProps {}

const App = (props: AppProps): JSX.Element => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [masteredSections, setMasteredSections] = useState<MasteredSections>({});
  
  const location = useLocation(); // For mobile sidebar closing

  // Load mastered sections from localStorage on initial mount
  useEffect(() => {
    try {
      const storedMasteredSections = localStorage.getItem('masteredSections');
      if (storedMasteredSections) {
        setMasteredSections(JSON.parse(storedMasteredSections));
      }
    } catch (error) {
        console.error("Error loading mastered sections from localStorage:", error);
        localStorage.removeItem('masteredSections'); // Clear corrupted data
    }
  }, []);

  // Initialize Mermaid.js on component mount
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false, 
      theme: 'dark', // Base theme
      darkMode: true, // Explicitly use dark mode
      securityLevel: 'loose',
      fontFamily: '"Inter", sans-serif',
      themeVariables: {
        background: '#080a0f',
        mainBkg: '#080a0f',
        primaryColor: '#1a1f2c',
        secondaryColor: '#232834',
        tertiaryColor: '#2c313d',
        
        primaryTextColor: '#d1d5db',
        secondaryTextColor: '#adb5bd',
        tertiaryTextColor: '#868e96',
        textColor: '#d1d5db',

        primaryBorderColor: '#00f0f0',
        secondaryBorderColor: '#5eead4',
        tertiaryBorderColor: 'rgba(0, 240, 240, 0.3)',

        lineColor: '#5eead4',
        defaultLinkColor: '#5eead4',

        titleColor: '#00f0f0',
        
        nodeBorder: '#00f0f0',
        nodeTextColor: '#d1d5db',

        clusterBkg: '#1a1f2c',
        clusterBorder: '#5eead4',
        
        actorBkg: '#1a1f2c',
        actorBorder: '#00f0f0',
        actorTextColor: '#d1d5db',
        
        sequenceNumberColor: '#00f0f0',

        messageTextColor: '#d1d5db',
        
        labelBoxBkgColor: '#1a1f2c',
        labelTextColor: '#d1d5db',
        
        loopTextColor: '#d1d5db',
        
        noteBkgColor: '#232834',
        noteTextColor: '#d1d5db',
        noteBorderColor: 'rgba(0, 240, 240, 0.5)',
      },
    });
  }, []);

  const toggleMasteredSection = (chapterId: string, sectionId: string) => {
    const key = `${chapterId}-${sectionId}`;
    setMasteredSections(prev => {
      const newMastered = { ...prev, [key]: !prev[key] };
      try {
        localStorage.setItem('masteredSections', JSON.stringify(newMastered));
      } catch (error) {
        console.error("Error saving mastered sections to localStorage:", error);
      }
      return newMastered;
    });
  };

  const firstChapter = NOTEBOOK_DATA.chapters[0];
  const firstSection = firstChapter?.sections[0];
  const defaultPath = firstChapter && firstSection ? `/${firstChapter.id}/${firstSection.id}` : "/";

  // Close sidebar on navigation for mobile
  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [location.pathname]);


  return (
    
      <div className="flex flex-col md:flex-row h-screen antialiased bg-[#080a0f]">
        {/* Mobile Header */}
        <div className="md:hidden p-4 glassmorphic flex justify-between items-center sticky top-0 z-40 border-b border-slate-700 border-opacity-50">
          <Link to={defaultPath} className="text-xl robotic-title hover:opacity-80 transition-opacity duration-150">
            {NOTEBOOK_DATA.title}
          </Link>
          <button 
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)} 
            className="p-2 rounded-md text-cyan-400 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-[#080a0f]"
            aria-label={isMobileSidebarOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileSidebarOpen}
          >
            {isMobileSidebarOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Sidebar */}
        <div 
          className={`fixed inset-0 z-30 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:w-80 md:h-full
                      ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <Sidebar 
            chapters={NOTEBOOK_DATA.chapters} 
            notebookTitle={NOTEBOOK_DATA.title}
            masteredSections={masteredSections}
          />
        </div>
        
        {/* Overlay for mobile sidebar */}
        {isMobileSidebarOpen && (
          <div 
            className="fixed inset-0 z-20 bg-black bg-opacity-75 backdrop-blur-sm md:hidden" 
            onClick={() => setIsMobileSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-2 md:p-4">
          <div className="h-full glassmorphic rounded-xl shadow-2xl overflow-y-auto">
            <Routes>
              <Route 
                path="/:chapterId/:sectionId" 
                element={<MainContentWrapper masteredSections={masteredSections} toggleMasteredSection={toggleMasteredSection} />} 
              />
              <Route path="/" element={<Navigate to={defaultPath} replace />} />
              <Route path="*" element={ 
                  <div className="p-8 text-center">
                    <h2 className="text-3xl robotic-title text-red-500 mb-4">404 - Sector Not Found</h2>
                    <p className="mt-2 text-lg text-slate-300">The requested data node does not exist in this quadrant.</p>
                    <Link 
                        to={defaultPath} 
                        className="mt-6 inline-block px-6 py-3 bg-slate-700 text-cyan-300 rounded-lg hover:bg-slate-600 hover:text-cyan-200 transition-colors duration-150 robotic-title !font-semibold !text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-[#080a0f]"
                    >
                      Return to Command Deck
                    </Link>
                  </div>
                } 
              />
            </Routes>
          </div>
        </main>
      </div>
    
  );
};

// Need to wrap App with HashRouter at the point of rendering in index.tsx
// So, the App component itself does not use HashRouter internally for location hook.
const AppWrapper = () => (
    <HashRouter>
        <App />
    </HashRouter>
);

export default AppWrapper;
