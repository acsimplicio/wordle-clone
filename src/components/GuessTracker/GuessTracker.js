import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";
import { range } from "../../utils";

function GuessTracker({ guessTrack, answer }) {
  return (
    <div className='guess-results'>
      {
        range(NUM_OF_GUESSES_ALLOWED).map((index) => (
          <Guess key={`row-${index}`} guessText={guessTrack[index]} answer={answer} />
        ))
      }
    </div>
  );
}

export default GuessTracker;
