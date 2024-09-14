import React, { useEffect } from 'react';

const ThankYouScreen = ({ onReturn }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onReturn();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onReturn]);

  return (
    <div>
      <h1>Thank you for your time!</h1>
      <p style={{margin:".6rem 0 0 .3rem"}}>We appreciate your feedback.</p>
    </div>
  );
};

export default ThankYouScreen;
