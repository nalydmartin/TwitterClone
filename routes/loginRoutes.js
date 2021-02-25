// This is the server.js file 
const express = require('express');

const app = express();

const Router = express.Router();

// npm i pug ---- Similar to .html files
app.set("view engine", "pug");
app.set("views", "views");



//Render the home page
Router.get('/', (req, res, next) => {

    res.status(200).render('login');
});


module.exports = Router;