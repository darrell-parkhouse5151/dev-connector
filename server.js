const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());

const mongodb = require('./config/keys').mongoURI;

mongoose.connect(mongodb).then(() => console.log('mongo db connected')).catch((err) => console.log(err));

const port = process.env.port || 5000;
app.listen(port, () => console.log(`server running on ${port}`));
