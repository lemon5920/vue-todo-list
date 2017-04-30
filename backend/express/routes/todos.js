var express = require('express');
var router = express.Router();
var todoIndex = 0;
var todos = [];

router.get('/', function(req, res, next) {
  res.json(todos);
});

router.post('/', function(req, res, next) {
  let addTodo = {
    "id": todoIndex++,
    "content": req.body.content,
    "done": false
  }

  if(todos.push(addTodo)) {
    return res.json(todos);
  }
  return "error";
});

router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  var index = todos.findIndex(function(el) {
    return el.id == id;
  })
  if(todos.splice(index, 1)) {
    return res.json(todos);
  }
  return "error";
});

router.put('/done/:id', function(req, res, next) {
  var id = req.params.id;
  var index = todos.findIndex(function(el) {
    return el.id == id;
  })
  if(todos[index].done = !todos[index].done) {
    return res.json(todos);
  }
  return "error";
});

module.exports = router;
