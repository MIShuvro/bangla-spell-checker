const express = require('express')
var cors = require('cors')
const fs = require('fs')
const app = express()
const PORT = 3000
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json({
    type: ['application/json', 'text/plain']
}))
app.use(cors())
const spellcheckRoute = require('./routes/spellCheckRoutes')

app.use('/spellCheck', spellcheckRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port is ${PORT}`)
})

// const data = fs.readFileSync('test.txt')
// const dictionaryWords = data.toString()
// const dictionaryWordlist = dictionaryWords.split(' ', data.length)

// var array
// dictionaryWordlist.map(data => {

//     array = data.split(/\r\n|\n|\r/)
// })
// const check=["যে"
// ,"যেথা",
// "যেথাসেথা",
// "যেথাকার",
// "যেগুলো",
// "যেকোন",
// "যেহেতু",
// "যেতে",
// "যেতেই"]
// const json=JSON.stringify(array)
// const p=JSON.parse(json)
// console.log(p[0])
// console.log(check[0])