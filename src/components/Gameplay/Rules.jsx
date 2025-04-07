import React from "react";

const Rules = ({ showRules }) => {
  return (
    <div className="mt-8 mb-16">
      {showRules && (
        <div className="bg-black p-6 rounded-xl">
          <h1 className="text-teal-300 font-semibold text-2xl">
            How to play dice game
          </h1>
          <ul>
            <li className="text-gray-300 font-semibold ">Select any number</li>
            <li className="text-gray-300 font-semibold ">
              Click on dice image
            </li>
            <li className="text-gray-300 font-semibold ">
              after click on dice if selected number is equal to dice number you
              will get same point as dice{" "}
            </li>
            <li className="text-gray-300 font-semibold ">
              if you get wrong guess then 2 point will be dedcuted{" "}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Rules;
