import React from 'react';

const PaperList = () => {
  const papers = [
    { year: 2021, name: 'Physics Mid-term', status: 'Approved' },
    { year: 2022, name: 'Math Final', status: 'Disapproved' },
    // Add more papers here
  ];

  return (
    <div className="paper-list">
      <h2>Previous Year Question Papers</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Question Paper Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {papers.map((paper, index) => (
            <tr key={index}>
              <td>{paper.year}</td>
              <td>{paper.name}</td>
              <td>{paper.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaperList;
