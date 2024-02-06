import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, answer }) {
  const classes = !!guess
    ? checkGuess(guess, answer).map((entry) => `cell ${entry.status}`)
    : Array(5).fill("cell");

  console.log({ answer, guess });
  return (
    <p className="guess">
      {range(5).map((_, i) => {
        return (
          <span key={i * Math.random()} className={classes[i]}>
            {!!guess && guess.charAt(i)}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
