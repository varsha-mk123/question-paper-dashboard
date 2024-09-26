import React, { useState, useEffect } from 'react';
import axios from '../axiosService';  // Import Axios Service

function Dashboard() {
  const [questionPapers, setQuestionPapers] = useState([]);
  const [feedback, setFeedback] = useState('');

  // Fetch all question papers from the API when component mounts
  useEffect(() => {
    axios.get('/question-papers')
      .then(response => {
        setQuestionPapers(response.data);
      })
      .catch(error => {
        console.error('Error fetching question papers', error);
      });
  }, []);

  // Handler to approve/reject question papers
  const handleApproval = (id, status) => {
    axios.post(`/question-papers/${id}/approve`, { status, feedback })
      .then(response => {
        alert(`Question paper ${status === 'approved' ? 'approved' : 'rejected'}`);
        setFeedback('');  // Reset feedback if rejected
      })
      .catch(error => {
        console.error('Error updating question paper status', error);
      });
  };

  return (
    <div>
      <h1>Question Paper Dashboard</h1>
      <button onClick={() => window.location.href='/create-question-paper'}>Create Question Paper</button>
      <div className="question-papers">
        {questionPapers.map(qp => (
          <div key={qp._id} className="question-paper">
            <h3>{qp.title}</h3>
            <p>{qp.year}</p>
            <p>{qp.subject}</p>
            <p>Status: {qp.status}</p>

            {/* Approval / Rejection */}
            <label>
              <input type="checkbox" onClick={() => handleApproval(qp._id, 'approved')} /> Approve
            </label>
            <label>
              <input type="checkbox" onClick={() => handleApproval(qp._id, 'rejected')} /> Reject
            </label>

            {/* Show feedback box if rejected */}
            {qp.status === 'rejected' && (
              <div>
                <textarea
                  placeholder="Provide feedback for rejection"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;



