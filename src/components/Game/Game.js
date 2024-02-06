import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function addGuess(guess) {
    if (guessList.length >= NUM_OF_GUESSES_ALLOWED) return;
    if (guessList.find((g) => g === guess)) return;

    const newGuessList = [...guessList, guess];

    setGuessList(newGuessList);
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer}/>
      <GuessInput addGuess={addGuess} />;
    </>
  );
}

export default Game;
