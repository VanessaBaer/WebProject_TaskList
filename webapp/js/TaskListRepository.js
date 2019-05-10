function TaskListRepository() {}

TaskListRepository.saveTaskListById = function(taskList, onSuccess) {
    jQuery.ajax({
        type: 'POST',
        url: 'http://zhaw.herokuapp.com/task_lists/' + (taskList.getId() ? taskList.getId() : ''),
        data: JSON.stringify({tasks: taskList.createTasksJson()}),
        success: function(responseData) {
            var taskListId = responseData.id;
            onSuccess(taskListId);
        },
        dataType: 'json'
    });
};

TaskListRepository.findTasksById = function(taskListId, onSuccess) {
    jQuery.get({
        url: 'http://zhaw.herokuapp.com/task_lists/' + taskListId,
        data: JSON.stringify({id: taskListId}),
        success: function (jsonResponse) {
            onSuccess(jsonResponse.tasks);
        },
        dataType: 'json'
    });
};



