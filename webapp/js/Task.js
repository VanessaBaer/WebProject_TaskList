function Task(title) {
    this.done = false;
    this.title = title || "";
}

Task.prototype.render = function() {
    var $done = $('<input>', {
        name: 'done',
        type: 'checkbox',
        checked: this.done
    });
    if (this.done) {
        $done.attr('checked', 'checked');
    }

    var $title = $('<input class="form-control">', {
        name: 'title',
        type: 'text'
    }).val(this.title);

    return $('<div class="input-group-text">').append([$done],[$title]);
};
