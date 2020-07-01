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

var queryString = window.location.search;
var queryObject = new Object();
if (queryString) {
    queryString = queryString.substring(1);
    var parameters = queryString.split("&");

    for (var i = 0; i < parameters.length; i++) {
        var element = parameters[i].split("=");

        var paramName = decodeURIComponent(element[0]);
        var paramValue = decodeURIComponent(element[1]);

        queryObject[paramName] = paramValue;
        var pagenum = queryObject["page"];
    }
}

var request4 = new XMLHttpRequest();

request4.open("GET", "http://127.0.0.1:8888/list?page=" + pagenum, true);
request4.responseType = "json";

request4.onload = function () {
    console.log(this);
    var pageData = this.response;
    console.log(pageData); //pageDataに

    //{ "data": [{ "id": 27, "kami": "b", "naka": "c", "shimo": "d", "user": "a" }, { "id": 26, "kami": "\u3042\u3042\u3042\u3042\u4e0a", "naka": "\u3042\u3042\u3042\u3042\u3042\u3042\u4e2d", "shimo": "\u3042\u3042\u3042\u3042\u4e0b", "user": "tatsuru" }, { "id": 25, "kami": "aa", "naka": "bb", "shimo": "cc", "user": "v" }, { "id": 24, "kami": "aa", "naka": "bb", "shimo": "cc", "user": "k" }, { "id": 23, "kami": "aa", "naka": "bb", "shimo": "cc", "user": "J" }, { "id": 22, "kami": "aa", "naka": "bb", "shimo": "cc", "user": "w" }, { "id": 21, "kami": "aa", "naka": "bb", "shimo": "cc", "user": "g" }, { "id": 20, "kami": "aa", "naka": "bb", "shimo": "cc", "user": "S" }, { "id": 19, "kami": "aa", "naka": "bb", "shimo": "cc", "user": "L" }, { "id": 18, "kami": "aa", "naka": "bb", "shimo": "cc", "user": "S" }] }

    //上のようなデータが格納される
};

request4.send();
