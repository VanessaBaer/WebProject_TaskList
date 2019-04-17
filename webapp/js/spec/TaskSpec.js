
beforeEach(() => {
    task = new Task("task");
});

describe("Define done", () => {

    it("Define done false, false === false", () => {
        expect(task.done).toBe(false);
    });

    it("Define done true, true === true", () => {
        task2 = new Task("task2", true);
        expect(task2.done).toBe(true);
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
        task3 = new Task("task3");
        expect(task3.title).not.toEqual(task.title);
    });
});



describe ("setDone", function () {

    it("Sets done true, check if it is true", function () {
        task.setDone(true);
        expect(task.done).toEqual(true);
    });

    it("Sets done false, check if it is false", function () {
        task.setDone(false);
        expect(task.done).toEqual(false);
    });

    it("Sets done false, check if checkbox is unchecked", function () {
        task.setDone(true);
        expect(task.doneCheckbox.is(':checked')).toEqual(true);
    });

});

describe ("setTitle", function () {
    it("Sets title, check if title is equal", function () {
        task.setTitle("newTitle");
        expect(task.title).toEqual("newTitle");
    });

    it("Set title, check if it is not equal", function () {
        task.setTitle("newTitle2");
        expect(task.title).not.toEqual("title");
    });
});

describe ("render", function () {

    it("renders unchecked checkbox", function () {
        task.setDone(false);
        expect(task.doneCheckbox.is(':checked')).toEqual(false);
    });

    it("renders checked checkbox", function () {
        task.setDone(true);
        expect(task.doneCheckbox.is(':checked')).toEqual(true);
    });

});

