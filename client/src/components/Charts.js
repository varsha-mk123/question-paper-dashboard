import React from 'react';
import { Line } from 'react-chartjs-2';

const Charts = () => {
  const data = {
    labels: ['2020', '2021', '2022'],
    datasets: [
      {
        label: 'Approved Papers',
        data: [5, 10, 7],
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Rejected Papers',
        data: [1, 2, 3],
        borderColor: 'red',
        fill: false,
      },
    ],
  };

  return (
    <div className="charts">
      <h2>Question Paper Statistics</h2>
      <Line data={data} />
    </div>
  );
};

export default Charts;
