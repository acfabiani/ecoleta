<!--
*** Thank you for seeing our README. If you have any suggestions
*** that can improve it further give a fork in the repository and 
*** create a Pull Request or open an Issue with the tag "suggestion". 
*** Thanks again! :D
-->

# Next Level Week :rocket:
> Event presented by [Rocketseat](https://rocketseat.com.br/)

<p align="center">
  <a href="https://rocketseat.com.br">
    <img src=".github/logo.svg" alt="Logo"><br>
  </a>

  <h3 align="center">Next Level Week #01</h3>
</p>

## :seedling: Ecolite
A project focused on ecological purposes, Ecoleta connects companies and entities that collect organic and inorganic waste to people who need to dispose of it.

Projeto voltado para fins ecológicos, o Ecoleta serve como uma conexão entre empresas e entidades que coletam resíduos orgânicos e inorgânicos às pessoas que precisam descartar esses resíduos.

<p align="center">
  <a href="https://rocketseat.com.br">
    <img src=".github/EcoletaProject.png" alt="Logo"><br>
  </a>
</p>

> Project Layout [Figma](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/?viewer=1&node-id=)


## Project Tree
```bash
├── server 
├── web
└── mobile
```

## Technologies
- [Node](https://nodejs.org/en/) - As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [React Native](https://reactnative.dev/) - Build native mobile apps using JavaScript and React.
- [Expo](https://expo.io/) - With Expo tools, services, and React, you can build, deploy, and quickly iterate on native Android, iOS, and web apps from the same JavaScript codebase.
- [Express](http://expressjs.com/) - With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- [Knex](http://knexjs.org) - A SQL query builder that is flexible, portable, and fun to use.
- [SQLite](https://sqlite.org/) - SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.
- [Multer](https://github.com/expressjs/multer) - A node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
- [Celebrate](https://github.com/arb/celebrate) - An express middleware function that wraps the joi validation library. This allows you to use this middleware in any single route, or globally, and ensure that all of your inputs are correct before any handler function.
- [Router](https://reacttraining.com/react-router/) - A collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native.
- [React-Leaflet](https://react-leaflet.js.org/) - Provides an abstraction of [Leaflet](https://leafletjs.com/), an open-source JavaScript library
for mobile-friendly interactive maps, as React components.
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
- [Dropzone](https://www.dropzonejs.com/) - DropzoneJS is an open source library that provides drag’n’drop file uploads with image previews.

## Geting Started
1. Clone this project;
2. **Server**
```sh
$ cd server
$ npm install
$ npm knex:migrate
$ npm knes:seed
$ npm run dev
```
3. **Web**
```sh
$ cd web
$ npm install
$ npm start
```
4. **Mobile**
```sh
$ cd mobile
$ npm install
$ npm start
```
    4.1. Install the Expo app on your mobile phone;
    4.2. Scan the QRCode. 

## License

This project is under the MIT license. See the [LICENSE](https://github.com/acfabiani/ecoleta/blob/add-license-1/LICENSE) for details.    
