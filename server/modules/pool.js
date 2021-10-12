const pg = require('pg');

let config = {
    host: 'localhost',
    port: 5432,
    database: 'calc-hist',
    max: 10,
};

const pool = new pg.Pool(config);

module.exports = pool;