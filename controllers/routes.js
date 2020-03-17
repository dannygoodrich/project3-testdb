var express = require('express');
var router = express.Router();
const axios = require('axios'); 

var db = require('../models');

router.get('/', function(req, res) {
    
    
      res.send('home')
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
    var yelpUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=Seattle';
    axios.get(yelpUrl, {headers: {
        "Authorization": "F56f-X0lt9ouFNSBQycnR1dsPqdMCg40TIxEJ3-Jv75qaBkZRORcbuQfiT5KGxq5TfE6LwibTVOGKQ1N0tXPDVUk-RVbfWoWhZj8pvWGYw-_Gfk3Tx-LaQ3i1k1rXnYx"
    }}).then( function(apiResponse) {
        var restaurant = apiResponse.data.results;
        
      
        console.log(apiResponse);
        res.send('results', { restaurant });
      }).catch(err => {
          console.log(err);
          res.send('error');
    res.send('chooser page')
})
})

router.post('/chooser', function(req, res) {
    db.User.findOne(req.user.id)
  .then(user => {
      user.restaurant.push({
        name: 'restaurant',
        rating: '4.5',
        style: 'american',
        address: '3 lower falls rd',
        price: '$',
        url: 'restaurant.com',
        phone: '2078788674'
      })
      user.save().then(() => {
        res.send({ restaurant: user.restaurant})
      })
  })

    res.send('chose restauants')
})

module.exports = router;