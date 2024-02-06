import React from "react";

const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

function Keyboard({ statusList }) {
  return (
    <div className="keyboard">
      {rows.map((row) => (
        <p key={row}>
          {row.split("").map((char) => (
            <span
              key={char}
              className={
                statusList.find((item) => item.letter === char)?.status
              }
            >
              {char}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Keyboard;
