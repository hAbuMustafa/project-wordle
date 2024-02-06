import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((_, i) => (
        <span className="cell">{!!guess && guess.charAt(i)}</span>
      ))}
    </p>
  );
}

export default Guess;
