import React from "react";

const SelectNumber = ({ handleNumberButton, numberButton, error }) => {
  const boxes = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <div className="flex gap-5">
        {boxes.map((box, index) => (
          <button
            onClick={() => handleNumberButton(box)}
            key={index}
            className={`border-1 px-5 py-3 font-bold cursor-pointer
                ${numberButton === box && "bg-black text-white"}
                `}
          >
            {box}
          </button>
        ))}
      </div>
      <div className="flex justify-end text-2xl font-bold">
        <h1>Select Number</h1>
      </div>
      {error && (
        <div>
          <h1 className="bg-black p-5 text-white text-2xl mt-5 rounded-lg">
            {error}
          </h1>
        </div>
      )}
    </div>
  );
};

export default SelectNumber;
