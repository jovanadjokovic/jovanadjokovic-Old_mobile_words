const express = require('express')
const router = new express.Router()

const wordlist = require('wordlist-english')
let englishWords = wordlist['english']

// const dictionaryMap = require('./dictionary')
const combinations = require('./combinations')

router.post('/generate-words', async (req, res) => {
    //console.log(englishWords)
    
    try {
        console.log('post called')
        console.log(req.body)
        const numbers = await req.body.numbers
        let words = combinations(numbers.toString(), [])
         const realWords = words.filter(word => englishWords.indexOf(word)>-1)

        res.send(realWords)

    } catch (e) {
        res.status(404).send()
    }
})

module.exports = router