const mysql = require('mysql');

function connectToMySQL() {
    //établissment de la connection avec la base de donnée
    //envoie du mot de passe / identifiant nécessaire
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Pepette2021+',
        database: 'magasin'
    });
    connection.connect();
    return connection
}

function dbGetItems(fonction_traitement_resultat_bdd) {
    let connection = connectToMySQL()
    let query = `SELECT * FROM items ORDER BY id DESC`
    connection.query(query, fonction_traitement_resultat_bdd)
    connection.end();
}

function dbGetDetails(id, fonction_traitement_resultat_bdd) {
    let connection = connectToMySQL()
    let query = `SELECT * FROM items WHERE id = ${id}`
    connection.query(query, fonction_traitement_resultat_bdd)
    connection.end();
}

function new_product(val, fonction_traitement_resultat_bdd) {
    let connection = connectToMySQL()
    let valuesToInsert = [val['name'], val['origine'], val['description'], val['image'], val['prix'], val['qte']]
    let query = "INSERT INTO items (name, origine, description, image, prix, qte) VALUES (?, ?, ?, ?, ? ,?)"
    connection.query(query, valuesToInsert, fonction_traitement_resultat_bdd)
    connection.end();
}

function UpdateProduct(val, fonction_traitement_resultat_bdd) {
    let connection = connectToMySQL()

    let valuesToUpdate = [val['name'], val['description'], val['origine'], val['prix'], val['image'], val['qte'], val['id']]
    console.log(valuesToUpdate)
    let query = "UPDATE items SET name = ?, description = ?,  origine = ?, prix = ?, image = ?, qte = ? WHERE (id = ?)"
    connection.query(query, valuesToUpdate, fonction_traitement_resultat_bdd)
    connection.end();
}

function delProduct(val, fonction_traitement_resultat_bdd) {
    let connection = connectToMySQL()
    let idToDelete = [val['id']]
    let query = "DELETE FROM items WHERE id = ?"
    connection.query(query, idToDelete)
    connection.end();
}

function validBasket(val, fonction_traitement_resultat_bdd) {
    console.log('panier : ', val)
    let connection = connectToMySQL()
    for (let i = 0; i < val.length; i++) {
        let stockToDecrease = val[i]
        let query = "UPDATE items SET qte = ( qte - 1) WHERE id = ?"
        console.log(stockToDecrease)
        connection.query(query, stockToDecrease, fonction_traitement_resultat_bdd)
    }
    connection.end();
}

module.exports = {
    dbGetItems,
    dbGetDetails,
    new_product,
    UpdateProduct,
    delProduct,
    validBasket
}