import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import SurveyQuestion from './components/SurveyQuestion';
import ThankYouScreen from './components/ThankYouScreen';
import './App.css';
import { questions } from './surveyData';

const App = () => {
  const [isSurveyStarted, setIsSurveyStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [surveyCompleted, setSurveyCompleted] = useState(false);

  const handleStart = () => {
    setIsSurveyStarted(true);
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSkip = () => {
    // Save a skip action if needed
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleSubmit = () => {
    if (window.confirm('Are you sure you want to submit the survey?')) {
      // Set survey status as completed
      localStorage.setItem('survey_status', 'COMPLETED');
      setSurveyCompleted(true);
    }
  };

  const handleReturnToWelcome = () => {
    setIsSurveyStarted(false);
    setCurrentQuestionIndex(0);
    setSurveyCompleted(false);
  };

  return (
    <div className="cont">
    <div className="container">
      {surveyCompleted ? (
        <ThankYouScreen onReturn={handleReturnToWelcome} />
      ) : (
        !isSurveyStarted ? (
          <WelcomeScreen onStart={handleStart} />
        ) : (
          <SurveyQuestion
            currentQuestionIndex={currentQuestionIndex}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onSkip={handleSkip}
            onSubmit={handleSubmit}
          />
        )
      )}
    </div>
    </div>
  );
};

export default App;
