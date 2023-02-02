
const express = require('express');
const openai = require('../middlewares/openai');
const { 
	initMiddleware,
	creditCheck,
	contentFilterCheck,
	sendResponse,
	creditPayment,
	saveToHistory,
}  = require('./middleware');

let app = express.Router()

app.use('/', initMiddleware, creditCheck); 

app.use('/', require('./correction'));
app.use('/', require('./reformulation'));
app.use('/', require('./writing/article_title'));
app.use('/', require('./writing/intro'));
app.use('/', require('./writing/outline'));
app.use('/', require('./writing/paragraph'));

app.use('/', contentFilterCheck); 
app.use('/', creditPayment); 
app.use('/', saveToHistory); 

app.use('/', sendResponse); 

module.exports = app