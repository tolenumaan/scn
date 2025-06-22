
import React, { useState, useEffect } from 'react';
import { PasswordStrengthCheckerData, PasswordCriterion } from '../types';

interface PasswordStrengthCheckerProps {
  checkerData: PasswordStrengthCheckerData;
}

const PasswordStrengthChecker = ({ checkerData }: PasswordStrengthCheckerProps): JSX.Element => {
  const [password, setPassword] = useState<string>('');
  const [strength, setStrength] = useState<number>(0); // 0-100 scale
  const [feedbackCriteria, setFeedbackCriteria] = useState<PasswordCriterion[]>(checkerData.criteria.map(c => ({...c, isMet: false})));

  const { title, disclaimer } = checkerData;

  useEffect(() => {
    let currentStrength = 0;
    const updatedCriteria = checkerData.criteria.map(criterion => {
      const regex = new RegExp(criterion.regex);
      const isMet = regex.test(password);
      if (isMet) {
        currentStrength += criterion.strengthScore;
      }
      return { ...criterion, isMet };
    });

    // Basic length check (can be one of the criteria too)
    if (password.length === 0) {
        currentStrength = 0;
    } else if (password.length < 8) {
      currentStrength = Math.max(0, currentStrength - 20); // Penalize short passwords
    } else if (password.length >= 12) {
      currentStrength += 10; // Bonus for longer passwords
    }
    
    setStrength(Math.max(0, Math.min(100, currentStrength)));
    setFeedbackCriteria(updatedCriteria);

  }, [password, checkerData.criteria]);

  const getStrengthLabel = (): string => {
    if (strength < 25) return 'Very Weak';
    if (strength < 50) return 'Weak';
    if (strength < 75) return 'Medium';
    if (strength < 90) return 'Strong';
    return 'Very Strong';
  };

  const getStrengthColor = (): string => {
    if (strength < 25) return 'bg-red-600';
    if (strength < 50) return 'bg-orange-500';
    if (strength < 75) return 'bg-yellow-500';
    if (strength < 90) return 'bg-lime-500';
    return 'bg-green-500';
  };

  return (
    <div className="my-8 p-6 glassmorphic rounded-lg shadow-xl border border-[rgba(0,240,240,0.25)]">
      <h3 className="text-xl robotic-title mb-1">{title}</h3>
      {disclaimer && <p className="text-xs text-yellow-400 mb-4 p-2 bg-yellow-900 bg-opacity-30 rounded-md border border-yellow-700">{disclaimer}</p>}

      <input
        type="text" // Keep as text to allow visibility, or use a toggle for type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Type a sample password..."
        className="w-full p-3 mb-4 bg-slate-800 bg-opacity-80 border border-slate-700 rounded-lg text-slate-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none placeholder-slate-500"
        aria-label="Password input for strength checking"
      />

      <div className="w-full bg-slate-700 rounded-full h-3.5 mb-1 relative overflow-hidden">
        <div
          className={`h-3.5 rounded-full transition-all duration-300 ease-in-out ${getStrengthColor()}`}
          style={{ width: `${strength}%` }}
          role="progressbar"
          aria-valuenow={strength}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Password strength: ${getStrengthLabel()}`}
        ></div>
      </div>
      <p className={`text-sm font-semibold mb-4 text-center ${
        strength < 25 ? 'text-red-400' :
        strength < 50 ? 'text-orange-400' :
        strength < 75 ? 'text-yellow-300' :
        strength < 90 ? 'text-lime-300' : 'text-green-300'
      }`}>Strength: {getStrengthLabel()}
      </p>


      <div className="mt-4 space-y-2">
        <h4 className="text-base robotic-title !text-cyan-300 mb-1">Improvement Tips:</h4>
        {feedbackCriteria.map((criterion) => (
          <div key={criterion.id} className={`flex items-center text-sm transition-opacity duration-300 ${criterion.isMet ? 'text-green-400 opacity-100' : 'text-slate-400 opacity-70'}`}>
            {criterion.isMet ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            )}
            {criterion.message}
          </div>
        ))}
        {password.length > 0 && password.length < 8 && (
             <div className="flex items-center text-sm text-orange-400 opacity-90">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                Make your password at least 8 characters long. (12+ is better!)
            </div>
        )}
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;
