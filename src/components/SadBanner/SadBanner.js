import React from "react";

function SadBanner({ answer, children }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>. {children}
      </p>
    </div>
  );
}

export default SadBanner;
