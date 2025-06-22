
import React, { useState } from 'react';
import { ThreatExplainerData } from '../types';

const ThreatExplainerDisplay = ({ explainerData }: { explainerData: ThreatExplainerData }): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="my-6 p-4 glassmorphic rounded-lg shadow-xl border border-[rgba(0,240,240,0.25)]">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left robotic-title !text-lg !text-cyan-300 hover:!text-cyan-200 transition-colors duration-150 mb-2"
        aria-expanded={isExpanded}
        aria-controls={`threat-explainer-content-${explainerData.title.replace(/\s+/g, '-')}`}
      >
        <span>{explainerData.title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      <p className="text-sm text-slate-400 mb-3">{explainerData.introduction}</p>

      {isExpanded && (
        <div id={`threat-explainer-content-${explainerData.title.replace(/\s+/g, '-')}`} className="mt-4 space-y-3 border-t border-[rgba(0,240,240,0.15)] pt-4">
          {explainerData.steps.map((step, index) => (
            <div key={index} className="p-3 bg-slate-800 bg-opacity-60 rounded-md">
              <h5 className="font-semibold text-cyan-400 robotic-title !text-base mb-1">Step {index + 1}: {step.title}</h5>
              <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThreatExplainerDisplay;
