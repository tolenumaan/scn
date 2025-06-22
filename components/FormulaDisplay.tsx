
import React, { useEffect, useRef } from 'react';
import katex from 'katex';

interface FormulaDisplayProps {
  formulaString: string;
}

const FormulaDisplay = ({ formulaString }: FormulaDisplayProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && formulaString) {
      try {
        // Remove potential surrounding delimiters like $$...$$ or \[...\] if Gemini adds them
        let cleanFormula = formulaString.trim();
        if ((cleanFormula.startsWith('$$') && cleanFormula.endsWith('$$')) ||
            (cleanFormula.startsWith('\\[') && cleanFormula.endsWith('\\]'))) {
          cleanFormula = cleanFormula.substring(2, cleanFormula.length - 2);
        } else if ((cleanFormula.startsWith('$') && cleanFormula.endsWith('$')) ||
                   (cleanFormula.startsWith('\\(') && cleanFormula.endsWith('\\)'))) {
          cleanFormula = cleanFormula.substring(1, cleanFormula.length - 1);
        }
        
        katex.render(cleanFormula, containerRef.current, {
          throwOnError: false, // Don't crash if KaTeX encounters an error
          displayMode: true,   // Render as block element
        });
      } catch (error) {
        console.error("KaTeX rendering error:", error);
        if (containerRef.current) {
          containerRef.current.textContent = `Error rendering formula: ${formulaString}`;
        }
      }
    }
  }, [formulaString]);

  return (
    <div 
      ref={containerRef} 
      className="my-4 p-3 bg-slate-800 bg-opacity-40 border border-[rgba(0,240,240,0.2)] rounded-md overflow-x-auto glassmorphic"
      aria-label={`Mathematical formula: ${formulaString}`}
    >
      {/* KaTeX will render here */}
    </div>
  );
};

export default FormulaDisplay;
