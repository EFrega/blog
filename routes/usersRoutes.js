const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const { loadUsers, saveUsers } = require('../models/user');
const { loadPosts, savePosts } = require('../models/post');

// Ruta para manejar el inicio de sesión
router.post('/login', (req, res) => {
  const { username, password } = req.body; // Extraemos username y password del cuerpo de la solicitud
  const users = loadUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const posts = loadPosts();
      res.render('index', { posts: loadPosts(), currentUser: username });
  } else {
      res.render('login', { message: 'Usuario o contraseña incorrectos', messageType: 'error' });
  }

});


module.exports = router;
