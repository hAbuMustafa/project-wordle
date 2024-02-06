import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";
import StartOver from "../StartOver";
import Keyboard from "../Keyboard";

const stuatuses = ["correct", "misplaced", "incorrect"];
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  console.info({ answer });
  const [guessList, setGuessList] = React.useState([]);
  const [statusList, setStatusList] = React.useState([]);

  const noCorrectGuess =
    guessList.length === NUM_OF_GUESSES_ALLOWED && guessList.at(-1) !== answer;

  const correctGuess = guessList.at(-1) === answer;

  const gameOver = noCorrectGuess || correctGuess;

  function calculateCharStatus(gl) {
    const newStatusList = [...gl.map((ges) => checkGuess(ges, answer)).flat()]
      .sort((a, b) => chars.indexOf(a.letter) - chars.indexOf(b.letter))
      .sort(
        (a, b) => stuatuses.indexOf(a.status) - stuatuses.indexOf(b.status)
      );
    console.log(newStatusList);
    setStatusList(newStatusList);
  }

  function addGuess(guess) {
    if (guessList.length >= NUM_OF_GUESSES_ALLOWED) return;
    if (guessList.find((g) => g === guess)) return;

    const newGuessList = [...guessList, guess];

    setGuessList(newGuessList);

    calculateCharStatus(newGuessList);
  }

  function clearGuesses() {
    setGuessList([]);

    setAnswer(sample(WORDS));
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={gameOver} />
      <Keyboard statusList={statusList} />
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
