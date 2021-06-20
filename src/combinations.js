const dictionaryMap = require('./dictionary')

let combinations = (numbers, words) => {
    words = []
   if (numbers.length===1) {

 
        return dictionaryMap.get(numbers[0])
    }
    let smallerWords = combinations(numbers.slice(1), words)
    smallerWords.forEach(word => {
        dictionaryMap.get(numbers[0]).forEach(letter => {
            words.push(letter+word)
            
        })
    })
    return words
}

//console.log('resenje je '+combinations('23', []))
module.exports = combinations