if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const express = require('express')
const app = express()
const port = 3000
var expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")

//router variables
const indexRoute = require("./routes/index")
const studioRoute = require("./routes/studio")
const animeRoute = require("./routes/anime")


app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'))
app.set('layout', 'layouts/layout');
app.use(bodyParser.urlencoded({ limit : "10mb" , extended : false}))


//router use path
app.use("/",indexRoute)
app.use("/studio",studioRoute)
app.use("/anime",animeRoute)


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