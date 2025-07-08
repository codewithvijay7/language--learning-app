import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './QuizPage.css'; // Optional CSS file

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('/api/quiz')
      .then(res => {
        // Remove the `res.data.success` check since your server just returns an array directly
        setQuestions(res.data);
      })
      .catch(() => setError('Something went wrong fetching quiz'))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (qid, value) => {
    setAnswers(prev => ({ ...prev, [qid]: value }));
  };

  const handleSubmit = () => {
    axios.post('/api/quiz/submit', { answers })
      .then(res => {
        setScore(res.data.score);
      })
      .catch(() => {
        setError('Failed to submit quiz');
      });
  };

  if (loading) return <p>Loading quiz...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="quiz-container">
      <h2>🧠 Language Quiz</h2>
      {questions.map(q => (
        <div key={q.id} className="question-box">
          <h4>{q.question}</h4>
          {q.options.map(opt => (
            <label key={opt}>
              <input
                type="radio"
                name={`q${q.id}`}
                value={opt}
                checked={answers[q.id] === opt}
                onChange={() => handleChange(q.id, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Quiz</button>
      {score !== null && <h3>🎉 Your Score: {score}/{questions.length}</h3>}
    </div>
  );
};

export default QuizPage;

