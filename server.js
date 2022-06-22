const express = require('express')

const Ticker = require('./data')
const port = process.env.PORT || 3005
const app = express()



app.get('/', (req, res) => {
    
    res.send('working')

    res.end()
})


app.get('/keyword/:search/limit/:max', (req, res) => {
    console.log("--------/keyword-with-Limit-applied-----------"+req.params.search+"---limit:"+req.params.max)
    let search = req.params.search;
    let maxResults = Number.parseInt(req.params.max)
    console.log(maxResults)
    if(!isNaN(maxResults)){
        search = search.toLowerCase();
        res.setHeader('Content-Type', 'application/json');
        const g  =Ticker.TickerSymbols.filter( f => 
            (JSON.stringify(f).toLowerCase().indexOf(search) !== -1)
        )

        if(maxResults > g.length || maxResults == '0'){  
            maxResults = g.length
        }

        let count = 0;
        limited = []
        while (count < maxResults && count < g.length){
            limited.push(g[count])
            count++
        }
        res.status(200).json({results:limited});
    }else{
        console.log("Limit must be a number")
        res.status(400).json({message:"Limit must be a number"});
    }
    res.end()
})

app.get('/keyword/:search', (req, res) => {
    console.log("--------/keyword-----------"+req.params.search)
    let search = req.params.search;
    search = search.toLowerCase();
    res.setHeader('Content-Type', 'application/json');
    const g  =Ticker.TickerSymbols.filter( f => 
        (JSON.stringify(f).toLowerCase().indexOf(search) !== -1)
       )

    res.status(200).json({results:g});
    res.end()
})

app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:${port}`)
})