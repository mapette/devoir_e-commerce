import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import ProductList from './ProductList'
import Welcome from './Welcome';
import BandeauHaut from './BandeauHaut';
import TestUpdateUsestateTab from './TestUpdateUsestateTab'


function App() {
  let [page, setPage] = useState(0)   //en fait, profil
  let [panierNb, setPanierNb] = useState(0)
  let [panierAmount, setPanierAmount] = useState(0)

  if (page === 99) {    // 99 => pour les exercices à part
    return (
      <div>
        <TestUpdateUsestateTab/>
      </div>
    )
  } else {
    function bandeauHaut() {
      return (<BandeauHaut
        setPage={setPage}
        userName={'moi'}
        page={page}
      />)
    }

    if (page === 0) {
      return (<Welcome setPage={setPage} />)
    }
    
    if (page === 'admin' || page === 'clt') {
      return (
        <div>
          {bandeauHaut()}
          <ProductList
            page={page}
            setPage={setPage}
            panierNb={panierNb}
            setPanierNb={setPanierNb}
            panierAmount={panierAmount}
            setPanierAmount={setPanierAmount}
          />
        </div>)
    }
    return (
      <div>
        Y'A UN PROBLEME
      </div>
    );
  }
}

export default App;

/*
  if (page === 0) {
    return (<Welcome />)
  }

  let [currentPage, setCurrentPage] = useState('welcome')
  let [msg, setMsg] = useState('afficher contact')

  function displayContacts(event) {
    event.preventDefault()
    if (currentPage === 'welcome') {
      setCurrentPage('contacts')
      setMsg('masquer contact')
    }
    else {
      setCurrentPage('welcome')
      setMsg('afficher contact')
    }
  }
*/
/*
 <div className="App">
      {
        currentPage === 'welcome' &&
        <Welcome />
      }
      {
        currentPage === 'contacts' &&
        <FicheContacts {...props} />
      }
       <a href="contacts" onClick={displayContacts}>{msg}</a>
    </div>
    */
//  <Welcome {...props} />
//    <GuessNumberFonction />
//      <GuessNumberClass />
//      <Welcome msg={'hello !'} />

//<FicheContacts {...props} />
//      <AddProduct />

//<ProductList productions = {props.productions} />

/*
<ProductDetails {...props.details} />
  OU à la place de {...props.details}
name={props.details.name} 
                      desc={props.details.desc}  
                      prix={props.details.prix}
                      image={props.details.image}
                      qte={props.details.qte}
                      origine={props.details.origine}
                      cat={props.details.id_cat}
*/

/*
<form>
      

      <input type='submit'>Bouton</input>
      </form>
                */