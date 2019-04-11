function TaskList(title) {
    this.tasks = [];
    this.id = null;
    this.title = title || "";
}

TaskList.prototype.size = function() {
    return this.tasks.length;
};

TaskList.prototype.createTask = function(title) {
    var _task = new Task(title);
    this.tasks.push(_task);
    return _task;
};

TaskList.prototype.save = function () {
};

TaskList.prototype.render = function() {
    var $tasks = [];
    for (var i = 0; i < this.tasks.length; i++) {
        $tasks.push(this.tasks[i].render());
    }

    return $('<ul>').append($tasks);
};
