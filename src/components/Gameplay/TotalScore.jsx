import React from "react";

const TotalScore = ({ score }) => {
  return (
    <div className="text-center">
      <h1 className="text-6xl">{score}</h1>
      <h1 className="text-5xl">Total Score</h1>
    </div>
  );
};

export default TotalScore;
