import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";
import StartOver from "../StartOver";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  const noCorrectGuess =
    guessList.length === NUM_OF_GUESSES_ALLOWED && guessList.at(-1) !== answer;

  const correctGuess = guessList.at(-1) === answer;

  const gameOver = noCorrectGuess || correctGuess;

  function addGuess(guess) {
    if (guessList.length >= NUM_OF_GUESSES_ALLOWED) return;
    if (guessList.find((g) => g === guess)) return;

    const newGuessList = [...guessList, guess];

    setGuessList(newGuessList);
  }

  function clearGuesses() {
    setGuessList([]);
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={gameOver} />
      {noCorrectGuess && (
        <SadBanner answer={answer}>
          <StartOver clearGuesses={clearGuesses} />
        </SadBanner>
      )}
      {correctGuess && (
        <HappyBanner tries={guessList.length}>
          <StartOver clearGuesses={clearGuesses} />
        </HappyBanner>
      )}
    </>
  );
}

export default Game;
