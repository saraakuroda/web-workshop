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
        var pagenum = queryObject["id"];
    }
}

var request4 = new XMLHttpRequest();

request4.open("GET", "http://127.0.0.1:8888/getid?num=" + pagenum, true);
request4.responseType = "json";

request4.onload = function () {
    console.log(this);
    var pageData = this.response;
    console.log(pageData); //pageDataに

    //{"id":19,"kami":"aa","naka":"bb","shimo":"cc","user":"L"}

    //上のようなデータが格納される
};

request4.send();
