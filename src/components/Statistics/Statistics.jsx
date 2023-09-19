import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h1>Statistics</h1>
      <span>Good:{good}</span>
      <span>Neutral:{neutral}</span>
      <span>Bad:{bad}</span>
      <span>Total:{total}</span>
       <span>Positive feedback:{positivePercentage}%</span>
    </div>
  );
};

export default Statistics
