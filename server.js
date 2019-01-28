const express = require('express')
const Ticker = require('./data')

const port = process.env.PORT || 3000
const app = express()



app.get('/', (req, res) => {
    
    res.send('working')

    res.end()
})


app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:${port}`)
})