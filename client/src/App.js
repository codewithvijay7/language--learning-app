import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import QuizPage from './pages/QuizPage';
import LearnPage from './pages/LearnPage';
import CoursePage from './pages/CoursePage'; // ✅ Add this line

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header>
        <h1>🌐 LinguaLearn</h1>
        <p>Master new languages with interactive lessons, quizzes, and more.</p>
      </header>

      <main className="main">
        <div className="text-box">
          <h2>Learn Languages the <span>Smart Way</span></h2>
          <p>Interactive lessons, quizzes, and personalized sessions.</p>
          <div className="buttons">
            <button onClick={() => navigate('/learn')}>Start Learning</button>
            <button onClick={() => navigate('/demo')}>View Demo</button>
            <button onClick={() => navigate('/quiz')}>Take Quiz</button>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
            <button onClick={() => navigate('/signin')}>Sign In</button>
          </div>
        </div>
        <div className="image-box">
          <img src="https://via.placeholder.com/300" alt="learning" />
        </div>
      </main>

      <section className="features">
        <div>
          <h3>🌐 Interactive Lessons</h3>
          <p>Learn by doing with fun exercises.</p>
        </div>
        <div>
          <h3>🧠 Practice Quizzes</h3>
          <p>Test your progress with smart quizzes.</p>
        </div>
        <div>
          <h3>📊 Track Progress</h3>
          <p>See how far you've come with progress tracking.</p>
        </div>
      </section>
    </div>
  );
}

function DemoPage() {
  return <h2>🎥 Welcome to the Demo Page!</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/course/:lang" element={<CoursePage />} /> {/* ✅ Add this route */}
      </Routes>
    </Router>
  );
}

export default App;



