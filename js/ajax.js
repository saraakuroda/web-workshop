///////////////////////投稿//////////////////////////
$(function () {
    $("#submit").on("click", function () {
        $.ajax({
            url:
                "http://127.0.0.1:8888/new?user=" +
                document.getElementById("user").value +
                "&kami=" +
                document.getElementById("kami").value +
                "&naka=" +
                document.getElementById("naka").value +
                "&simo=" +
                document.getElementById("simo").value,
            type: "GET",
            success: function (data, dataType) {
                alert("投稿できました");
            },
            error: function () {
                alert("投稿に失敗しました");
            },
        });
    });
});
