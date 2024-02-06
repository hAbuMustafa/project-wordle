import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");
  return (
    <form
      class="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();

        console.log("Guess:", guess);

        setGuess("");
      }}
    >
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        pattern="[A-Z]{5}"
        title="Enter a 5-letter word (real word 🙄)"
        value={guess}
        maxLength={5}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
