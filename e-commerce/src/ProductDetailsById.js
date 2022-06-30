import Formulaire from './Formulaire'
import './display.css'
import { useEffect, useState } from "react"
import SubmitButton from './SubmitButton'

function ProductDetailsById(props) {
  let [details, setDetails] = useState([])

  function majProduct(data) {
    console.log(data)
    if (data['name'] !== ''
      && data['description'] !== ''
      && data['origine'] !== ''
      && data['id_cat'] !== ''
      && data['prix'] !== ''
      && data['qte'] !== '') {

      const options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
      const url = 'http://localhost:3001/maj_product/'
      fetch(url, options)
        .then(res => {
          if (res.status >= 200 && res.status < 300) {
            return res
          } else {
            throw new Error();
          }
        })
      // remise à jour de la productList
      for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].id === props.id) {
          console.log('ancien ', props.products[i])
          let productListToUpdate = [...props.products]
          productListToUpdate[i] = data
          props.setProducts(productListToUpdate) 
        }
      }
      props.setId(0)
    }
  }

  useEffect(() => {
    const options = {
      method: 'get',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    }
    const url = 'http://localhost:3001/get_details/' + props.id
    fetch(url, options)
      .then(res => res.json())
      .then(detailsFromBackEnd => setDetails(detailsFromBackEnd))
  }, [props.id])

  let champsDefaut = {
    id: details.id,
    name: details.name,
    description: details.description,
    origine: details.origine,
    image: details.image,
    prix: details.prix,
    qte: details.qte
  }

  return (
    <div className='centrer'>
      {props.page === 'admin' &&
        <button
          className='btn btn-secondary'
          onClick={() => props.setId(0)}
        >
          Formulaire Nouveau produit
        </button>
      }

      {props.page === 'clt' &&
        <SubmitButton
          page={props.page}
          nomFonctAFaire={'ajoutPanier'}
          id={details.id}
          prix={details.prix}
          products={props.products}
          setProducts={props.setProducts}
          panierNb={props.panierNb}
          setPanierNb={props.setPanierNb}
          panierAmount={props.panierAmount}
          setPanierAmount={props.setPanierAmount}
        />
      }

      <div className=''>
        <h1>
          {details.name}
        </h1>
        <img src={details.image} width="100" height="100"></img>
      </div>
      <br />
      {props.page === 'admin' &&
        <div>
          <SubmitButton
            page={props.page}
            nomFonctAFaire={'del'}
            id={details.id}
            products={props.products}
            setProducts={props.setProducts}
          />
          <br /><br />
        </div>
      }
      <Formulaire
        nomFonctAFaire={'maj'}    // string
        fonctAFaire={majProduct}  // fonction
        champsDefaut={champsDefaut}
        page={props.page}
      />
    </div >
  );
}

export default ProductDetailsById;



