import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessTracker from "../GuessTracker/GuessTracker";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessTrack, setGuessTrack] = React.useState([]);
  const [endResult, setEndResult] = React.useState('running');

  const handleGuessSubmission = (newGuess) => {
    const newGuessTrack = [...guessTrack, newGuess]
    setGuessTrack(newGuessTrack);

    if (newGuess === answer) {
      setEndResult(`won`);
    }

    if (newGuessTrack.length >= NUM_OF_GUESSES_ALLOWED) {
      setEndResult('lost');
    }
  };

  return (
    <>
      {endResult !== 'running' &&
        <Banner endResult={endResult} tries={guessTrack.length} answer={answer} />
      }
      <GuessTracker guessTrack={guessTrack} answer={answer} />
      <GuessInput handleGuessSubmission={handleGuessSubmission} finished={endResult !== 'running'} />
    </>
  );
}

export default Game;
