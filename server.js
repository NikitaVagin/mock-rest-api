const express = require('express');
const bodyParser = require('body-parser');
const assert = require('assert');
const { request } = require('https');
const db = require('./db');
const artistsController = require('./controllers/artists');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));



app.delete('/artists/:id', artistsController.delete);

app.post('/artists', artistsController.postOne);

app.put('/artists/:id', artistsController.putOne);

app.get('/', (req, res) =>{
    res.send(`Hello! I'm API!`);
});

app.get('/artists', artistsController.all);

app.get('/artists/:id', artistsController.findById);




db.connect('mongodb://localhost:27017/myapi', function(err) {
    assert.equal(null, err);
    app.listen(3013, () => {
        console.log('Happy hacking!')
    })
})
