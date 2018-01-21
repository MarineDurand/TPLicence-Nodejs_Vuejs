/*Initialization todoList for each new session*/
var initTodoList = function (req, next) {
    if (!req.session.todoList) {
        req.session.todoList = [];
    }
    next();
}

/*Add todo in todolist*/
var addTodo = function (req, res) {
    if (req.body.todo != '') {
        req.session.todoList.push({name: req.body.todo, details: req.body.details});
        res.send(true);
    } else {
        res.send(false);
    }
};

/*Delete todo in todolist*/
var deleteTodo = function (req, res) {
    var id = req.params.id;
    if (id != '' && typeof req.session.todoList[id] != 'undefined') {
        req.session.todoList.splice(id, 1);
        res.send(true);
    } else {
        res.send(false);
    }
};

/*Get todo by id */
var getTodoById = function (req, res) {
    res.send({
        todo: req.session.todoList[req.params.id]
    })
}

/*Get todolist*/
var getTodoList = function (req, res) {
    res.send({
        todoList: req.session.todoList
    });
};

/*Get todolist with pagination*/
var getTodoListPagination = function (req, res) {
    var size = parseInt(req.params.size);
    var list = [];
    var offset = parseInt(req.params.offset);
    if (offset != 0) {
        offset--;
    }

    for (var i = 0; i <= size - 1; i++) {
        list.push(req.session.todoList[offset + i]);
    }

    res.send({
        todoList: list
    })
}
/*Edit todo*/
var editTodo = function (req, res) {
    var id = req.params.id;
    if (req.body.todo != '' && id != '' && typeof req.session.todoList[id] != 'undefined') {
        req.session.todoList[id].name = req.body.todo
        req.session.todoList[id].details = req.body.details

        res.send(true);
    }
    else {
        res.send(false);
    }
}

module.exports = {
    initTodoList: initTodoList,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    getTodoById: getTodoById,
    getTodoList: getTodoList,
    getTodoListPagination: getTodoListPagination,
    editTodo: editTodo
};