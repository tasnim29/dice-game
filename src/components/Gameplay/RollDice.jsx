import React, { useState } from "react";
import "./rolldice.css";
import Rules from "./Rules";

const RollDice = ({ handleDice, dice, resetScore }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const handleRules = () => {
    setShowRules(!showRules);
  };

  const handleSpin = () => {
    setIsSpinning(true);

    // Wait for 2 seconds (spin duration) before changing the image
    setTimeout(() => {
      handleDice(1, 7); // Generate a new random dice value
      setIsSpinning(false); // Stop spinning animation
    }, 400);
  };
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <img
          className={`cursor-pointer ${isSpinning ? "spin" : ""}`}
          onClick={handleSpin}
          src={`/dice_${dice}.png`}
          alt="dice_1"
        />
      </div>
      <h1 className="text-3xl font-bold animate-bounce">
        Click on Dice to roll
      </h1>
      <div>
        <button
          onClick={resetScore}
          className="bg-black text-white font-medium px-10 py-3 mt-6 border border-gray-300 shadow hover:shadow-lg hover:-translate-y-1 hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer"
        >
          Reset Score
        </button>
      </div>
      <div>
        <button
          onClick={handleRules}
          className="bg-black text-white font-medium px-10 py-3 mt-6 border border-gray-300 shadow hover:shadow-lg hover:-translate-y-1 hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer"
        >
          Show Rules
        </button>
      </div>
      <div>
        <Rules showRules={showRules}></Rules>
      </div>
    </div>
  );
};

export default RollDice;
