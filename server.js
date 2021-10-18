if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const express = require('express')
const app = express()
const port = 3000
var expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

//router variables
const indexRoute = require("./routes/index")


app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'))
app.set('layout', 'layouts/layout');


//router use path
app.use(indexRoute)

//mongodb stuff
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology : true
})
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log("connected"))

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})