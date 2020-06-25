const express = require('express')

const app = express();

app.get('/', (req, res)=>{
    res.send('jenkins depoly!')
})

app.listen(3333, ()=>console.log('server online na porta 3333'))