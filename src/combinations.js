const dictionaryMap = require('./dictionary')
const wordlist = require('wordlist-english')
let englishWords = wordlist['english']

let allCombinations = (numbers, words) => {
    words = []
   if (numbers.length===1) {
        return dictionaryMap.get(numbers[0])
    }
    let smallerWords = allCombinations(numbers.toString().slice(1), words)
    if (dictionaryMap.get(numbers[0])) {
        smallerWords.forEach(word => {
            dictionaryMap.get(numbers[0]).forEach(letter => {
                words.push(letter+word)
                
            })
        })
    }

    return words
}
let combinations =  (numbers) => {
    if (!numbers) {
        return []
    }
    letters = allCombinations(numbers.toString(), [])
    const realWords = letters.filter(word => englishWords.indexOf(word)>-1)
    return realWords
}

//console.log('resenje je '+combinations('23', []))
module.exports = combinations