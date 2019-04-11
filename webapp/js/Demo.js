"use strict";

var taskList;

$(function() {

        taskList = new TaskList();
        taskList.createTask("Setup todo list");
        taskList.createTask("Buy milk");
        taskList.createTask("Read recipe");
        taskList.createTask("Invite guests");
        taskList.tasks[0].done = true;
        $('#tasks').html(taskList.render());


});