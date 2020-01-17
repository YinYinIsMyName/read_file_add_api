const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const morgan = require("morgan");
const helmet = require("helmet")
const cors = require('cors')

const port = process.env.Port || 5004
const appRouter = require('./route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api/v1', appRouter)
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})