const express = require('express');
// const bodyParser = require('body-parser')
// const cors = require('cors')

const PORT = 3000;
const baseURL = '/api/v1';

// app.use(cors()); // Enable CORS
// app.use(bodyParser.json())

const app = express();



app.get(`${baseURL}/main`, ( request , response ) => {
    response.send('Goodluck sa exam')
})

app.listen( PORT , () =>{
    console.log(`App is running on port ${PORT}`)
})