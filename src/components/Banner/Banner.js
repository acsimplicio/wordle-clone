import React from "react";

function Banner({ endResult, answer }) {
  return (
    <div className={`${endResult.win ? 'happy' : 'sad'} banner`}>
      <p>
        {endResult.win ?
          <>
            <strong>Parabéns!</strong> Você conseguiu em <strong>{endResult.tries}</strong> tentativas!
          </>
          :
          <>Opa, perdeu! Era {answer}</>
        }
      </p>
    </div>
  );
}

export default Banner;
