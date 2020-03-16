var express = require('express');
var router = express.Router();
const axios = require('axios'); 

var db = require('../models');

router.get('/', function(req, res) {
    
    
      res.render('home')
});






router.get('/profile', function(req, res) {
    res.send('profile')
})


router.get('/addevent', function(req, res) {
    res.send('addevent')
})

router.post('/addevent', function(req, res) {
    res.send('made event')
})


router.get('/addfriend', function(req, res) {
    res.send('addfriend')
})

router.post('/addfriend', function(req, res) {
    res.send('added friend')
})


router.get('/chooser', function(req, res) {
    res.send('chooser page')
})

router.post('/chooser', function(req, res) {
    res.send('chose restauants')
})

module.exports = router;