
import React, { useState } from 'react';
import { PhishingSimulatorData, PhishingEmailItem } from '../types';

interface PhishingSimulatorProps {
  simulatorData: PhishingSimulatorData;
}

const PhishingSimulator = ({ simulatorData }: PhishingSimulatorProps): JSX.Element => {
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(null);
  const [reportedEmails, setReportedEmails] = useState<Record<string, 'correct' | 'incorrect'>>({});
  const [showFullEmail, setShowFullEmail] = useState<PhishingEmailItem | null>(null);

  const { title, introduction, emails, completionMessage } = simulatorData;

  const handleEmailSelect = (email: PhishingEmailItem) => {
    setShowFullEmail(email);
    setSelectedEmailId(email.id); // Keep track of the one being viewed in modal
  };

  const handleReportPhish = () => {
    if (!showFullEmail) return;
    const email = showFullEmail;
    setReportedEmails(prev => ({
      ...prev,
      [email.id]: email.isPhishing ? 'correct' : 'incorrect'
    }));
    setShowFullEmail(null); // Close modal after action
    setSelectedEmailId(null);
  };
  
  const handleMarkSafe = () => {
    if(!showFullEmail) return;
    const email = showFullEmail;
     setReportedEmails(prev => ({
      ...prev,
      [email.id]: !email.isPhishing ? 'correct' : 'incorrect'
    }));
    setShowFullEmail(null); // Close modal after action
    setSelectedEmailId(null);
  }

  const allPhishingIdentified = emails.filter(e => e.isPhishing).every(e => reportedEmails[e.id] === 'correct');
  const allEmailsAssessed = emails.length === Object.keys(reportedEmails).length;
  const isCompleted = allPhishingIdentified || allEmailsAssessed;


  const getStatusIcon = (emailId: string) => {
    const status = reportedEmails[emailId];
    if (status === 'correct') {
      return <span className="text-green-400 ml-2" title="Correctly Assessed">✓</span>;
    }
    if (status === 'incorrect') {
      return <span className="text-red-400 ml-2" title="Incorrectly Assessed">✗</span>;
    }
    return null;
  };
  
  const getFeedbackMessage = (emailId: string) : string | null => {
    const email = emails.find(e => e.id === emailId);
    if (!email) return null;
    const status = reportedEmails[emailId];
    if (status === 'correct') return email.feedbackCorrect;
    if (status === 'incorrect') return email.feedbackIncorrect;
    return null;
  }

  return (
    <div className="my-8 p-6 glassmorphic rounded-lg shadow-xl border border-[rgba(0,240,240,0.25)]">
      <h3 className="text-xl robotic-title mb-1">{title}</h3>
      <p className="text-sm text-slate-400 mb-4 italic">{introduction}</p>

      {isCompleted && (
        <div className="p-4 mb-4 bg-green-700 bg-opacity-30 text-green-300 border border-green-600 rounded-md">
          <strong className="robotic-title">Scenario Complete!</strong> {completionMessage}
        </div>
      )}

      <div className="space-y-2">
        {emails.map((email) => (
          <div key={email.id} 
               className={`p-3 rounded-md transition-all duration-150 ease-in-out cursor-pointer hover:bg-slate-700
                           ${selectedEmailId === email.id ? 'bg-slate-700 ring-2 ring-cyan-500' : 'bg-slate-800 bg-opacity-70'}
                           ${reportedEmails[email.id] ? 'opacity-70' : ''}
                           border border-slate-700`}
               onClick={() => !reportedEmails[email.id] && handleEmailSelect(email)}
               role="button"
               tabIndex={reportedEmails[email.id] ? -1 : 0}
               aria-pressed={selectedEmailId === email.id}
               aria-disabled={!!reportedEmails[email.id]}
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="block text-xs text-slate-400 robotic-title !text-xs !font-light">FROM: {email.sender}</span>
                <span className="block text-sm text-cyan-300 font-semibold">{email.subject}</span>
              </div>
              {getStatusIcon(email.id)}
            </div>
            <p className="text-xs text-slate-400 mt-1 truncate">{email.bodyPreview}</p>
            {reportedEmails[email.id] && (
              <p className={`mt-2 text-xs p-2 rounded-sm ${reportedEmails[email.id] === 'correct' ? 'bg-green-900 bg-opacity-50 text-green-300' : 'bg-red-900 bg-opacity-50 text-red-300'}`}>
                {getFeedbackMessage(email.id)}
                 {email.isPhishing && reportedEmails[email.id] === 'correct' && email.clues && (
                    <ul className="list-disc list-inside mt-1 pl-2 text-xs">
                        {email.clues.map((clue, idx) => <li key={idx}>{clue}</li>)}
                    </ul>
                )}
              </p>
            )}
          </div>
        ))}
      </div>

      {showFullEmail && (
        <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glassmorphic p-6 rounded-lg shadow-xl max-w-lg w-full border border-[rgba(0,240,240,0.3)]">
            <h4 className="text-lg robotic-title mb-2">Email Details</h4>
            <div className="mb-4 p-3 bg-slate-800 rounded">
              <p className="text-sm"><strong className="text-slate-400">From:</strong> {showFullEmail.sender}</p>
              <p className="text-sm"><strong className="text-slate-400">Subject:</strong> {showFullEmail.subject}</p>
              <hr className="my-2 border-slate-700"/>
              <p className="text-sm whitespace-pre-line">{showFullEmail.fullBody || showFullEmail.bodyPreview}</p>
            </div>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={handleMarkSafe}
                className="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-slate-100 rounded-md robotic-title !text-sm !font-semibold"
              >Mark as Safe</button>
              <button 
                onClick={handleReportPhish}
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md robotic-title !text-sm !font-semibold"
              >Report as Phishing</button>
              <button 
                onClick={() => {setShowFullEmail(null); setSelectedEmailId(null);}}
                className="px-4 py-2 bg-cyan-700 hover:bg-cyan-600 text-cyan-100 rounded-md robotic-title !text-sm"
              >Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhishingSimulator;
