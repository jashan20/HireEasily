// For environment Variables
require('dotenv').config()

//parsers
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");
const companydas = require('./routes/companydas');
const contactrouter = require('./routes/contact');
const loginrouter = require('./routes/login');
const studentdas = require('./routes/studentdas');
const app = express();


// Database Connection
mongoose.connect("mongodb://localhost:27017/CoodForGood", {
  useNewUrlParser: true
})
.then(() => {
  console.log("Database Connected")
});

// Middlewares
app.set("view engine" , 'ejs')
app.set('views', __dirname + '/views');
app.use(express.static(__dirname+'/public'))


app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes

// app.post('/',(req,res)=>{
//     res.send('index');
// })
// app.get('/',(req,res)=>{
//     console.log("Jashan")
// })

app.use('/',contactrouter);
app.use('/',loginrouter);
app.use('/',studentdas);
app.use('/',companydas);


//PORT 
const port = process.env.PORT || 8000
const hostname = '127.0.0.1';

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
