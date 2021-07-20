/* Adoptapet bootstrap */
const express = require('express');
const cors = require('cors');

/* Global app object */
const app = express();

/* Middleware config */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function (req, res, next){
    const error = new Error("Not found");
    error.status = 404;
    next(404);
});

/* Bootstrap */
const server = app.listen(3000, function () {
    console.log('Listening on port 3000');
});
