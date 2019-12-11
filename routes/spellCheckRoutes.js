const Router = require('express').Router()

const {
    spellCheck
} = require('../controllers/spellCheckController')

Router.post('/bangla', spellCheck)

module.exports = Router