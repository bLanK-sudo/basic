const express = require('express')
const app = express()
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
const path = require('path')
const pubDir = path.join(__dirname, 'public')
console.log(pubDir);
app.use(express.static(pubDir))
app.get('/', (req, res) => {
    res.send('<h1>Hello</>')
})
app.listen(port);