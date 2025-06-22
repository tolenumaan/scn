
import React from 'react';
import { CautionaryTaleData } from '../types';

interface CautionaryTaleDisplayProps {
  taleData: CautionaryTaleData;
}

const CautionaryTaleDisplay = ({ taleData }: CautionaryTaleDisplayProps): JSX.Element => {
  return (
    <div className="my-6 p-4 border-l-4 border-yellow-500 bg-yellow-700 bg-opacity-20 rounded-r-lg shadow-md glassmorphic">
      <div className="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-yellow-400 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1.75-5.75a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3z" clipRule="evenodd" />
        </svg>
        <div>
          <h4 className="text-sm font-semibold text-yellow-300 robotic-title !text-base mb-1">Cautionary Tale</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{taleData.text}</p>
          {taleData.source && (
            <p className="text-xs text-yellow-400 opacity-80 mt-2 italic">Source: {taleData.source}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CautionaryTaleDisplay;
