const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect('mongodb+srv://adam:7cDEiKwwxRbyZVrR@cluster0-xy4n4.mongodb.net/test?retryWrites=true&w=majority')
  .then( () => {
    console.log('Connected to database!');
  })
  .catch( () => {
    console.log('Connection failed')
  });

app.use(bodyParser.json());

app.use( (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader(
    'Access-Control-Allow-Headers',
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  res.status(201).json({
    message: "Post added succesfully!"
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'fasd9713sad1',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: 'k99sjakdh987',
      title: 'Second server-side post',
      content: 'This is also coming from the server!'
    },
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
