const express = require('express')
const app = express()
const secrets = require('./secrets.json')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || 8080, () => {
    console.log('Listening...')
})
