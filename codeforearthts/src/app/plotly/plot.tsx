"use client";
import React from 'react';
import dynamic from 'next/dynamic';

class NewPlot extends React.Component {
  
  render() {
    "use client";
    const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
          },
          { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
      />
    );
  }
}

export default NewPlot;
