const mongoose = require('mongoose');

const QuestionPaperSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  subject: { type: String, required: true },
  status: { type: String, enum: ['approved', 'disapproved', 'pending'], default: 'pending' },
  feedback: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('QuestionPaper', QuestionPaperSchema);
