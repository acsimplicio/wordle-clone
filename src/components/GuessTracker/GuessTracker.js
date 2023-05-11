import React from "react";

function GuessTracker({ guessTrack }) {
  return (
    <div className='guess-results'>
      {
        guessTrack.map((guess, index) => (
          <p className="guess" key={index}>{guess}</p>
        ))
      }
    </div>
  );
}

export default GuessTracker;
