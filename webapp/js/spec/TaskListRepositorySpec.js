
describe("Save", () => {

    it("Save tasklist", () => {
        var taskList = new TaskList('My Tasks', '#tasks');
        taskList.createTask("Foo");
        taskList.createTask("Bar");
        taskList.tasks[1].setDone(true);
        TaskListRepository.save(taskList);
        var expectedTasksJson = [
            {title: "Foo", done: false},
            {title: "Bar", done: true},
        ];
        expect(TaskListRepository.findFirstTasksJson()).toEqual(expectedTasksJson);
    });
});