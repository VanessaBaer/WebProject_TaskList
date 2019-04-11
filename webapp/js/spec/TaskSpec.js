
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


    describe("render", function() {
        it("renders an li element", function() {
            var $markup = task.render();
            expect($markup).toEqual('li');
        });
        it("renders an unchecked checkbox", function() {
            var $markup = task.render();
            expect($markup.find('input[name=done]')).not.toBeChecked();
        });
        it("renders an empty input field", function() {
            var $markup = task.render();
            expect($markup.find('input[name=title]')).toHaveValue('')
        });
        it("checks the checkbox when done", function() {
            task.done = true;
            var $markup = task.render();
            expect($markup.find('input[name=done]')).toBeChecked();
        });
        it("renders an the title", function() {
            task.title = 'task title';
            var $markup = task.render();
            expect($markup.find('input[name=title]')).toHaveValue('task title');
        });
    });


});