const express = require('express');

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