import React from "react";

function Banner({ endResult, tries, answer }) {
  return (
    <div className={`${endResult === 'won' ? 'happy' : 'sad'} banner`}>
      <p>
        {endResult === 'won' ?
          <>
            <strong>Parabéns!</strong> Você conseguiu em <strong>{tries}</strong> tentativas!
          </>
          :
          <>Opa, perdeu! Era {answer}</>
        }
      </p>
    </div>
  );
}

export default Banner;
