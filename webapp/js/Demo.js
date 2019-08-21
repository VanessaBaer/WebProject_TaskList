"use strict";


var mode = 'prod';

var taskList;

var findParamFromUrl = function(parameterName) {
    var result = null;
    var tmp = [];
    location.search.substr(1).split("&").forEach(function (item) {
        tmp = item.split('=');
        if (tmp[0] === parameterName) {
            result = decodeURIComponent(tmp[1]);
        }
    });
    return result;
};

var setUpDemoTasks = function(taskList) {
    taskList.createTask("Setup todo list");
    taskList.createTask("Buy milk");
    taskList.createTask("Read recipe");
    taskList.createTask("Invite guests");
    taskList.tasks[0].setDone(true);
};

var initializeTaskListButtons = function (taskList) {
    jQuery('#newTask').click(function() {
        taskList.createTask('');
    });
    var onSaveSuccess = function(taskListId) {
        window.open('?id=' + taskListId, '_self');
    };
    jQuery('#saveTasks').click(function() {
        var taskListId = findParamFromUrl('id');
        TaskListRepository.saveTaskListById(taskList, onSaveSuccess, taskListId);
    });
};

jQuery(function() {
    var taskListId = findParamFromUrl('id');
    var tasks = [];
    taskList = new TaskList('My Tasks', '#tasks', tasks, taskListId);
    initializeTaskListButtons(taskList);

    if(taskList.getId()) {
        TaskListRepository.findTasksById(taskList.getId(), function(tasksJson) {
            taskList.setTasksFromTasksJson(tasksJson);
        });
        return;
    }

    if(mode !== 'prod') {
        setUpDemoTasks(taskList);
    }
});