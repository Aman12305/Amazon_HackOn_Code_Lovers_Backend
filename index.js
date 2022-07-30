const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.send('Hello World!')
  })

const {sender} = require('./controllers/sendSms');
app.post('/sendsms',sender);

const {uploadimage} = require('./controllers/uploadimage');
app.post('/upload',uploadimage);

const {claim} = require('./controllers/claimverfication');
app.post('/claim',claim);

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('Server started at port 5000');
})