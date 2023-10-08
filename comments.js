// Create web server: node server.js
// Access to the web server: http://localhost:3000/comments

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = require('../models/Comment.js');

/* GET /comments listing. */
router.get('/', function(req, res, next) {
  Comment.find(function (err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

/* POST /comments */
router.post('/', function(req, res, next) {
  Comment.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });});