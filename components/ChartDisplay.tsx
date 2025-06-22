
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto'; // Using auto to automatically register controllers, elements, scales, plugins
import { ChartDataType } from '../types';

interface ChartDisplayProps {
  chartData: ChartDataType;
}

const ChartDisplay = ({ chartData }: ChartDisplayProps): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !chartData) return;

    // Destroy existing chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
      chartInstanceRef.current = null;
    }

    const { type, labels, datasets, options: customOptions, title } = chartData;

    // Default options for dark theme
    const defaultOptions: Record<string, any> = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 240, 240, 0.1)', // Muted cyan grid lines
            borderColor: 'rgba(0, 240, 240, 0.15)',
          },
          ticks: {
            color: '#adb5bd', // Light gray text for ticks (Tailwind gray-400)
            font: {
              family: "'Inter', sans-serif",
            }
          },
        },
        x: {
          grid: {
            color: 'rgba(0, 240, 240, 0.1)',
            borderColor: 'rgba(0, 240, 240, 0.15)',
          },
          ticks: {
            color: '#adb5bd',
            font: {
              family: "'Inter', sans-serif",
            }
          },
        },
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: '#d1d5db', // Light gray for legend (Tailwind gray-300)
            font: {
              family: "'Inter', sans-serif",
              size: 14,
            }
          },
        },
        title: {
          display: !!title,
          text: title || '',
          color: '#00f0f0', // Bright cyan for chart title
          font: {
            family: "'Inter', sans-serif",
            size: 18,
            weight: '700', // Bold
          },
          padding: {
            top: 10,
            bottom: 20,
          }
        },
        tooltip: {
          backgroundColor: 'rgba(15, 20, 30, 0.85)', // Darker glassmorphic tooltip
          titleFont: { family: "'Inter', sans-serif", weight: 'bold' },
          bodyFont: { family: "'Inter', sans-serif" },
          titleColor: '#00f0f0',
          bodyColor: '#d1d5db',
          borderColor: 'rgba(0, 240, 240, 0.5)',
          borderWidth: 1,
          padding: 10,
          boxPadding: 5,
          callbacks: {
            label: function(context: any) { 
                let label = context.dataset.label || '';
                if (label) {
                    label += ': ';
                }
                if (context.parsed.y !== null) {
                    label += new Intl.NumberFormat('en-US').format(context.parsed.y);
                }
                return label;
            }
          }
        }
      },
    };

    // Deep merge custom options with default options
    const mergedOptions = { 
      ...defaultOptions, 
      ...customOptions,
      scales: {
        x: { ...defaultOptions.scales.x, ...customOptions?.scales?.x },
        y: { ...defaultOptions.scales.y, ...customOptions?.scales?.y },
      },
      plugins: {
        ...defaultOptions.plugins,
        ...customOptions?.plugins,
        legend: { ...defaultOptions.plugins.legend, ...customOptions?.plugins?.legend },
        title: { ...defaultOptions.plugins.title, ...customOptions?.plugins?.title },
        tooltip: { ...defaultOptions.plugins.tooltip, ...customOptions?.plugins?.tooltip },
      }
    };
    
    const themedDatasets = datasets.map(dataset => ({
        ...dataset,
        backgroundColor: dataset.backgroundColor || 'rgba(0, 240, 240, 0.4)', 
        borderColor: dataset.borderColor || 'rgba(0, 240, 240, 0.8)',
        borderWidth: dataset.borderWidth || 1.5,
        pointBackgroundColor: dataset.borderColor || 'rgba(0, 240, 240, 0.8)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: dataset.borderColor || 'rgba(0, 240, 240, 1)',
        tension: type === 'line' ? 0.3 : undefined,
    }));


    try {
      chartInstanceRef.current = new Chart(canvasRef.current, {
        type: type,
        data: {
          labels: labels,
          datasets: themedDatasets,
        },
        options: mergedOptions,
      });
    } catch (error) {
        console.error("Chart.js rendering error:", error);
        if(canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                ctx.clearRect(0,0, canvasRef.current.width, canvasRef.current.height);
                ctx.fillStyle = 'red';
                ctx.font = '16px Inter';
                ctx.fillText('Error rendering chart.', 10, 50);
            }
        }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [chartData]);

  return (
    <div className="my-6 p-4 glassmorphic shadow-xl rounded-lg" style={{ height: '400px', position: 'relative' }}>
      <canvas ref={canvasRef} aria-label={chartData.title || `Chart type ${chartData.type}` } role="img"></canvas>
    </div>
  );
};

export default ChartDisplay;
