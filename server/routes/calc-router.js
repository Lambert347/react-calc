const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//ADD GET LATER 

//POST
router.post('/', (req, res) => {
    const newResult = req.body;
    console.log('New Result Coming in:', newResult);

    const queryText = `INSERT INTO "history" ("operation", "result", "value1", "value2")
    VALUES ($1, $2, $3, $4);`;

    pool.query(queryText [newResult.operation, newResult.result, newResult.value1, newResult.value2])
        .then(result => {
            res.sendStatus(201);
        }) .catch(error => {
            console.log('Error with adding a new result to the calculator history', error)
            res.sendStatus(500);
        })
})
