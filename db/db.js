const mysql2 = require("mysql2")
const util = require("util")

require('dotenv').config()

const mypool = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

const readText = TextValue => {
    query = util.promisify(mypool.query).bind(mypool)
    return query(`INSERT INTO text(text) VALUES (?)`, [TextValue])
}

module.exports = { readText }