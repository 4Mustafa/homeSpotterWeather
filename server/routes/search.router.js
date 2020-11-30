const express = require('express');
const axios = require('axios');
require('dotenv').config();
const router = express.Router();

// router to ger the requested data using user city input
router.get('/:id', (req, res) => {
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=6ea0943cfa91489588303237202511&q=${req.params.id}&days=3`)

    .then((response) => {
      res.send(response.data);
    }).catch( err => {
      res.sendStatus(500);
    });
  })
  
module.exports = router;
