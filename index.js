const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const PORT = 3000;
const baseURL = '/api/v1';

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json())

//Mongoose Config
mongoose.connect('mongodb://127.0.0.1:27017/Registration')

//Model Route
const UserModel = require('./model/UserModel')

//Route
const userRoutes = require('./router/UserRoute')
const storeRoutes = require('./router/StoreRoute')
const authRoutes = require('./middleware/auth')

app.use(`${baseURL}/userRegistration`, userRoutes);
app.use(`${baseURL}/store`, storeRoutes);

//Auth Route
// app.use(`${baseURL}/auth`, authRoutes);

app.listen( PORT , () =>{
    console.log(`App is running on port ${PORT}`)
})