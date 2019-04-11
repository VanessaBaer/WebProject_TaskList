"use strict";

var taskList;

$(function() {

        taskList = new TaskList();
        taskList.createTask("Setup todo list");
        taskList.createTask("Buy milk");
        taskList.createTask("Read recipe");
        taskList.createTask("Invite guests");
        taskList.tasks[0].done = true;

        $('#newTask').click(function(event) {
                event.preventDefault();
                var task = taskList.createTask('');
                $('#tasks ul').append(task.render());
        });

        $('#saveTasks').click(function(event) {
                taskList.save();
        });

        $('#tasks').append(taskList.render());

        $(':checkbox').on('change', function() {
                // all related code goes in here
                console.log('change event triggered');
        });


});