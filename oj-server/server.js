const express = require('express');
const path = require('path');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://Yi666:LIUYIliuyi61@ds235243.mlab.com:35243/1805');
//this line includes user and password


const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');

//app.get('/'.(req,res) => {
//	res.send('Hello world from express');
//
//});


app.use('/api/v1',restRouter);
app.use(express.static(path.join(_dirname, '../public')));

app.listen(3000, () => {
	console.log('App is listening to port 3000');
});