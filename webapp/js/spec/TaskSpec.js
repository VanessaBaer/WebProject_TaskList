
beforeEach(() => {
    task = new Task(false,"task");
});

describe("Define done", () => {

    it("Define done false, false == false", () => {
        expect(task.done).toBe(false);
    });

    it("Define done true, true == true", () => {
        task3 = new Task(true, "task3");
        expect(true).toBe(true);
    });

    it("Define done false, true not false", () => {
        expect(task.done).not.toBe(true);
    });

});

describe("Initial object", () => {

    it("Sets title via constructor", () => {
        expect(task.title).toEqual("task");
    });

    it("Check if task not is equal to task2 ", () => {
        task2 = new Task(false, "task2");
        expect(task2.title).not.toEqual(task.title);
    });


});