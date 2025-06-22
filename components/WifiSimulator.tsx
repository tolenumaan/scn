
import React, { useState } from 'react';
import { WifiSimulatorData, WifiNetworkChoice } from '../types';

interface WifiSimulatorProps {
  simulatorData: WifiSimulatorData;
}

const WifiSignalIcon = ({ strength = 3 }: { strength?: number }) => {
  const bars = [];
  for (let i = 0; i < 4; i++) {
    bars.push(
      <div
        key={i}
        className={`w-1 h-${i + 2} rounded-sm ${i < strength ? 'bg-cyan-400' : 'bg-slate-600'}`}
      ></div>
    );
  }
  return <div className="flex items-end space-x-0.5 h-5">{bars}</div>;
};

const LockIcon = ({ secured }: { secured: boolean }) => (
  secured ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 2a3 3 0 00-3 3v1H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2h-1V5a3 3 0 00-3-3zm-1 5v1h2V5a1 1 0 10-2 0z" clipRule="evenodd" />
    </svg>
  ) : (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 2a5 5 0 00-5 5v2H4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V11a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm0 2.5a2.5 2.5 0 012.5 2.5V7h-5V7a2.5 2.5 0 012.5-2.5z" />
    </svg>
  )
);


const WifiSimulator = ({ simulatorData }: WifiSimulatorProps): JSX.Element => {
  const [selectedNetwork, setSelectedNetwork] = useState<WifiNetworkChoice | null>(null);
  const [feedbackVisible, setFeedbackVisible] = useState<boolean>(false);

  const { title, scenarioDescription, networks, generalAdvice } = simulatorData;

  const handleNetworkSelect = (network: WifiNetworkChoice) => {
    setSelectedNetwork(network);
    setFeedbackVisible(true);
  };

  const handleCloseFeedback = () => {
    setFeedbackVisible(false);
    // Optionally reset selectedNetwork if you want them to choose again from scratch
    // setSelectedNetwork(null); 
  };
  
  const getFeedbackSeverityClass = (isRecommended: boolean) => {
    if (isRecommended) return 'border-green-500 bg-green-800 bg-opacity-30 text-green-300';
    // Could add a "neutral" or "warning" state if `isRecommended` was more granular
    return 'border-red-500 bg-red-800 bg-opacity-30 text-red-300';
  };


  return (
    <div className="my-8 p-6 glassmorphic rounded-lg shadow-xl border border-[rgba(0,240,240,0.25)]">
      <h3 className="text-xl robotic-title mb-1">{title}</h3>
      <p className="text-sm text-slate-400 mb-6 italic">{scenarioDescription}</p>

      <div className="space-y-3">
        {networks.map((network) => (
          <button
            key={network.id}
            onClick={() => handleNetworkSelect(network)}
            className={`w-full flex items-center justify-between p-3 rounded-md transition-all duration-150 ease-in-out text-left
                        ${selectedNetwork?.id === network.id && feedbackVisible ? 'ring-2 ring-cyan-400 bg-slate-700' : 'bg-slate-800 hover:bg-slate-700'}
                        border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900`}
            aria-pressed={selectedNetwork?.id === network.id && feedbackVisible}
          >
            <div className="flex items-center">
              <WifiSignalIcon strength={network.signalStrength || (network.ssid.toLowerCase().includes("free") ? 2 : 4)} />
              <div className="ml-3">
                <span className="block text-sm text-cyan-200 font-semibold">{network.ssid}</span>
                <span className="text-xs text-slate-400">{network.securityType}</span>
              </div>
            </div>
            <LockIcon secured={!network.securityType.toLowerCase().includes('open') && !network.securityType.toLowerCase().includes('captive')} />
          </button>
        ))}
      </div>

      {feedbackVisible && selectedNetwork && (
        <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={`glassmorphic p-6 rounded-lg shadow-xl max-w-md w-full border ${getFeedbackSeverityClass(selectedNetwork.isRecommended)}`}>
            <h4 className="text-lg robotic-title mb-2">Connection Info: {selectedNetwork.ssid}</h4>
            <p className="text-sm mb-4 whitespace-pre-line">{selectedNetwork.feedback}</p>
            {generalAdvice && !selectedNetwork.isRecommended && (
                <p className="text-xs text-yellow-300 mt-3 p-2 bg-yellow-700 bg-opacity-20 rounded border border-yellow-600">
                    <strong>General Tip:</strong> {generalAdvice}
                </p>
            )}
            <button
              onClick={handleCloseFeedback}
              className="mt-6 w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-md transition-colors duration-150 robotic-title !text-sm"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WifiSimulator;
