
describe("Save", () => {

    it("Save tasklist", (done) => {
        var taskList = new TaskList('My Tasks', '#tasks');
        taskList.createTask("Foo");
        taskList.createTask("Bar");
        taskList.tasks[1].setDone(true);

        TaskListRepository.saveTaskListById(taskList,(id) => {
                
               TaskListRepository.findTasksById(id, (tasks) => {

                        var expectedTasksJson = [
                            {title: "Foo", done: false},
                            {title: "Bar", done: true},
                        ];

                        expect(tasks).toEqual(expectedTasksJson);
                        done();

               });

            });
    });
});