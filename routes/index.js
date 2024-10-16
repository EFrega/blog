const express = require('express');
const router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');

const { loadPosts, savePosts } = require('../models/post');

// Ruta para mostrar las publicaciones
router.get('/posts', (req, res) => {
  const posts = loadPosts(); // Cargar las publicaciones desde posts.json
  res.render('index', { posts: [] }); // Pasar las publicaciones a la vista
});


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
