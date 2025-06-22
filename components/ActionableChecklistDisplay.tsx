
import React, { useState } from 'react';
import { ActionableChecklistData, ActionableChecklistItem } from '../types';
import { Link } from 'react-router-dom'; // Assuming internal links might be used

const ActionableChecklistDisplay = ({ checklistData }: { checklistData: ActionableChecklistData }): JSX.Element => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (itemId: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div className="my-8 p-6 glassmorphic rounded-lg shadow-xl border border-[rgba(0,240,240,0.25)]">
      <h3 className="text-xl robotic-title mb-4">{checklistData.title}</h3>
      <ul className="space-y-3">
        {checklistData.items.map((item) => (
          <li key={item.id} className="flex items-start p-3 bg-slate-800 bg-opacity-50 rounded-md transition-all duration-150 hover:bg-opacity-70">
            <input
              type="checkbox"
              id={`checklist-${item.id}`}
              checked={!!checkedItems[item.id]}
              onChange={() => toggleItem(item.id)}
              className="mt-1 h-5 w-5 rounded border-slate-600 text-cyan-500 focus:ring-cyan-400 bg-slate-700 cursor-pointer flex-shrink-0"
            />
            <label htmlFor={`checklist-${item.id}`} className={`ml-3 text-sm flex-grow cursor-pointer ${checkedItems[item.id] ? 'line-through text-slate-500' : 'text-slate-200'}`}>
              {item.text}
              {item.guideLink && (
                item.guideLink.startsWith('/') ? (
                  <Link to={item.guideLink} className="ml-2 text-xs text-sky-400 hover:text-sky-300 underline">
                    ({item.guideLinkText || 'Learn more'})
                  </Link>
                ) : (
                  <a href={item.guideLink} target="_blank" rel="noopener noreferrer" className="ml-2 text-xs text-sky-400 hover:text-sky-300 underline">
                    ({item.guideLinkText || 'Learn more'})
                  </a>
                )
              )}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActionableChecklistDisplay;
