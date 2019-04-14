
beforeEach(() => {
    taskList = new TaskList("taskList");
    taskList.createTask("task")
});

describe("Initial object", () => {

    it("Sets TaskList title via constructor", () => {
        expect(taskList.title).toEqual("taskList");
    });

    it("Check if taskList not is equal to taskList2 ", () => {
        taskList2 = new Task("taskList2");
        expect(taskList2.title).not.toEqual(taskList.title);
    });
    it("adds a new element", function() {
        expect(taskList.tasks[0].title).toEqual("task");
    });


});