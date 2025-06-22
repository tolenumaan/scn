
import React from 'react';
import { EndOfChapterActionsData } from '../types';
import { Link } from 'react-router-dom';

const EndOfChapterActionsDisplay = ({ actionsData }: { actionsData: EndOfChapterActionsData }): JSX.Element => {
  return (
    <div className="my-8 p-6 glassmorphic rounded-lg shadow-xl border border-[rgba(0,240,240,0.25)]">
      <h3 className="text-xl robotic-title mb-4">{actionsData.title}</h3>
      <ul className="space-y-3 list-decimal list-outside pl-5">
        {actionsData.actions.map((action, index) => (
          <li key={index} className="text-slate-200 marker:text-cyan-400 marker:font-semibold">
            {action.text}
            {action.link && (
              action.link.startsWith('/') ? (
                <Link to={action.link} className="ml-2 text-sm text-sky-400 hover:text-sky-300 underline">
                  {action.linkText || 'Details'}
                </Link>
              ) : (
                <a href={action.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-sm text-sky-400 hover:text-sky-300 underline">
                  {action.linkText || 'Learn More'}
                </a>
              )
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EndOfChapterActionsDisplay;
