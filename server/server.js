const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv=require('dotenv')

dotenv.config()

//routes import
const authRoute = require('./routes/auth')
const testRoute = require('./routes/test')
const AdminClientRoute = require('./routes/adminclientreq')

//app use
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//CORS

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT") // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


//mongodb connection'
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to database'))
    .catch((error) => console.log(error))



//app routes
app.get('/', (req, res) => {
    res.send('HELLOOOOOO AUTO ECOLE')
})

app.use('/api/user', authRoute)
app.use('/api/test',testRoute)
app.use('/api/admin',AdminClientRoute)


port = process.env.PORT || 3001
app.listen(port, () => console.log(`listening on port ${port}`))