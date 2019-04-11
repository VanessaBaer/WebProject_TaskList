function TaskList(title) {
    this.tasks = [];
    this.id = null;
    this.title = title || "";
}

TaskList.prototype.createTask = function(title) {
    var task = new Task(title);
    this.tasks.push(task);
    return task;
};

TaskList.prototype.render = function() {
    var $markup = $('<ul>');
    var _i;
    for (_i = 0; _i < this.tasks.length; _i += 1) {
        $markup.append(this.tasks[_i].render());
    }
    return $markup;
};
