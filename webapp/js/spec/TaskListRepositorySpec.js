
describe("Save", () => {

    it("Save tasklist", (done) => {
        var taskList = new TaskList('My Tasks', '#tasks');
        taskList.createTask("Foo");
        taskList.createTask("Bar");
        taskList.tasks[1].setDone(true);
        TaskListRepository.saveTaskListById(taskList,() => {
            function callbackId(id) {

                TaskListRepository.findTasksById(id, () => {
                    function callback(data) {

                        var expectedTasksJson = [
                            {title: "Foo", done: false},
                            {title: "Bar", done: true},
                        ];

                        expect(data).toEqual(expectedTasksJson);
                        done();
                    }

                });
            }
            });
    });
});