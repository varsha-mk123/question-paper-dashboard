const express = require('express');
const router = express.Router();
const QuestionPaper = require('../models/QuestionPaper');

// Get all question papers
router.get('/', async (req, res) => {
  try {
    const papers = await QuestionPaper.find();
    res.json(papers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get question papers by status (approved, disapproved, pending)
router.get('/:status', async (req, res) => {
  try {
    const papers = await QuestionPaper.find({ status: req.params.status });
    res.json(papers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new question paper
router.post('/', async (req, res) => {
  const paper = new QuestionPaper({
    title: req.body.title,
    year: req.body.year,
    subject: req.body.subject,
    status: req.body.status,
    feedback: req.body.feedback
  });

  try {
    const newPaper = await paper.save();
    res.status(201).json(newPaper);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a question paper's status or feedback
router.put('/:id', async (req, res) => {
  try {
    const paper = await QuestionPaper.findById(req.params.id);
    if (!paper) return res.status(404).json({ message: 'Paper not found' });

    if (req.body.status) paper.status = req.body.status;
    if (req.body.feedback) paper.feedback = req.body.feedback;

    const updatedPaper = await paper.save();
    res.json(updatedPaper);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
