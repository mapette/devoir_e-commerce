import React, { useState, useEffect } from 'react';

function Bouton(props) {
  return (
    <button onClick={props.aFaireQuandOnClick}>
      {props.txt}
    </button >
  )
}

function CptClickFonction() {

  let [nb, setNb] = useState(0)
  let [name, setName] = useState('1000')



  useEffect(() => {
    if (nb !== 0) {
      //    alert(`Vous avez cliqué ${nb} fois`)
    }
  }, [nb]);

  useEffect(() => {
    if (nb !== 0) {
      //   alert(`nombre aléatoire changé`)
    }
  }, [name]);


  function incrementerClicks() {
    setNb(nb + 1)
  }
  function changerNom() {
    setName(Math.floor(Math.random() * 10))
  }
  function lesDeux(){
    incrementerClicks()
    changerNom()
  }
  return (
    <div>
      <p>
        nombre aléatoire {name}
      </p>
      <p>
        <Bouton
          txt={'générer nb aléatoire'}
          aFaireQuandOnClick={changerNom}
        /></p>
      ***************************************************
      <p>
        {nb} Clicks
      </p>
      <p>
        <Bouton
          txt={'compter les clics'}
          aFaireQuandOnClick={incrementerClicks}
        />
      </p>
      ***************************************************
      <p>
        <Bouton
          txt={'je fais les deux !'}
          aFaireQuandOnClick={lesDeux}
        />
      </p>
    </div>
  )
}

export default CptClickFonction;


/*
        </div>*/
