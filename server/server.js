const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const calcRouter = require('./routes/calc.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/result', calcRouter);

app.use(express.static('build'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});



