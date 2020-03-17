require('dotenv').config()
// let cors = require('cors')
let express = require('express')
// let expressJwt = require('express-jwt')
// let morgan = require('morgan')
// let rowdyLogger = require('rowdy-logger')

const app = express();
const db = require('./models');

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Welcome to the MIB: mate in Beige'});
});

// include my bounties controller
app.use('/hey', require('./controllers/routes.js'))

// app.get('*', (req, res) => {
//     res.status(404).send({ message: '404 not found'});
// });

app.listen(process.env.PORT || 3000, () => {
    console.log(`🍔your listening to the port ${process.env.PORT || 3000}`)
});