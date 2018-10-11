const express = require('express')
const app = express()
// const spicedPg = require('spiced-pg')
// const dbUrl = process.env.DATABASE_URL || 'postgres:postgres....'
// const db = spicedPg(dbUrl)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || 8080, () => {
    console.log('Listening...')
})
