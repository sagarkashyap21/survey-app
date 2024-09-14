import React, { useState } from 'react';
import { questions } from '../surveyData';

const SurveyQuestion = ({ currentQuestionIndex, onNext, onPrevious, onSkip, onSubmit }) => {
  const [answer, setAnswer] = useState('');
  
  // Check if the current question index is within bounds
  const question = questions[currentQuestionIndex];
  
  if (!question) {
    return <div>Error: Question not found.</div>;
  }
  
  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (answer) {
      localStorage.setItem(`question_${question.id}_answer`, answer);
      if (currentQuestionIndex === questions.length - 1) {
        onSubmit(); // Trigger submit if it's the last question
      } else {
        onNext(); // Otherwise, go to the next question
      }
    } else {
      alert('Please provide an answer before proceeding.');
    }
  };

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}/{questions.length}</h2>
      <p className="question">{question.text}</p>
      {question.type === 'rating' && (
        <input
          type="number"
          min="1"
          max={question.scale}
          value={answer}
          onChange={handleChange}
          className="input"
        />
      )}
      {question.type === 'text' && (
        <textarea
          value={answer}
          onChange={handleChange} 
          
        />
      )}
      <div>
        <button onClick={onPrevious} disabled={currentQuestionIndex === 0}>Previous</button>
        <button onClick={onSkip}>Skip</button>
        {currentQuestionIndex < questions.length - 1 ? (
          <button onClick={handleSubmit}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default SurveyQuestion;
