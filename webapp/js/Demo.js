"use strict";

var taskList;

$(function() {

    taskList = new TaskList();
    taskList.createTask("Setup todo list");
    taskList.createTask("Buy milk");
    taskList.createTask("Read recipe");
    taskList.createTask("Invite guests");
    taskList.tasks[0].done = true;

    console.log('Application successfully initialized');

    if (window.location.hash.length > 16) {
        TaskList.load(window.location.hash.substring(1), function(tl) {
            taskList = tl;
            $('#tasks').html(taskList.render());
        });
    } else {
        taskList = new TaskList();
        taskList.createTask('');
        $('#tasks').html(taskList.render());
    }

});