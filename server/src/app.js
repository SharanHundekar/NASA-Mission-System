const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

const planetsRouter = require('./routes/planets/planets.router')
const lauchesRouter = require('./routes/lauches/lauches.router')
const cors = require('cors');

app.use(cors({
    origin : 'http://localhost:3000'
}))
app.use(morgan('combined'));
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/planets',planetsRouter)
app.use('/launches',lauchesRouter)


app.get('/*', (req, res) => {
    res.sendFile(path.join, '..', 'public', 'index.html')
})




module.exports = app;