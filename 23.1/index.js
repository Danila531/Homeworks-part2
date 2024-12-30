const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/todos', todoRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/todoDB', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.listen(PORT);
