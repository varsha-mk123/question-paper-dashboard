import React, { useState } from 'react';
import FeedbackBox from './FeedbackBox';

const PaperStatus = () => {
  const [isRejected, setIsRejected] = useState(false);

  const handleRejectionChange = (event) => {
    setIsRejected(event.target.checked);
  };

  return (
    <div className="paper-status">
      <h2>Paper Approval Status</h2>
      <div>
        <label>
          <input type="checkbox" /> Approved by HOD
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" /> Approved by Principal
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" onChange={handleRejectionChange} /> Rejected
        </label>
      </div>
      
      {/* Show feedback box if rejected */}
      {isRejected && <FeedbackBox />}
    </div>
  );
};

export default PaperStatus;
