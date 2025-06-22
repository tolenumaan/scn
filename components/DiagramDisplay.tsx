
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface DiagramDisplayProps {
  diagramDefinition: string;
}

const DiagramDisplay = ({ diagramDefinition }: DiagramDisplayProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Using a combination of a static counter and timestamp for more robust unique IDs for mermaid.
  // useRef to persist counter across re-renders without causing them.
  const instanceIdCounter = useRef(Date.now()); 

  useEffect(() => {
    const renderMermaidDiagram = async () => {
      if (containerRef.current) {
        if (diagramDefinition && typeof diagramDefinition === 'string' && diagramDefinition.trim() !== '') {
          // Increment counter for each new diagram render attempt on this component instance
          instanceIdCounter.current += 1;
          const uniqueSvgId = `mermaid-svg-${instanceIdCounter.current}`;
          
          try {
            // Modern Mermaid API: mermaid.render(id, definition) returns a Promise
            const { svg, bindFunctions } = await mermaid.render(uniqueSvgId, diagramDefinition.trim());
            
            if (containerRef.current) {
              containerRef.current.innerHTML = svg;
              if (bindFunctions) {
                // bindFunctions is used to attach event handlers for interactive diagrams
                bindFunctions(containerRef.current);
              }
            }
          } catch (error) {
            console.error("Mermaid rendering error:", error);
            if (containerRef.current) {
              const errorMessage = (error instanceof Error) ? error.message : "Unknown error processing diagram.";
              // Ensure error message is safely displayed (though pre typically handles text well)
              const pre = document.createElement('pre');
              pre.className = "text-red-400 whitespace-pre-wrap p-2";
              pre.textContent = `Error rendering diagram: ${errorMessage}`;
              containerRef.current.innerHTML = ''; // Clear previous content
              containerRef.current.appendChild(pre);
            }
          }
        } else {
          // Clear content or show placeholder if no valid diagram definition is provided
          containerRef.current.innerHTML = '<p class="text-slate-500 p-4 text-center">No diagram definition provided or definition is empty.</p>';
        }
      }
    };

    renderMermaidDiagram();
  }, [diagramDefinition]); // Re-run effect if diagramDefinition changes

  return (
    <div 
      ref={containerRef} 
      className="my-6 p-4 glassmorphic shadow-xl rounded-lg overflow-auto mermaid-container flex flex-col justify-center items-center bg-slate-900 bg-opacity-40 min-h-[200px]"
      aria-label="Diagram display area" // Generic label, as content changes
    >
      {/* Mermaid SVG or error/placeholder text will be rendered here by useEffect */}
      <p className="text-slate-500 p-4 text-center">Initializing diagram display...</p> {/* Initial placeholder */}
    </div>
  );
};

export default DiagramDisplay;
