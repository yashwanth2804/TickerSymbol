# Ticker Search Api

### A Ticker symbol search api end point to get the matched record symbols with their respective names 

#### Repository
https://github.com/yashwanth2804/TickerSymbol
  
### Ticker Symbol Api End Point
####  What is the project about?
 Recently I had a hackathon challenge to work on realtime stock markect data end points.After the hours of research from the various stock market end-point-apis , I had short listed a few.I thought that might be enough to complete my project.

1) [IEX]('https://iextrading.com/developer/docs/') , 
Pros: 
A real boon to stock market app developers because of the free unlimited api calls without any limitation. 
Cons: 
No realtime data , only with 15 min delay

2) [AlphaVantage]('https://www.alphavantage.co/documentation/'), 
Pros:
A site for pro developers with near realtime data/live stock data but comes with api key mess and limitation on requests/min made  

After a few days of walkthrough, I found my self on the fence because I have to make an auto complete search field like google search box for stock name/symbol searches.

the main catch here is [Symbol Search AutoComplete]('https://www.alphavantage.co/documentation/#symbolsearch') functionality already found in AlphaVantage, that too 5 API calls/min and 500 api calls/day.Imagine your end user typing keyword of length about 6 char in a minute then you will run out of APIs.

![alphavantageAPI.png](https://cdn.steemitimages.com/DQmbT3RLphBm3kSgGC5MF1iJ9jAZqVVUUtX3khgnJsS3eLu/alphavantageAPI.png) 

Then I had an idea of mixing the both worlds, no API key mess from IEX and high end functionality from AlphaVantage. At first I googled if any already existed but found none while yahoo fiance api was widely used for keyword search,sadly it's deprecated. I had no other choice to stick to AlphaVintage which costs around $30/month,30 api/min.

Thus I ended up making my own keyword filtering on ~8000 stock symbols  downloaded data.I thought it could be great if I host in cloud so that other devs can also use it.

## tickersearch API [Just, I named it so]
Github : https://github.com/yashwanth2804/TickerSymbol <br>
Demo : https://tickersearch.surge.sh/

![facebook.png](https://cdn.steemitimages.com/DQmTB3rTvr1zv4D2A1NgZpjbTbGunGT1dYCkfNF42X3uCXc/facebook.png)

#### In order to get the required search result , please provide `KEYWORD_SEARCH` in the following url

 `https://ticker-2e1ica8b9.now.sh//keyword/KEYWORD_SEARCH`
 eg : `https://ticker-2e1ica8b9.now.sh/keyword/googl`
 
#### output 

`[{"symbol":"GOOGL","name":"Alphabet Inc."}]`


Pros
- Free Free Free
- No API key mess , No email spamming
- Nothing more Nothing less

Cons
- Weired API end point url 

## Technology Stack
1) NodeJS
2) Hosted on ZEIT ,with 100GB bandwidth and 3 instances available

## Roadmap
- documentation support for react,and javascript
- When user makes a query they will get the live stock price in return with matched reults

### How to contribute?
    Fork it [https://github.com/yashwanth2804/TickerSymbol]

### Clone it

    [https://github.com/<your_github_name>/TickerSymbol.git or git@github.com:your_github_name/TickerSymbol.git]

git clone https://github.com/your_github_name/TickerSymbol.git
### Create a branch

    cd first-contributions

    git checkout -b

### Add features

    git add you_worked_files

    git commit -m "what your features"

### push it

    git push origin your_branch

### Submit a pull request
 Then from your account make a pull request 
### GitHub Account
https://github.com/yashwanth2804


