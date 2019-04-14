function Task(title, done) {
    this.title = title;
    this.done = (done === true);

    var that = this;

    this.titleInput = jQuery('<input class="form-control">', {
        name: 'title',
        type: 'text',
    });
    this.titleInput.val(this.title);
    this.titleInput.on('change keyUp', function(event) {
    that.setTitle(event.target.value);
    });

    this.doneCheckbox = jQuery('<input>', {
        name: 'done',
        type: 'checkbox',
        checked: this.done
    });
    this.doneCheckbox.on('click', function(event) {
        that.setDone(event.target.checked);
    });
}

Task.fromJson = function(json) {
    return new Task(json.title, json.done);
};

Task.prototype.toJson = function() {
    return {
        title: this.title,
        done: this.done,
    };
};

Task.prototype.setDone = function(done) {
    this.done = done;
    this.doneCheckbox.prop('checked', done);
};

Task.prototype.setTitle = function(title) {
    this.title = title;
    this.titleInput.val(title);
};

Task.prototype.render = function() {
    return jQuery('<div class="input-group-text">').append([this.doneCheckbox],[this.titleInput]);
};
