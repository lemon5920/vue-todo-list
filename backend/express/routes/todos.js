var express = require('express');
var filter = require('obj-filter');
var router = express.Router();

var todoIndex = 0;
var todos = {};
var tpl = {
  id: "todo id",
  content: "todo content",
  status: false
};

router.get('/', function(req, res, next) {
  res.json(todos);
});

router.post('/', function(req, res, next) {
  let newTodo = filter.merge( tpl, {
    "id": ++todoIndex,
    "content": req.body.content
  });
  
  if (typeof todos[newTodo.id] === 'undefined') {
    todos[newTodo.id] = newTodo;
    return res.json(todos);
  } else {
    return res.json({err: 'id conflict'});
    throw new Error('id conflict');
  }
});

router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  
  delete todos[id];
  return res.json(todos);
});

router.patch('/:id', function(req, res, next) {
  var id = req.params.id;
  
  todos[id] = filter.merge(todos[id], req.body);
  return res.json(todos);
});

router.options('/:id', function(req, res, next) {
  var id = req.params.id;
  
  return res.json(todos[id]);
});

module.exports = router;
