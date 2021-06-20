const express = require('express')
const router = new express.Router()

// const dictionaryMap = require('./dictionary')
const combinations = require('./combinations')

router.post('/generate-words', async (req, res) => {
    
    try {
        const numbers = await req.body.numbers
        let words = combinations(numbers.toString(), [])
        res.send(words)

    } catch (e) {
        res.status(404).send()
    }
})

module.exports = router