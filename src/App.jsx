import { useState } from "react";
import "./App.css";
import Cover from "./components/Cover/Cover";
import Gameplay from "./components/Gameplay/Gameplay";

function App() {
  const [page, setPage] = useState(false);
  const handleChangePage = () => {
    setPage(!page);
  };

  const [numberButton, setNumberButton] = useState(0);
  const handleNumberButton = (boxNumber) => {
    setNumberButton(boxNumber);
  };

  const [dice, setDice] = useState(1);
  const [error, setError] = useState("");
  const handleDice = (min, max) => {
    if (!numberButton) {
      setError("Please Select a Number first!!");
      return;
    }

    setError("");
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    setDice(randomNumber);

    if (numberButton === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 1);
    }
  };

  const [score, setScore] = useState(0);

  const resetScore = () => {
    setScore(0);
  };

  // useEffect(() => {
  //   if (numberButton === 0) {
  //     alert("Please select a number");
  //     return;
  //   }
  //   if (numberButton === dice) {
  //     setScore((prev) => prev + dice);
  //   } else {
  //     setScore((prev) => prev - 1);
  //   }
  // }, [dice]); // trigger this when dice changes

  return (
    <>
      {page ? (
        <Cover handleChangePage={handleChangePage}></Cover>
      ) : (
        <Gameplay
          handleDice={handleDice}
          dice={dice}
          handleNumberButton={handleNumberButton}
          score={score}
          numberButton={numberButton}
          error={error}
          resetScore={resetScore}
        ></Gameplay>
      )}
    </>
  );
}

export default App;
