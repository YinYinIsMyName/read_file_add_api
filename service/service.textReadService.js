const { db } = require('../db')

const ReadTextSerivce = TextValue => {
    return db.readText(TextValue)
}

module.exports = { ReadTextSerivce }