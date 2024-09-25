const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const routes = require('./routes/route');
const path = require('path');
const { getSong } = require('./controller/controllman');
const { getSongById } = require('./models/songMan');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));
app.use('/uploads', express.static('uploads'));

app.get('/song/:id', (req, res) => {
    const songId = req.params.id;
    const song = getSongById(songId);
    res.render('songDetails', { song });
});

app.listen(3000, () => {
    console.log('server running in http://localhost:3000');
});