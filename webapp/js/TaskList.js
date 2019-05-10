function TaskList(title, containerCssSelector, tasks, id) {
    this.tasks = (tasks === undefined ? [] : tasks);
    this.title = title;
    this.id = id;
    this.containerCssSelector = containerCssSelector;
    this.render();
}

TaskList.prototype.getId = function() {
    return this.id;
};

TaskList.prototype.size = function() {
    return this.tasks.length;
};

TaskList.prototype.createTask = function(title) {
    var task = new Task(title);
    this.tasks.push(task);
    jQuery(this.containerCssSelector).append(task.render());
};

TaskList.prototype.setTasksFromTasksJson = function(tasksJson) {
    this.tasks = TaskList.createTasksFromTasksJson(tasksJson);
    this.render();
};

TaskList.createTasksFromTasksJson = function(tasksJson) {
    return tasksJson.map(function(taskJson) {
        return Task.fromJson(taskJson);
    });
};

TaskList.prototype.createTasksJson = function() {
    return this.tasks.map(function(task) {
        return task.toJson();
    });
};

TaskList.prototype.render = function() {
    var tasks = [];
    for (var index in this.tasks) {
        tasks.push(this.tasks[index].render());
    }
    return jQuery(this.containerCssSelector).html(tasks).prepend('<h1>' + this.title + '</h1>');
};
