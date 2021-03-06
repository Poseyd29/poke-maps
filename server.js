const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(
    cors({
        origin: "*",
    })
)
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(4000, () => {
    console.log('listening on 4000')
})



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//server can use style.css
app.use(express.static(__dirname));

