import React from "react";
import TotalScore from "./totalScore";
import SelectNumber from "./SelectNumber";
import RollDice from "./RollDice";

const Gameplay = ({
  handleDice,
  dice,
  handleNumberButton,
  score,
  numberButton,
  error,
  resetScore,
}) => {
  return (
    <div className="px-10 min-h-screen bg-gradient-to-br from-white via-slate-300 to-gray-300">
      <div className="flex flex-wrap gap-5 justify-around items-center">
        <TotalScore score={score}></TotalScore>
        <SelectNumber
          handleNumberButton={handleNumberButton}
          numberButton={numberButton}
          error={error}
        ></SelectNumber>
      </div>
      <div className="mt-28 flex justify-center">
        <RollDice
          handleDice={handleDice}
          dice={dice}
          resetScore={resetScore}
        ></RollDice>
      </div>
    </div>
  );
};

export default Gameplay;
