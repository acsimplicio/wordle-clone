import React from "react";

function GuessInput({ handleGuessSubmission, finished }) {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (guess.length !== 5) {
      window.alert('Eita! Você precisa de exatamente 5 letras! Nem mais, nem menos ;D');
      return;
    }

    handleGuessSubmission(guess);

    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        disabled={finished}
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
