import React, { useState } from "react";

function GuessInput({ addGuess, disabled }) {
  const [guessText, setGuessText] = useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();

        addGuess(guessText);

        setGuessText("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        autoComplete="off"
        pattern="[A-Z]{5}"
        title="Enter a 5-letter word (real word 🙄)"
        value={guessText}
        maxLength={5}
        onChange={(e) => {
          setGuessText(e.target.value.toUpperCase());
        }}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
