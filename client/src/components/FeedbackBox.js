import React from 'react';

const FeedbackBox = () => {
  return (
    <div className="feedback-box">
      <h3>Provide Feedback for Rejection</h3>
      <textarea placeholder="Enter feedback here"></textarea>
      <button>Submit Feedback</button>
    </div>
  );
};

export default FeedbackBox;
