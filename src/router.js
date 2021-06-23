const express = require('express')
const router = new express.Router()



// const dictionaryMap = require('./dictionary')
const combinations = require('./combinations')

router.post('/generate-words', async (req, res) => {
    //console.log(englishWords)
    
    try {
        const numbers = await req.body.numbers
        let words = combinations(numbers)
         //const realWords = words.filter(word => englishWords.indexOf(word)>-1)

        res.send(words)

    } catch (e) {
        res.status(404).send()
    }
})

module.exports = router