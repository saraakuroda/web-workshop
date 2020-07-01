//////////////////////投稿表示/////////////////////////
function search() {
    var request3 = new XMLHttpRequest();

    request3.open(
        "GET",
        "http://127.0.0.1:8888/list?page=2" +
            document.getElementById("user").value +
            "&kami=" +
            document.getElementById("kami").value +
            "&naka=" +
            document.getElementById("naka").value +
            "&simo=" +
            document.getElementById("simo").value,
        true
    );

    request3.responseType = "json";

    request3.onload = function () {
        var data = this.response;
        document.getElementById("show").value = data;
    };

    request3.send();
}

///////////////////////検索//////////////////////////
function search() {
    var request2 = new XMLHttpRequest();

    request2.open(
        "GET",
        "http://127.0.0.1:8888/getid?num=19" +
            document.getElementById("num").value,
        true
    );

    request2.responseType = "json";

    request2.onload = function () {
        var data2 = this.response;
        document.getElementById("show2").value = data2;
    };

    request.send();
}

var request = new XMLHttpRequest();

request.open("GET", "http://127.0.0.1:8888/pagenum", true);
request.responseType = "json";

request.onload = function () {
    console.log(this);
    var data = this.response;
    console.log(data);

    for (var i = 0; i < data["numOfPages"]; i++) {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        var aTag = document.createElement("a");
        aTag.href = "list.html?page=" + (i + 1);
        aTag.appendChild(document.createTextNode(i + 1));
        li.appendChild(aTag);
        ul.appendChild(li);
    }
};

request.send();
