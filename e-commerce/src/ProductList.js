import { useEffect, useState } from 'react'
import './display.css'
import ProductPreview from './ProductPreview'
import AddProduct from './AddProduct'
import ProductDetailsById from './ProductDetailsById'
import Panier from './Panier'

function ProductList(props) {
  let [products, setProducts] = useState([])
  let [id, setId] = useState(0)



  useEffect(() => {
    fetch('http://localhost:3001/get_products',
      { method: 'get', })
      .then(res => res.json())
      .then(productsFromBackEnd => setProducts(productsFromBackEnd))
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-gauche non-padding centrer  col-sm-4 col-xl-3 ">
          {props.page === 'clt' &&
            <Panier
              panierNb={props.panierNb}
              setPanierNb={props.setPanierNb}
              panierAmount={props.panierAmount}
              setPanierAmount={props.setPanierAmount}
            />
          }
          {(id !== 0) &&
            <div>
              <ProductDetailsById
                page={props.page}
                setId={setId}
                id={id}
                products={products}
                setProducts={setProducts}
                panierNb={props.panierNb}
                setPanierNb={props.setPanierNb}
                panierAmount={props.panierAmount}
                setPanierAmount={props.setPanierAmount}
              />
            </div>
          }
          {(props.page === 'admin' && id === 0) &&
            <AddProduct
              products={products}
              setProducts={setProducts}
              page={props.page}
            />
          }
        </div>
        <div className="non-padding  col-sm-8  col-xl-9">
          {products.map(elem =>
            <div className='productList en-ligne' key={elem.id}>
              <ProductPreview
                name={elem.name}
                id={elem.id}
                image={elem.image}
                setId={setId}
              />
            </div>
          )}
        </div>
      </div>
    </div >
  )
}


export default ProductList;
/*

*/