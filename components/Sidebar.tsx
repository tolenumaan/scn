
import React, { useState, useEffect } from 'react';
import { Chapter, MasteredSections, ChapterProgressStatus, Section } from '../types';
import { Link, useParams } from 'react-router-dom';

interface ChevronDownIconProps {
  className?: string;
}

const ChevronDownIcon = ({ className }: ChevronDownIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className || "w-5 h-5"}>
    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
  </svg>
);

interface CheckmarkIconProps {
  className?: string;
}

const CheckmarkIcon = ({ className }: CheckmarkIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className || "w-4 h-4"}>
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

const ProgressNotStartedIcon = ({ className }: { className?: string }) => (
  <svg className={className || "w-3 h-3"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const ProgressInProgressIcon = ({ className }: { className?: string }) => (
  <svg className={className || "w-3 h-3"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M1 8C1 4.13401 4.13401 1 8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ProgressCompletedIcon = ({ className }: { className?: string }) => (
 <svg className={className || "w-3 h-3"} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM7.54371 11.5437C7.22553 11.8619 6.70327 11.8619 6.38509 11.5437L3.92825 9.08686C3.61006 8.76867 3.61006 8.24641 3.92825 7.92822C4.24644 7.61003 4.7687 7.61003 5.08689 7.92822L6.9644 9.80573L10.9131 5.85702C11.2313 5.53883 11.7536 5.53883 12.0717 5.85702C12.3899 6.17521 12.3899 6.69747 12.0717 7.01566L7.54371 11.5437Z"/>
  </svg>
);


interface SidebarProps {
  chapters: Chapter[];
  notebookTitle: string;
  masteredSections: MasteredSections;
}

const getChapterProgressStatus = (chapter: Chapter, masteredSections: MasteredSections): ChapterProgressStatus => {
  if (!chapter.sections || chapter.sections.length === 0) {
    return 'Not Started'; // Or handle as an anomaly
  }
  const totalSections = chapter.sections.length;
  let masteredCount = 0;
  for (const section of chapter.sections) {
    if (masteredSections[`${chapter.id}-${section.id}`]) {
      masteredCount++;
    }
  }

  if (masteredCount === 0) {
    return 'Not Started';
  }
  if (masteredCount === totalSections) {
    return 'All Sections Mastered';
  }
  return 'In Progress';
};

const Sidebar = ({ chapters, notebookTitle, masteredSections }: SidebarProps): JSX.Element => {
  const { chapterId: activeChapterId, sectionId: activeSectionId } = useParams();
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (activeChapterId) {
      setOpenChapters(prev => ({ ...prev, [activeChapterId]: true }));
    }
  }, [activeChapterId]);

  const toggleChapter = (chapterId: string) => {
    setOpenChapters(prev => ({ ...prev, [chapterId]: !prev[chapterId] }));
  };
  
  return (
    <aside className="w-full md:w-80 glassmorphic flex flex-col h-full shadow-2xl md:rounded-r-2xl">
      <div className="p-5 border-b border-[rgba(0,240,240,0.2)] sticky top-0 z-10 bg-transparent backdrop-blur-sm">
        <Link to="/" className="text-2xl robotic-title hover:opacity-80 transition-opacity duration-150">
          {notebookTitle}
        </Link>
      </div>
      <nav className="flex-grow overflow-y-auto p-3 space-y-1">
        {chapters.map((chapter) => {
          const progressStatus = getChapterProgressStatus(chapter, masteredSections);
          return (
            <div key={chapter.id}>
              <button
                onClick={() => toggleChapter(chapter.id)}
                className="w-full flex items-center justify-between px-3 py-3 text-left text-sm font-medium rounded-lg hover:bg-[rgba(0,240,240,0.1)] focus:outline-none focus:bg-[rgba(0,240,240,0.15)] text-slate-200 hover:text-cyan-300 transition-all duration-150"
                aria-expanded={openChapters[chapter.id]}
                aria-controls={`chapter-sections-${chapter.id}`}
              >
                <div className="flex items-center space-x-2">
                   {progressStatus === 'Not Started' && <ProgressNotStartedIcon className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />}
                   {progressStatus === 'In Progress' && <ProgressInProgressIcon className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />}
                   {progressStatus === 'All Sections Mastered' && <ProgressCompletedIcon className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />}
                  <span className="truncate font-semibold">{chapter.shortTitle || chapter.title}</span>
                </div>
                <ChevronDownIcon className={`w-5 h-5 transform transition-transform duration-200 text-cyan-400 ${openChapters[chapter.id] ? 'rotate-180' : ''}`} />
              </button>
              {openChapters[chapter.id] && (
                <ul 
                  id={`chapter-sections-${chapter.id}`}
                  className="pl-3 mt-1 space-y-0.5 border-l-2 border-[rgba(0,240,240,0.3)] ml-3"
                >
                  {chapter.sections.map((section) => {
                    const sectionKey = `${chapter.id}-${section.id}`;
                    const isMastered = masteredSections[sectionKey];
                    const isActive = activeChapterId === chapter.id && activeSectionId === section.id;
                    return (
                      <li key={section.id}>
                        <Link
                          to={`/${chapter.id}/${section.id}`}
                          className={`block px-4 py-2.5 text-xs rounded-md transition-all duration-150 transform hover:translate-x-1 ${
                            isActive 
                              ? 'bg-[rgba(0,240,240,0.2)] text-white font-semibold shadow-lg border-l-4 border-cyan-300' 
                              : 'hover:bg-[rgba(0,240,240,0.07)] text-slate-300 hover:text-cyan-200'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>
                              <span className="font-mono mr-1.5 text-cyan-400">{section.id}</span> {section.title}
                            </span>
                            {isMastered && <CheckmarkIcon className="text-green-400 ml-2 flex-shrink-0" />}
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
      <div className="p-4 border-t border-[rgba(0,240,240,0.2)] text-center text-xs text-slate-500 sticky bottom-0 bg-transparent backdrop-blur-sm">
        <span className="robotic-title !text-sm !text-slate-600">SYSTEM ONLINE</span> | v2.3
      </div>
    </aside>
  );
};

export default Sidebar;