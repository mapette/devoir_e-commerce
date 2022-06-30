const express = require('express')

const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// gestion des cookies
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// évite les pbmes de sécurité pour les envoies front->back
const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))

const port = 3001
const db = require('./db_manager')

app.listen(port)

let paniers = {}

app.get('/validPanier', (request, response) => {
    // maj stocks
    let userId = request.cookies.userId
    console.log(paniers[userId])
    let panier = paniers[userId]['panier']
    db.validBasket(panier, (error, results) => {
        console.log('fait')
    })
    // réinit du panier
    paniers[userId]['panier'] = []
    paniers[userId]['amount'] = 0
})

app.get('/cptPanier/:prix/:id', (request, response) => {
    let userId = request.cookies.userId
    let productId = request.params.id
    let prix = request.params.prix
    paniers[userId].panier.push(productId)
    paniers[userId].amount = parseFloat(paniers[userId].amount) + parseFloat(prix)
    console.log(paniers)
    console.log(paniers[userId].panier.length, ' articles')
})

app.get('/get_panier', (request, response) => {
    if (typeof request.cookies.userId === 'undefined') {
        userId = Math.floor(Math.random() * 1000)
        response.cookie('userId', userId, { maxAge: 20000000000, htppOnly: true })
        paniers[userId] = {
            'panier': [],
            'amount': 0.0,     //calculable mais plus pratique ici
        }
    }
    console.log(paniers)
    results = [{
        'nb': paniers[userId].panier.length,
        'amount': paniers[userId].amount,
    }]
    console.log('results : ', results)
    response.send(results)
})

app.get('/get_products', (request, response) => {
    db.dbGetItems((error, results, fields) => {
        response.send(results)
    })
})

app.get('/get_details/:productId', (request, response) => {
    db.dbGetDetails(request.params.productId, (error, results, fields) => {
        response.send(results[0])
    })
})

app.post('/new_product', (request, response) => {
    db.new_product(request.body, (error, results) => {
        response.send(results)
    })
})

app.post('/maj_product', (request, response) => {
    db.dbUpdateProduct(request.body, (error, results) => {
        response.send(results)
    })
})

app.post('/del_product', (request, response) => {
    db.delProduct(request.body, (error, results) => {
        response.send(results)
    })
})

/* test cookies
app.get('/get_products', (request, response) => {
    db.dbGetItems((error, results, fields) => {
        response.send(results)
    })
    response.cookie(
        'cookie_sophie',
        'mon cookie',
        { maxAge: 10000, htppOnly: true }
    )
    response.cookie(
        'autre_cookie',
        'mon autre cookie',
        { maxAge: 10000, htppOnly: true }
    )
})

app.get('/cookie', (request, response) => {
    console.log(request.cookies['cookie_sophie'])
    console.log(request.cookies.autre_cookie)
    response.send(`
    test cookies
    </br>
    ${request.cookies.cookie_sophie}
    </br>
    ${request.cookies.autre_cookie}
    `)
})

*/