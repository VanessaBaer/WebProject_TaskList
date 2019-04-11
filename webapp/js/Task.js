function Task(done, title) {
    this.done = false;
    this.title = title || "";
}

Task.prototype.render = function() {
    // TODO implement tasklist rendering
    return $('');
};