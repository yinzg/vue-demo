
var loader = function (view) {
    $.get("test/" + view + ".html", function (data, status, xhr) {
        if (status === 200) {
            $("#container").html("<div>test loader</div>");
        }
    });
};
