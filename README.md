# e-commerce

## Utilisation de la librairie React Front et Back

## Fonctionalités développées 
* Création, mise à jour et suppression d'un article (profil admin)
* Consultation de tous les articles (profil admin et clt)
* Sélection et consultation d'un article en particulier (profil admin et clt)
* ajout au panier et validation du panier

* axe d'amélioration =>
  lors des mises à jour des produits, l'affichage (ProductList) n'est pas mis à jour immédiatement

## Installation

Projet en local développé en 

* HTML
* css 
* javascrip
* jsx
* jest

Librairies utilisées :

* express 
* react
* create-react-app
* mysql
* cors
* cookie-parser (api_serveur_cookie_parser)
* express-session (api_serveur_cookie_session)

## Lancement

front end
Depuis l'invite cmd : npm start

back end
Depuis l'invite cmd : 
* panier géré par cookies 'ordinaires' : node pi_serveur_cookie_parser.js
* panier géré par cookie de session : node pi_serveur_cookie_session.js

## Base de données MySql

### Personaliser le code

fichier `\e-commerce-backend\db_manager.js`  
lignes 9 et 10 : indiquer le user et le mot de passe MySql

### Requête de création de la table dans une database `magasin`
CREATE TABLE `item` (
  `id` INT NOT NULL,
  `name` VARCHAR(25) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `origine` VARCHAR(30) NOT NULL,
  `prix` FLOAT DEFAULT 0,
  `image` VARCHAR(500) DEFAULT 'image',
  `qte` INT DEFAULT 0,
  `ed_cat` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`));

## Tests unitaires


