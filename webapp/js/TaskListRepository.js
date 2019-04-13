function TaskListRepository() {}

TaskListRepository.save = function(taskList) {
    var taskListDataString = JSON.stringify(taskList.createTasksJson());
    document.cookie = 'taskList=' + taskListDataString + '; expires=Thu, 01 Jan 2030 12:00:00 UTC';
};

TaskListRepository.findFirstTasksJson = function() {
    var value = "; " + document.cookie;
    var parts = value.split("; taskList=");
    var taskListDataString = (parts.length === 2 ? parts.pop().split(";").shift() : undefined);
    if(taskListDataString === undefined) {
        return undefined;
    }
    return JSON.parse(taskListDataString);
};
