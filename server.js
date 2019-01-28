const express = require('express')

const Ticker = require('./data')
const port = process.env.PORT || 3000
const app = express()



app.get('/', (req, res) => {
    
    res.send('working')

    res.end()
})


app.get('/keyword/:search', (req, res) => {
    console.log("--------/keyword-----------"+req.params.s)
    let search = req.params.search;
    search = search.toLowerCase();
    res.setHeader('Content-Type', 'application/json');
    const g  =Ticker.TickerSymbols.filter( f => 
        (JSON.stringify(f).toLowerCase().indexOf(search) !== -1)
       )

    res.send(g)
    res.end()
})

app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:${port}`)
})