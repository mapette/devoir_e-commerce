import { useEffect, useState } from "react"

function Panier(props) {

  function validPanier(event) {
    fetch('http://localhost:3001/ValidPanier/',
      {
        method: 'get',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })
    let cleanAmount = Math.round(props.panierAmount * 100) / 100
    let txt = 'Merci, vous venez de dépenser ' + cleanAmount + ' euros.'
    alert(txt)
    props.setPanierNb(0)
    props.setPanierAmount(0)
  }

  useEffect(() => {
    fetch('http://localhost:3001/get_panier', {
      method: 'get',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json())
      .then(res => {
        props.setPanierNb(res[0].nb)
        props.setPanierAmount(res[0].amount)
      })
  }, [])

  return (
    <div className='panier centrer '>
      <h3>PANIER</h3>
      <div>nombre d'articles</div>
      <div>
        {props.panierNb}
      </div>
      <br />
      <div>total</div>
      <div>
        {Math.round(props.panierAmount * 100) / 100} euros
      </div>
      <button
        className='btn btn-secondary'
        onClick={validPanier}
      >
        Valider le panier
      </button>
    </div>
  )
}

export default Panier;

/*
  
*/