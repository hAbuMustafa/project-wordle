import React from "react";

function HappyBanner({ tries, children }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {tries} guesses</strong>. {children}
      </p>
    </div>
  );
}

export default HappyBanner;
