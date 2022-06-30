import './display.css'

function SubmitButton(props) {

  let data = { id: props.id }

  function ajoutPanier(event) {
    fetch('http://localhost:3001/cptPanier/' + props.prix + '/' + props.id,
      {
        method: 'get',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })
    props.setPanierAmount(parseFloat(props.panierAmount) + parseFloat(props.prix))
    props.setPanierNb(props.panierNb + 1)
  }
  
function deleteProduct() {
    const url = 'http://localhost:3001/del_product'
    const options = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
    fetch(url, options)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json()
        }
      }).then(res => {
      })
    //supp la clé de la props.products pour remettre l'affichage à jour
    for (let i = 0; i < props.products.length; i++) {
      if (props.products[i].id === props.id) {
        props.setProducts(props.products.filter(f => {return f !== props.products[i]}))
      }
    }
  }

  let txt = ''
  if (props.nomFonctAFaire === 'add') {
    txt = 'Valider nouveau produit'
    return (
      <input
      className='btn  btn-secondary'
        id="btSubmit"
        type='submit'
        value={txt}
      ></input>
    )
  }
  if (props.nomFonctAFaire === 'maj' && props.page === 'admin') {
    txt = 'Mise à jour produit'
    return (
      <input
      className='btn btn-primary'
        id="btSubmit"
        type='submit'
        value={txt}
      ></input>
    )
  }
  if (props.nomFonctAFaire === 'ajoutPanier' && props.page === 'clt') {
    txt = 'Ajout au panier'
    return (
      <input
      className='btn btn-success'
        id="btSubmit"
        type='submit'
        value={txt}
        onClick={event =>
          ajoutPanier(event)}
      ></input>
    )
  }
  if (props.nomFonctAFaire === 'del' && props.page === 'admin') {
    txt = 'Supprimer produit'
    return (
      <input
      className='btn btn-danger'
        id="btSubmit"
        type='submit'
        value={txt}
        onClick={deleteProduct}
      ></input>
    )
  }
}
export default SubmitButton;
