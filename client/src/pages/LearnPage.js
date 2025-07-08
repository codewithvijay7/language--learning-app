// client/src/pages/LearnPage.js
import './LearnPage.css';

import React from 'react';
import './LearnPage.css'; // optional for custom styles

const courses = [
  { name: 'Spanish', level: 'Beginner', emoji: '🇪🇸', description: 'Start your journey with basic Spanish phrases and grammar.' },
  { name: 'French', level: 'Beginner', emoji: '🇫🇷', description: 'Learn how to introduce yourself and more in French.' },
  { name: 'German', level: 'Intermediate', emoji: '🇩🇪', description: 'Boost your German skills with everyday conversation.' },
  { name: 'Japanese', level: 'Beginner', emoji: '🇯🇵', description: 'Learn Hiragana, Katakana, and essential phrases.' },
  { name: 'Hindi', level: 'Beginner', emoji: '🇮🇳', description: 'Dive into basic Hindi speaking and vocabulary.' },
];

const LearnPage = () => {
  return (
    <div className="learn-container">
      <h2>📘 Welcome to the Learn Page!</h2>
      <p>Select a course below to get started:</p>

      <div className="course-list">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.emoji} {course.name}</h3>
            <p><strong>Level:</strong> {course.level}</p>
            <p>{course.description}</p>
            <button className="start-btn">Start Course</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;
