const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const pubDir = path.join(__dirname, 'public')
console.log(pubDir);
app.use(express.static(pubDir))
app.get('/', (req, res) => {
    res.send('<h1>Hello</>')
})
app.listen(port, (req, res) => {
    console.log(`Listening to ${port}`);
})