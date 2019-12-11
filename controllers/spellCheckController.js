const fs = require('fs')

module.exports.spellCheck = async (req, res) => {
    // // Get Dictionary
    // const data = await fs.readFileSync('E:/10MS/banglaSpellChecker/controllers/BengaliWordList_main.txt')
    const data = await fs.readFileSync('E:/10MS/banglaSpellChecker/controllers/text.txt')
    const dictionaryWords = data.toString()
    const dictionaryWordlist = dictionaryWords.split(' ', data.length)
    var dictionary;
    dictionaryWordlist.map(data => {

        dictionary = data.split(/\r\n|\n|\r/)
    })

    console.log(dictionary[415000])
    const response = req.body.filter(element => dictionary.indexOf(element) == -1)
 
        var wrongWord = [];
        for(i=0; i < response.length; i++){
            if(wrongWord.indexOf(response[i]) === -1) {
                wrongWord.push(response[i]);
            }
        }
    res.status(200).json({
        wrongWord
    })
}