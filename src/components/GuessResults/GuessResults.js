import React from "react";
import { range } from "../../utils";

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {range(6).map((_, i) => {
        if (guessList[i]) {
          return (<p className="guess" key={i}>
            {guessList[i].split("").map((letter) => (
              <span className="cell">{letter}</span>
            ))}
          </p>)
        } else {
          return (
            <p className="guess" key={i}>
              {range(5).map(() => (
                <span className="cell"></span>
              ))}
            </p>
          );
        }
      })}
    </div>
  );
}

export default GuessResults;
