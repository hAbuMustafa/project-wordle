import React from "react";
import { range } from "../../utils";
import Guess from "../Guess";

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {range(6).map((_, i) => (
        <Guess guess={guessList[i]} />
      ))}
    </div>
  );
}

export default GuessResults;
