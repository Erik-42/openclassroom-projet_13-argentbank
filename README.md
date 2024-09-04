<div align="center">
<p>Projet OpenClassRoom</p>
</div>
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1>ArgentBank</h1>
  <a href="https://github.com/Erik-42">
    <img src="./frontend/src/assets/img/logo/argentBankLogo.png" alt="Logo ArgentBank" width="300" height="70">
  </a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li> <a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#testez-le-projet">Testez le projet</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![wakatime repo](https://wakatime.com/badge/github/Erik-42/openclassroom-projet_13-argentbank.svg)](https://wakatime.com/badge/github/Erik-42/openclassroom-projet_13-argentbank)
[![wakatime](https://wakatime.com/badge/user/f84d00d8-fee3-4ca3-803d-3daa3c7053a5/project/0b18637a-df2f-46f6-93e5-574433068892.svg)](https://wakatime.com/badge/user/f84d00d8-fee3-4ca3-803d-3daa3c7053a5/project/0b18637a-df2f-46f6-93e5-574433068892)

</div>
Utilisez une API pour un compte utilisateur bancaire avec React
<p></p>
Vous venez de commencer à travailler chez Remede Agency, une agence spécialisée dans le développement d'applications web.

L'équipe est principalement composée de développeurs back-end et vient de commencer à recruter d'autres spécialistes front-end.

<div align="center">
<a href="./designs/index.html">Lien vers la maquette.</a>
</div>

#### Le projet se décompose en deux phases :

    Phase 1 : Authentification des utilisateurs - Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.

    Phase 2 : Transactions - Il s’agirait de spécifier les endpoints d’API nécessaires pour une éventuelle deuxième mission une fois que nous aurons terminé la première.

<p></p>

### Phase 1:<br>

Utiliser Redux pour gérer le state de l'ensemble de l'application.<br>
Ce que doit faire l’application :

    -L'utilisateur peut visiter la page d'accueil
    -L'utilisateur peut se connecter au système
    -L'utilisateur peut se déconnecter du système
    -L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès
    -L'utilisateur peut modifier le profil et conserver les données dans la base de données.

### Phase 2 :<br>

Les transactions permisent aux utilisateurs :

    -de visualiser toutes leurs transactions pour le mois en cours, groupées par compte ;
    -de visualiser les détails d'une transaction dans une autre vue ;
    -d'ajouter, de modifier ou de supprimer des informations sur une transaction.

Fournissez un document décrivant les API proposées pour les transactions, en suivant les directives de Swagger.

Parmi les éléments clés à spécifier pour chaque endpoint de l’API il faudra :

    -La méthode HTTP (ex. : GET, POST etc.)
    -La route (ex. : /store/inventory)
    -La description de ce à quoi correspond l’endpoint (ex. : Retour de l'inventaire des animaux de compagnie)
    -Les paramètres possibles pour tenir compte des différents scénarios (ex. : itemId (facultatif) = ID de l'article spécifique à demander à la base de données d'inventaire).
    -Les différentes réponses avec les codes de réponse correspondants qui ont un sens pour cet endpoint (ex. : 404 : réponse d'erreur d'article inconnu).

Utilisez https://editor.swagger.io/ ou un équivalent<br>
Exporter votre fichier en YAML<br>

     (Fichier > Enregistrer sous YAML) en utilisant la syntaxe Swagger.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built with

<p> </p>
<a href=https://github.com/Erik-42?tab=repositories&q=&type=&language=html&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/html.svg'> </a>
<a href=https://github.com/Erik-42?tab=repositories&q=&type=&language=css&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/css.svg'> </a>
<a href= https://github.com/Erik-42?tab=repositories&q=&type=&language=sass&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/sass.svg'> </a>
<a href=https://github.com/Erik-42?tab=repositories&q=&type=&language=javascript&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/javascript.svg'> </a>
<a href=https://github.com/Erik-42?tab=repositories&q=&type=&language=reactjs&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/reactjs.svg'> </a>
<a href=https://github.com/Erik-42?tab=repositories&q=&type=&language=redux&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/redux.svg'> </a>
<a href= https://github.com/Erik-42?tab=repositories&q=&type=&language=github&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/github.svg'> </a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation:

<div>
<a href=https://nodejs.org>NodeJS</a> & <a href=https://github.com/coreybutler/nvm-windows>NVM</a>
</div>
<div>
<a href=https://www.mongodb.com/try/download/community-edition/releases>MongoDB Community</a> & <a href=https://npmjs.com>Npm</a>
</div>

### Backend Dependencies:

    "axios": "^1.3.1",
    "bcrypt": "^5.0.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.8.0",
    "mongoose": "^5.9.21",
    "swagger-ui-express": "^4.1.4",
    "yamljs": "^0.3.0"

### Frontend Dependencies:

    "@reduxjs/toolkit": "^2.2.7",
    "axios": "^1.7.7",
    "prop-types": "^15.8.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.26.0",
    "redux": "^5.0.1",
    "sass": "^1.77.8"

## Launching the project

Fork the repository<br>
Clone it on your computer.

### Backend

`npm install` command will allow you to install the dependencies.

### Frontend

`npm install` command wil allow you to install the depencies.

### Available Scripts

In the project backend directory , you can run:

`npm run dev:server`

And
In the project frontend directory , you can run:

`npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Testez le projet

Github: [https://erik-42.github.io/openclassroom-projet_13-argentbank/](https://erik-42.github.io/openclassroom-projet_13-argentbank/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

Formation OpenClassRoom Développeur d'application - JavaScript React

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

<div align="center">

[![GitHub followers][github followers-shield]][github followers-url]
[![Stargazers][stars-shield]][stars-url]
[![GitHub repo][github repo-shield]][github repo-url]
[![wakatime](https://wakatime.com/badge/user/f84d00d8-fee3-4ca3-803d-3daa3c7053a5.svg)](https://wakatime.com/@f84d00d8-fee3-4ca3-803d-3daa3c7053a5)

[![Github Badge][github badge-shield]][github badge-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<a href = 'https://basillecorp.dev'> <img width = '32px' align= 'center' src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/portfolio.png"/> basillecorp.dev</a>

mesen.erik@gmail.com

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: ./images/screenshot.png
[wakatime-shield]: https://wakatime.com/badge/user/f84d00d8-fee3-4ca3-803d-3daa3c7053a5.svg
[wakatime-url]: https://wakatime.com/@f84d00d8-fee3-4ca3-803d-3daa3c7053a5
[github badge-shield]: https://img.shields.io/badge/Github-Erik--42-155?style=for-the-badge&logo=github
[github badge-url]: https://github.com/Erik-42
[github repo-shield]: https://img.shields.io/badge/Repositories-42-blue
[github repo-url]: https://github.com/Erik-42/Erik-42?tab=repositories
[github repo file count (file type)-shield]: https://img.shields.io/github/directory-file-count/Erik-42/openclassroom-projet_13-argentbank
[github repo file count (file type)-url]: https://github.com/directory-file-count/Erik-42/openclassroom-projet_13-argentbank
[github followers-shield]: https://img.shields.io/github/followers/Erik-42
[github followers-url]: https://github.com/followers/Erik-42
[github all releases-shield]: https://github.com/Erik-42/openclassroom-projet_13-argentbank/total
[github all releases-url]: https://github.com/Erik-42/openclassroom-projet_13-argentbank/releases
[github repo size-shield]: https://img.shields.io/github/repo-size/Erik-42/openclassroom-projet_13-argentbank
[github repo size-url]: https://github.com/Erik-42/openclassroom-projet_13-argentbank
[contributors-shield]: https://img.shields.io/github/contributors/Erik-42/openclassroom-projet_13-argentbank
[contributors-url]: https://github.com/Erik-42/openclassroom-projet_13-argentbank/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Erik-42/openclassroom-projet_13-argentbank
[forks-url]: https://github.com/Erik-42/openclassroom-projet_13-argentbank/forks
[stars-shield]: https://img.shields.io/github/stars/Erik-42
[stars-url]: https://github.com/Erik-42?tab=stars
[issues-shield]: https://img.shields.io/github/issues-raw/Erik-42/openclassroom-projet_13-argentbank
[issues-url]: https://github.com/Erik-42/openclassroom-projet_13-argentbank/issues
[license-shield]: https://img.shields.io/github/license/Erik-42/openclassroom-projet_13-argentbank
[license-url]: https://github.com/Erik-42/openclassroom-projet_13-argentbank/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/erik-mesen/
[html-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[html-url]: https://html.spec.whatwg.org/
[css-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[css-url]: https://www.w3.org/TR/CSS/#css
[javascript-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[javascript-url]: https://www.ecma-international.org/publications-and-standards/standards/ecma-262/
