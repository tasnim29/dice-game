import React from "react";

const Cover = ({ handleChangePage }) => {
  return (
    <div className="flex flex-wrap px-10 justify-center items-center min-h-screen bg-gradient-to-br from-black via-zinc-800 to-gray-900">
      <img src="/banner.png" alt="" />

      <div className="flex flex-col items-end">
        <h1 className="text-8xl font-semibold text-white">Dice Game</h1>
        <button
          onClick={handleChangePage}
          className="bg-white font-semibold text-black px-12 py-2 mt-5 cursor-pointer hover: border border-white hover:bg-black hover:text-white rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 "
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Cover;
