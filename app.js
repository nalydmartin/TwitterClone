// This is the server.js file 
const express = require('express');

const app = express();

const port = 5000;

const middleware = require('./middleware');

const server = app.listen(port, () => {
    console.log('Server listening on port: ' + port)
});

// npm i pug ---- Similar to .html files
app.set("view engine", "pug");
app.set("views", "views");

// Routes
const loginRoute = require('./routes/loginRoutes');

app.use('/login', loginRoute);

//Render the home page
app.get('/', middleware.requireLogin, (req, res, next) => {

    let payload = {
        pageTitle:"Home"
    };

    res.status(200).render('home', payload);
})