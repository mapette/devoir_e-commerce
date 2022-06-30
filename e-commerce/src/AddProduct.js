import Formulaire from './Formulaire'
import './display.css'

function ajouterProduct(data, products, setProducts) {
  if (data['name'] !== ''
    && data['description'] !== ''
    && data['origine'] !== '') {

    const url = 'http://localhost:3001/new_product'
    const options = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
    fetch(url, options)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json()
        } else {
          throw new Error();
        }
      }).then(res => {
        data['id'] = res.insertId
        setProducts(products.concat([data]))
      })
  }
}
let champsDefaut = {
  name: 'nom',
  description: 'description',
  origine: 'origine',
  image: 'image',
  prix: 'prix',
  qte: 'stock'
}

function AddProduct(props) {
  return (
    <div className='addProduct'>
      <Formulaire
        nomFonctAFaire={'add'}   //string
        fonctAFaire={ajouterProduct}      //fonction
        products={props.products}
        setProducts={props.setProducts}
        champsDefaut={champsDefaut}
        page={props.page}
      />
    </div>
  )
}

export default AddProduct;

/*


*/