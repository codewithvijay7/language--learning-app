// server/routes/quizRoutes.js

const express = require('express');
const router = express.Router();

// Sample quiz data
const quizzes = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    id: 2,
    question: "Which language is primarily spoken in Brazil?",
    options: ["Spanish", "Portuguese", "English", "French"],
    answer: "Portuguese"
  }
];

// GET: Return quiz questions (without answers)
router.get('/', (req, res) => {
  const visibleQuestions = quizzes.map(({ answer, ...rest }) => rest);
  res.json(visibleQuestions);
});

// POST: Submit answers and return score
router.post('/submit', (req, res) => {
  const { answers } = req.body;
  let score = 0;

  quizzes.forEach((q, i) => {
    if (answers[i] === q.answer) score++;
  });

  res.json({ score, total: quizzes.length });
});

module.exports = router;
