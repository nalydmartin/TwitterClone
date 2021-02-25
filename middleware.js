const e = require("express");

exports.requireLogin = (req, res, next) => {
    // If user exists in session / is logged in --> send them to Home
    if (req.session && req.session.user) {
        return next();
    } else {
        // if User is not in session /logged in --> send them to login page
        return res.redirect('/login');
    }
}