var todoList = require('./app.js');
var app = require('express')();
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors({origin: 'http://localhost:8080', credentials: true}));

app.use(session({secret: 'mysecrettoken'}))

app.use(function (req, res, next) {
    todoList.initTodoList(req, next);
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/todolist', function (req, res) {
    todoList.getTodoList(req, res);
})

app.get('/todolist/:offset/:size', function (req, res) {
    todoList.getTodoListPagination(req, res);
})

app.get('/todo/:id', function (req, res) {
    todoList.getTodoById(req, res);
})

app.post('/todo/add', function (req, res) {
    todoList.addTodo(req, res)
})

app.delete('/todolist/delete/:id', function (req, res) {
    todoList.deleteTodo(req, res);
})

app.post('/todo/edit/:id', function (req, res) {
    todoList.editTodo(req, res);
})

app.listen(3000, function () {
    console.log('This app listening on port 3000!');
});