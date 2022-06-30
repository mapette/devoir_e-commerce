const express = require('express')

const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// gestion des cookies
const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    cookie: { maxAge: 6000000 } // 100 minutes
    // cookie: { maxAge: 3000 } // 3 secondes
}))

// évite les pbmes de sécurité pour les envois front->back
const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))

const port = 3001
const db = require('./db_manager')

app.listen(port)


//  panier  //  
function initPanier(request) {
    request.session.amount = 0
    request.session.panier = []
}

app.get('/validPanier', (request, response) => {
    // maj stocks
    console.log(request.session.panier)
    db.validBasket(request.session.panier, (error, results) => { })
    initPanier(request)
    response.send({ 'ok': true })  //  sinon cookies pas maj
})

app.get('/cptPanier/:prix/:id', (request, response) => {
    console.log('avant - ut : ', request.session.ut, ' panier', request.session.panier, ' amount', request.session.amount)
    let productId = request.params.id
    let prix = parseFloat(request.params.prix)
    console.log('produit ', productId, ' prix ', prix)
    request.session.amount = prix + request.session.amount
    request.session.panier.push(productId)
    console.log('après - ut : ', request.session.ut, ' panier', request.session.panier, ' amount', request.session.amount)
    response.send({ 'ok': true })  //  sinon cookies pas maj
})

app.get('/get_panier', (request, response) => {
    console.log('get_panier av', request.session.ut)
    if (request.session.ut === undefined) {
        initPanier(request)
        request.session.ut = Math.floor(Math.random() * 1000)
    }
    console.log('get_panier ap', request.session)
    results = [{
        'nb': request.session.panier.length,
        'amount': request.session.amount,
    }]
    response.send(results)
})

//  produits  //  
app.get('/get_products', (request, response) => {
    console.log('get_products --- ', request.session)
    db.dbGetItems((error, results, fields) => {
        response.send(results)
    })
})

app.get('/get_details/:productId', (request, response) => {
    console.log('get_details : amount --- ', request.session.amount)
    console.log('get_details : ut --- ', request.session.ut)
    db.dbGetDetails(request.params.productId, (error, results, fields) => {
        response.send(results[0])
    })
})

app.post('/new_product', (request, response) => {
    console.log(request.body)
    db.new_product(request.body, (error, results) => {
        response.send(results)
    })
})

app.post('/maj_product', (request, response) => {
    console.log(request.body)
    db.UpdateProduct(request.body, (error, results) => {
        response.send(results)
    })
})

app.post('/del_product', (request, response) => {
    db.delProduct(request.body, (error, results) => {
        response.send(results)
    })
})
