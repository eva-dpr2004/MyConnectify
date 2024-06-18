# Connectify

Bienvenue dans **Connectify**, votre nouvelle application React pour la connexion et l'inscription avec Firebase.

## Description du Projet

Ce projet est une application web construite avec React qui permet aux utilisateurs de s'inscrire et de se connecter en utilisant Firebase Authentication. Il comprend des pages de connexion, d'inscription et d'accueil, ainsi que les configurations nécessaires pour intégrer Firebase.

## Fonctionnalités Principales

- **Gestion de l'authentification** : Inscription, connexion et gestion des comptes utilisateurs avec Firebase Authentication.
- **Lecture de musique** : Intégration d'un lecteur audio avec des fonctionnalités de lecture, pause et saut de piste.
- **Formulaires** : Formulaire avec validation regex.
- **Profils d'utilisateurs** : Personnalisation des profils utilisateurs, ajout d'informations personnelles, goûts musicaux et intérêts.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- Node.js (version 12 ou supérieure)
- npm (version 6 ou supérieure)

## Installation

Suivez les étapes ci-dessous pour configurer et exécuter le projet sur votre machine locale.

### Étape 1 : Cloner le Répertoire

bash
- git clone https://github.com/votre-utilisateur/connectify.git
- cd connectify

### Étape 2 : Créé et configuré le projet react
- npx create-react-app connectify
- cd connectify
- npm install react-router-dom firebase
- mettez en place votre configuration

### Étape 3 : Configurer Firebase

- Ajoutez votre configuration Firebase dans un fichier .env ou directement dans votre code source.
- Suivez les instructions de Firebase pour obtenir vos clés API et configurations nécessaires.

### Étape 4 : Démarrer le projet
- npm start

### Arborescence
- Pages

 - Page Accueil : Inclut une vidéo en background et le mot “bienvenue” dans toutes les langues.
 - Page Connexion / Inscription : Formulaire de connexion et d'inscription avec validation regex.
 - Page Contact : Formulaire de contact avec validation regex.
 - Page Profil : Comprend un mur de publication, galerie photo, galerie vidéo, galerie musique et des filtres de contenu.

### Menu (Version Mobile)

    - Attention particulière à la navigation et l'accessibilité sur mobile.

### Charte Graphique
- Fonts

 - Inter : Lien vers la police Inter
 - Chicle : Lien vers la police Chicle
 - Gravitas One : Lien vers la police Gravitas One

### Palette

 - Utilisez les couleurs définies dans la maquette de Connectify.