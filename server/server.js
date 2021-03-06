require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/search/:city', (req, res) => {
    let cityName = req.params.city;
    console.log(req.params.city);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=imperial`)
            .then(response => res.send(response.data))
            .catch(err => console.log(err));
});

module.exports = app;

// https://api.openweathermap.org/data/2.5/weather?q=london&appid=72b32d07dd51ad40b420e51b9dcc0258&units=imperial