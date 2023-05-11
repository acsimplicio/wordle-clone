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
  const [endResult, setEndResult] = React.useState({finish: false, win: false, tries: 0});

  const handleGuessSubmission = (newGuess) => {
    const newGuessTrack = [...guessTrack, newGuess]
    setGuessTrack(newGuessTrack);
    
    if (newGuess === answer) {
      setEndResult({
        finish: true,
        win: true,
        tries: newGuessTrack.length
      });
    }

    if (newGuessTrack.length >= NUM_OF_GUESSES_ALLOWED) {
      setEndResult({
        finish: true,
        win: false,
        tries: guessTrack.length
      });
    }
  };

  return (
    <>
      {endResult.finish &&
        <Banner endResult={endResult} answer={answer} />
      }
      <GuessTracker guessTrack={guessTrack} answer={answer} />
      <GuessInput handleGuessSubmission={handleGuessSubmission} finished={endResult.finish} />
    </>
  );
}

export default Game;
