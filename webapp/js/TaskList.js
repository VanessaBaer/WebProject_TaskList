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