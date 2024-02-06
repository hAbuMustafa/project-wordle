import React from "react";

const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

function Keyboard() {
  return (
    <div className="keyboard">
      {rows.map((row) => (
        <p key={row}>
          {row.split("").map((char) => (
            <span key={char}>{char}</span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Keyboard;
