import React from "react";
import { range } from "../../utils";
import Guess from "../Guess";

function GuessResults({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(6).map((_, i) => (
        <Guess key={i * Math.random()} guess={guessList[i]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
