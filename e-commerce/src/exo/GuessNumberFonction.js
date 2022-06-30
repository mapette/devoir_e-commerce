import React, { useState } from 'react';

function GuessNumberFonction() {

  let [nClick, setNClick] = useState(0)
  return (

    <div>
      <p>
        {nClick} times !
      </p>
      <div>
        <button
          onClick={() => setNClick(nClick + 1)}
        >clicked</button>
      </div>
      <div>
        <button
          onClick={() => setNClick(0)}
        >init</button>
      </div>
    </div>
  )
}

export default GuessNumberFonction;


/*
<form onSubmit={this.calcul.bind(this)}>
<div>
          <button type='submit' >Essaie encore une fois</button>
        </div>*/
