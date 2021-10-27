const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//ADD GET LATER 
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "history" ORDER BY id DESC LIMIT 1;`

    pool.query(queryText)
        .then(result => {
            res.send(result.rows[0]);
        })
        .catch(error => {
            console.log('Error with getting most recent result');
            res.sendStatus(500);
        })
})

//POST
router.post('/', (req, res) => {
    let newResult = req.body;
    newResult.value1 = parseFloat(newResult.value1);
    newResult.value2 = parseFloat(newResult.value2);

    newResult.result = parseFloat(eval(newResult.value1 + newResult.operation + newResult.value2));




    console.log('New Result going to database history:', newResult);

    const queryText = `INSERT INTO "history" ("operation", "result", "value1", "value2")
    VALUES ($1, $2, $3, $4);`;

    pool.query(queryText, [newResult.operation, newResult.result, newResult.value1, newResult.value2])
        .then(result => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('Error with adding a new result to the calculator history', error)
            res.sendStatus(500);
        })
})

//DELETE
router.delete('/:id', (req, res) => {
    console.log('Deleting result with id: ' , req.params.id);
    const queryText = `DELETE FROM "history" WHERE history.id = $1`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error with deleting result: ', error);
            res.sendStatus(500);
        })
})


module.exports = router;