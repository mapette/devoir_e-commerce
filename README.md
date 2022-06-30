# e-commerce

## Utilisation de la librairie React Front et Back

## Fonctionalités développées 
* Création, mise à jour et suppression d'un article (profil admin)
* Consultation de tous les articles (profil admin et clt)
* Consultation d'un article (profil clt)
* ajout au panier et validation du panier (profil clt)

### 2 serveurs possibles 
* api_serveur_cookie_parser : paniers gérés par cookies 'classiques', en variable
* api_serveur_cookie_session : paniers gérés par cookies de session

## Installation

Projet en local développé en 

* HTML
* css 
* javascrip
* jsx

Librairies utilisées :

* express 
* react
* create-react-app
* mysql
* cors
* cookie-parser (api_serveur_cookie_parser)
* express-session (api_serveur_cookie_session)

## Lancement

front end - sur la racine  
invite cmd => npm start

back end - folder 'e-commerce-backend'  
invite cmd : 
* panier géré par cookies 'classiques' : node pi_serveur_cookie_parser.js
* panier géré par cookie de session : node pi_serveur_cookie_session.js

## Base de données MySql

### Personaliser le code

fichier `\e-commerce-backend\db_manager.js`  
lignes 9 et 10 : indiquer le user et le mot de passe MySql

### Requête de création de la table dans une database `magasin`
CREATE TABLE `item` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(25) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `origine` VARCHAR(30) NOT NULL,
  `prix` FLOAT DEFAULT 0,
  `image` VARCHAR(500) DEFAULT 'image',
  `qte` INT DEFAULT 0,
  PRIMARY KEY (`id`));

## Tests unitaires


