import React from "react";

function StartOver({ clearGuesses }) {
  return <button onClick={clearGuesses}>Start Over?</button>;
}

export default StartOver;
