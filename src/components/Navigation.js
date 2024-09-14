import React from 'react';

const Navigation = ({ currentQuestionIndex, totalQuestions, onPrevious, onNext, onSkip, onSubmit }) => {
  return (
    <div>
      <button  onClick={onPrevious} disabled={currentQuestionIndex === 0}>Previous</button>
      <button  onClick={onSkip}>Skip</button>
      {currentQuestionIndex < totalQuestions - 1 ? (
        <button  onClick={onNext}>Next</button>
      ) : (
        <button onClick={onSubmit}>Submit</button>
      )}
    </div>
  );
};

export default Navigation;
