'use strict';

var express = require('express');
var cors = require('cors');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

var users = [
  {
    username: "monica",
    name: "Mônica",
    age: 27
  },
  {
    username: "maria",
    name: "Maria",
    age: 22
  },
  {
    username: "guilherme",
    name: "Guilherme",
    age: 26
  }
];

app.get('/', function(req, res) {
  res.json({ response: 'Home' })
});

app.get('/user', function(req, res) {
  res.json({ response: 'User' })
});

app.get('/user/:username', function(req, res) {
  var username = req.params.username;
  var hasUser = users.some(function(user) {
      return user.username === username;
  });
  if(hasUser) {
    return res.json(users.filter(function(user){
      return user.username === username;
    })[0]);
  }
  res.status(404).json({ error: 'Usuário não encontrado'});
});

app.post('/user', function(req, res) {
  var username = req.body.username;
  var age = req.body.age;
  res.json({ username: username, age: age });
});

app.listen(3000);
