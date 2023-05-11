import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessTracker from "../GuessTracker/GuessTracker";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessTrack, setGuessTrack] = React.useState([]);

  const handleGuessSubmission = (newGuess) => {
    setGuessTrack(prev => [...prev, newGuess])
  };

  return (
    <>
      <GuessTracker guessTrack={guessTrack} />
      <GuessInput handleGuessSubmission={handleGuessSubmission} />
    </>
  );
}

export default Game;
