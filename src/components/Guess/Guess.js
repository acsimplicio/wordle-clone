import React from "react";
import { range } from "../../utils";

function Guess({ guessText }) {
  return (
    <p className="guess">
      {
        range(5).map((index) => (
          <span className="cell" key={`cell-${index}`}>
            {guessText ? guessText[index] : undefined}
          </span>
        ))
      }
    </p>
  );
}

export default Guess;
