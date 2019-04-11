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


TaskList.prototype.render = function() {
    var $tasks = [];
    $.each(this.tasks, function (index, task) {
        $tasks.push(task.render());
    });

    return $('<ul>').append($tasks);
};
