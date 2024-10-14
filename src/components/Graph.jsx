import React from 'react';
import { Line } from 'react-chartjs-2';

const Graph = () => {
  const data = {
    labels: Array.from({ length: 10 }, (_, i) => i),
    datasets: [
      {
        label: 'y = x^2',
        data: Array.from({ length: 10 }, (_, x) => x ** 2),
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue'
      }
    ]
  };

  return <Line data={data} />;
};

export default Graph;
