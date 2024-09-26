import React, { useState } from 'react';
import axios from '../axiosService';

function CreateQuestionPaper() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/question-papers', { title, year, subject })
      .then(response => {
        alert('Question paper created successfully!');
      })
      .catch(error => {
        console.error('Error creating question paper', error);
      });
  };

  return (
    <div>
      <h1>Create New Question Paper</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateQuestionPaper;
