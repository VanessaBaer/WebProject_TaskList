
beforeEach(() => {
    task = new Task("task");
    task.done = false;
});

describe("Define done", () => {

    it("Define done false, false == false", () => {
        expect(task.done).toBe(false);
    });

    it("Define done true, true == true", () => {
        task3 = new Task("task3");
        task3.done = true;
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


    describe("render", () => {
        it("renders an li element", () => {
            var $markup = task.render();
            expect($markup).toEqual('li');
        });
        it("renders an unchecked checkbox", () => {
            var $markup = task.render();
            expect($markup.find('input[name=done]')).not.toEqual("checked");
        });
        it("renders an empty input field", () => {
            var $markup = task.render();
            expect($markup.find('input[name=title]')).not.toHaveValue('')
        });
        it("checks the checkbox when done", () => {
            task.done = true;
            var $markup = task.render();
            expect($markup.find('input[name=done]')).toEqual("checked");
        });
        it("renders an the title", () => {
            var $markup = task.render();
            expect($markup.find('input[name=title]')).toEqual("task");
        });
    });

    describe("syncs the model with its markup", function() {
        var $markup;
        beforeEach(function() {
            $markup = task.render();
        });
        it('adds itself as data to the markup', function() {
            expect($markup.data('task')).toEqual(task);
        });
        it('syncs the title value', function() {
            // change value of title input and fire an change event
            $markup.find('input[name=title]').val('changed title').change();
            expect(task.title).toEqual('changed title');
        });
        it('syncs the done value', function() {
            // change value of done checkbox and fire an change event
            $markup.find('input[name=done]').prop("checked", "checked").change();
            expect(task.done).toEqual(true);
        });
    });


});