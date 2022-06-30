import './display.css'
import SubmitButton from './SubmitButton'

let data = {}

function goSubmit(eventData, fonctAFaire, nomFonctAFaire, products, setProducts) {
  eventData.preventDefault()
  // remplissage champs
  if (document.getElementById("name").value !== '') {
    data['name'] = document.getElementById("name").value
  }
  if (document.getElementById("description").value !== '') {
    data['description'] = document.getElementById("description").value
  }
  if (document.getElementById("origine").value !== '') {
    data['origine'] = document.getElementById("origine").value
  }
  if (document.getElementById("image").value !== '') {
    data['image'] = document.getElementById("image").value
  }
  if (document.getElementById("prix").value !== '') {
    data['prix'] = document.getElementById("prix").value
  }
  if (document.getElementById("qte").value !== '') {
    data['qte'] = document.getElementById("qte").value
  }
  fonctAFaire(data, products, setProducts)
}


function initChamps(champsDefaut, nomFonctAFaire) {
  data = {
    id: champsDefaut.id,
    name: champsDefaut.name,
    description: champsDefaut.description,
    origine: champsDefaut.origine,
    image: champsDefaut.image,
    prix: champsDefaut.prix,
    qte: champsDefaut.qte,
  }
}

function Formulaire(props) {
  initChamps(props.champsDefaut, props.nomFonctAFaire)

  return (
    <div className='centrer'>
      <div>
        {props.page === 'clt' &&
          <div>
            <p>
              description : {data.description}
            </p>
            <p>
              origine : {data.origine}
            </p>
            <p>
              pour seulement {Math.round(data.prix * 100) / 100} euros
            </p>
          </div>
        }
        {props.page === 'admin' &&
          <form
            id="formulaire"
            name="formulaire"
            type="POST"
            encType="application/x-www-form-urlencoded"
            onSubmit={event => { goSubmit(event, props.fonctAFaire, props.nomFonctAFaire, props.products, props.setProducts) }}
          >
            <SubmitButton
              page={props.page}
              nomFonctAFaire={props.nomFonctAFaire}
            />

            <div>
              <input className='margin-15 btn btn-success'
                type='reset'
                value='initialisation des champs' />
              <div className='details'>
                <div>
                  <label htmlFor='name'>nom produit</label>
                </div>
                <div>
                  <input id="name" name="name" placeholder={data.name} ></input>
                </div>
                <div>
                  <label htmlFor='description'>description</label>
                </div>
                <div>
                  <input id="description" name="description" placeholder={data.description} ></input>
                </div>
                <div>
                  <label htmlFor='origine'>origine</label>
                </div>
                <div>
                  <input id="origine" name="origine" placeholder={data.origine} ></input>
                </div>
                <div>
                  <label htmlFor='image'>url image</label>
                </div>
                <div>
                  <input id="image" name="image" placeholder={data.image} ></input>
                </div>
                <div>
                  <label htmlFor='prix'>prix unitaire</label>
                </div>
                <div>
                  <input id="prix" name="prix" placeholder={data.prix} ></input>
                </div>
                <div>
                  <label htmlFor='qte'>quantité en stock</label>
                </div>
                <div>
                  <input id="qte" placeholder={data.qte} name="qte"></input>
                </div>
              </div>
            </div>

          </form >
        }
      </div>
    </div >
  )
}

export default Formulaire;

/*

*/

