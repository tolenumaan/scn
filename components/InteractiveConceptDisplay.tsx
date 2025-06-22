
import React, { useState } from 'react';
import { InteractiveConceptData, InteractiveConceptItem } from '../types';

interface ChevronDownIconProps {
  className?: string;
}
const ChevronDownIcon = ({ className }: ChevronDownIconProps): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className || "w-5 h-5"}>
    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
  </svg>
);


const InteractiveConceptDisplay = ({ conceptData }: { conceptData: InteractiveConceptData }): JSX.Element => {
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null);
  const [expandedDetail, setExpandedDetail] = useState<Record<string, string | null>>({}); // { conceptId: detailTitle | null }

  const toggleConcept = (conceptId: string) => {
    setExpandedConcept(prev => (prev === conceptId ? null : conceptId));
    setExpandedDetail(prev => ({ ...prev, [conceptId]: null })); // Reset detail when collapsing main concept
  };

  const toggleDetail = (conceptId: string, detailTitle: string) => {
    setExpandedDetail(prev => ({
      ...prev,
      [conceptId]: prev[conceptId] === detailTitle ? null : detailTitle
    }));
  };
  
  return (
    <div className="my-6 p-4 glassmorphic rounded-lg shadow-xl border border-[rgba(0,240,240,0.25)]">
      <h3 className="text-xl robotic-title mb-2">{conceptData.title}</h3>
      {conceptData.introduction && <p className="text-sm text-slate-400 mb-4">{conceptData.introduction}</p>}
      
      <div className="space-y-3">
        {conceptData.concepts.map((concept) => (
          <div key={concept.id} className="bg-slate-800 bg-opacity-50 rounded-lg">
            <button
              onClick={() => toggleConcept(concept.id)}
              className="w-full flex items-center justify-between p-4 text-left text-lg robotic-title !text-cyan-300 hover:!text-cyan-200 transition-colors duration-150 rounded-t-lg"
              aria-expanded={expandedConcept === concept.id}
              aria-controls={`concept-details-${concept.id}`}
            >
              <span>{concept.term}: <span className="text-base font-normal text-slate-300 italic">{concept.brief}</span></span>
              <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-200 ${expandedConcept === concept.id ? 'rotate-180' : ''}`} />
            </button>
            {expandedConcept === concept.id && (
              <div id={`concept-details-${concept.id}`} className="p-4 border-t border-[rgba(0,240,240,0.2)] space-y-2">
                {concept.details.map((detail, idx) => (
                  <div key={idx} className="bg-slate-700 bg-opacity-40 rounded">
                     <button
                        onClick={() => toggleDetail(concept.id, detail.title)}
                        className="w-full flex items-center justify-between p-3 text-left text-sm font-semibold text-sky-300 hover:text-sky-200 transition-colors duration-150 rounded-t-md"
                        aria-expanded={expandedDetail[concept.id] === detail.title}
                     >
                        <span>{detail.title}</span>
                        <ChevronDownIcon className={`w-5 h-5 transform transition-transform duration-150 ${expandedDetail[concept.id] === detail.title ? 'rotate-180' : ''}`} />
                     </button>
                     {expandedDetail[concept.id] === detail.title && (
                        <div className="p-3 border-t border-sky-800 border-opacity-50 text-xs text-slate-300">
                            <p>{detail.explanation}</p>
                            {detail.example && <p className="mt-1 italic text-sky-400">Example: {detail.example}</p>}
                        </div>
                     )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveConceptDisplay;
