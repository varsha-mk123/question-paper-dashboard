

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CreateQuestionPaper from './components/CreateQuestionPaper';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-question-paper" element={<CreateQuestionPaper />} />
      </Routes>
    </Router>
  );
}

export default App;
