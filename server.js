const express = require('express')

const Ticker = require('./data')
const port = process.env.PORT || 3005
const app = express()
const fs = require('fs')



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

app.get('/add/:symbol/:name', (req, res) => {
    console.log("--------/symbol-----------"+req.params.symbol)
    console.log("--------/name-----------"+req.params.name)
    let symbol = req.params.symbol;
    let name = req.params.name;
    symbol = symbol.toLowerCase();
    res.setHeader('Content-Type', 'application/json');

    
    const newArray = Ticker.TickerSymbols;
    // CHECK IF SYMBOL ALREADY EXISTS:
    const isDuplicate = newArray.filter( f => 
        (f.symbol.toLowerCase() === symbol)
       ) 
    if (!isDuplicate.length){
        // ADD NEW OBJECT
        newArray.push({symbol:symbol.toUpperCase(), name:name})
        // SORT
        newArray.sort((a,b) => (a.symbol > b.symbol) ? 1 : ((b.symbol > a.symbol) ? -1 : 0))
        // WRITE TO FILE
        fs.writeFile('./data.js', `const TickerSymbols = ${JSON.stringify(newArray)} \n\nexports.TickerSymbols = TickerSymbols;`, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        res.send("added, please restart server")
    } else {
        console.log(isDuplicate)
        res.send("duplicate")
    }
    res.end()
})

app.get('/delete/:symbol', (req, res) => {
    console.log("--------/symbol-----------"+req.params.symbol)
    let symbol = req.params.symbol;
    symbol = symbol.toLowerCase();
    res.setHeader('Content-Type', 'application/json');

    const newArray  = Ticker.TickerSymbols.filter( f =>
        f.symbol.toLowerCase() !== symbol
        )
    // CHECK IF VALUE IS NOT FOUND
    if (Ticker.TickerSymbols.length === newArray.length){
        res.send("not found") 
    } else {
        fs.writeFile('./data.js', `const TickerSymbols = ${JSON.stringify(newArray)} \n\nexports.TickerSymbols = TickerSymbols;`, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        res.send("deleted, please restart server")
    }
    res.end()
})

// TODO: app.post route to add multiple symbols

app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:${port}`)
})