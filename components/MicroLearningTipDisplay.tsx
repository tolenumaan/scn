
import React from 'react';
import { MicroLearningTipData } from '../types';

const MicroLearningTipDisplay = ({ tipData }: { tipData: MicroLearningTipData }): JSX.Element => {
  return (
    <div className="my-6 p-4 bg-cyan-800 bg-opacity-30 border-l-4 border-cyan-500 rounded-r-lg shadow-md glassmorphic">
      <div className="flex items-start">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        <div>
          <h4 className="text-sm font-semibold text-cyan-300 robotic-title !text-base mb-1">Quick Tip!</h4>
          <p className="text-slate-200 text-sm leading-relaxed">{tipData.tip}</p>
        </div>
      </div>
    </div>
  );
};

export default MicroLearningTipDisplay;
