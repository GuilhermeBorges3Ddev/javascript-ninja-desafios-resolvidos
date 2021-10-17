'use strict';

var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

var users = {
  joao: {
    nome: "João",
    idade: 30
  },
  maria: {
    nome: "Maria",
    idade: 22
  },
  guilherme: {
    nome: "Guilherme",
    idade: 26
  }
};

app.get('/', function(req, res) {
  res.send('<h1>Home</h1>')
});

app.get('/user', function(req, res) {
  res.send('User')
});

app.get('/user/:username', function(req, res) {
  var username = req.params.username;
  if(users[username]) {
    return res.json(users[username]);
  }
  res.status(404).json({ error: 'Usuário não encontrado'});
});

app.listen(3000);
