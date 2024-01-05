require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Atul Prem')
})
app.get('/twitter', (req, res) => {
    res.send('harshraj5567')
})
app.get('/login', (req, res) =>{
    res.send('<h1> Login at Atul_Prem site </h1>')
})
app.listen(process.env.port, () => {
    console.log('Example app listening on port ${port}')
})