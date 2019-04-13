"use strict";

var taskList;

jQuery(function() {
    taskList = new TaskList('My Tasks', '#tasks');
    taskList.createTask("Setup todo list");
    taskList.createTask("Buy milk");
    taskList.createTask("Read recipe");
    taskList.createTask("Invite guests");
    taskList.tasks[0].setDone(true);

    jQuery('#newTask').click(function() {
        taskList.createTask('');
    });

    jQuery('#saveTasks').click(function() {
        TaskListRepository.save(taskList);
    });

    jQuery('#loadTasks').click(function() {
        var tasks = TaskList.createTasksFromTasksJson(TaskListRepository.findFirstTasksJson());
        taskList.setTasks(tasks);
    });
});