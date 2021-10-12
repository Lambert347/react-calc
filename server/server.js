const express = require('express');

const calcRouter = require('./routes/calc-router');

app.use('/api/calc', calcRouter);

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});



