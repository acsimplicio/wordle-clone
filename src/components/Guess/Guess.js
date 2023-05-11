import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guessText, answer }) {

  const validatedGuess = checkGuess(guessText, answer)

  return (
    <p className="guess">
      {
        validatedGuess ?
        validatedGuess.map((char, index) => (
          <span className={`cell ${char.status}`} key={`cell-${index}`}>
            {char.letter}
          </span>
        )) :
        range(5).map((index) => (
          <span className="cell" key={`cell-${index}`}></span>
        ))
      }
    </p>
  );
}

export default Guess;
