
import React, { useState } from 'react';
import { FlashcardSetData } from '../types';

const FlashcardSetDisplay = ({ setData }: { setData: FlashcardSetData }): JSX.Element => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (cardId: string) => {
    setFlippedCards(prev => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  return (
    <div className="my-8">
      <h3 className="text-xl robotic-title mb-4 text-center">{setData.title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {setData.cards.map((card) => (
          <div
            key={card.id}
            className="perspective group"
            onClick={() => toggleFlip(card.id)}
            onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleFlip(card.id); }}
            tabIndex={0}
            role="button"
            aria-pressed={!!flippedCards[card.id]}
            aria-label={`Flashcard: ${card.term}. Click or press enter to flip.`}
          >
            <div className={`relative w-full h-48 rounded-xl shadow-xl transition-transform duration-700 transform-preserve-3d ${flippedCards[card.id] ? 'rotate-y-180' : ''}`}>
              {/* Front of Card */}
              <div className="absolute inset-0 w-full h-full flex items-center justify-center p-6 bg-slate-700 glassmorphic rounded-xl backface-hidden border border-[rgba(0,240,240,0.25)]">
                <p className="text-lg font-semibold text-center text-cyan-300 robotic-title !text-xl">{card.term}</p>
              </div>
              {/* Back of Card */}
              <div className="absolute inset-0 w-full h-full flex items-center justify-center p-6 bg-slate-800 glassmorphic rounded-xl backface-hidden rotate-y-180 border border-[rgba(0,240,240,0.25)]">
                <p className="text-sm text-center text-slate-200 leading-relaxed">{card.definition}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashcardSetDisplay;