;
var food_set_ops = {
    init: function () {
        this.eventBind();
        this.initEditor();
    },
    eventBind: function () {

    },
    initEditor: function () {
        var that = $(this);
        that.ue = UE.getEditor('editor');
    }
}

$(document).ready(function () {
    food_set_ops.init();
})