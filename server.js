const express = require('express')
const app = express()
// const PORT = 5000

app.listen(4000, () => {
    console.log('listening on 4000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//server can use style.css
app.use(express.static(__dirname));

