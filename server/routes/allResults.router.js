const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "history";`

    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('Error with getting all results from servers', error);
            res.sendStatus(500);
        })
})

router.delete('/', (req, res) => {
    console.log('Clearing history...');
    const query = `DELETE FROM "history";`

    pool.query(query)
        .then(result => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('Error with clearing the calc history');
            res.sendStatus(500);
        })
})

module.exports = router;