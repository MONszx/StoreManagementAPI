const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const PORT = 3000;
const baseURL = '/api/v1';

const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json())


//Mongoose Config
mongoose.connect('mongodb://127.0.0.1:27017/Registration')

//Model Route
const UserModel = require('./model/UserModel')

//Route
const userRoutes = require('./router/UserRoute')
const storeRoutes = require('./router/StoreRoute')

app.use(`${baseURL}/userRegistration`, userRoutes);
app.use(`${baseURL}/store`, storeRoutes);


app.listen( PORT , () =>{
    console.log(`App is running on port ${PORT}`)
})