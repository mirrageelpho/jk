const express = require('express')

const app = express();

app.get('/', (req, res)=>{
    res.send('jenkins depoly on staging')
})

app.listen(3333, ()=>console.log('server online na porta 3333'))