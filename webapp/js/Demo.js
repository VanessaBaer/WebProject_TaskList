"use strict";

var taskList;

$(function() {

        taskList = new TaskList();
        taskList.createTask("Setup todo list");
        taskList.createTask("Buy milk");
        taskList.createTask("Read recipe");
        taskList.createTask("Invite guests");
        $('#tasks').html(taskList.render());

});