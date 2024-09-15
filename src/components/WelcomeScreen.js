import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div>
      <h1>Customer Survey</h1>
      <button id="surveybutton" onClick={onStart}>Start Survey</button>
    </div>
  );
};

export default WelcomeScreen;
