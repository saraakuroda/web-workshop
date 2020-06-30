//////////////////////投稿表示/////////////////////////
function search(){
  var request = new XMLHttpRequest();

    request.open('GET',
    "http://127.0.0.1:8888/list?page=2" +
    document.getElementById("user").value +
    "&kami=" +
    document.getElementById("kami").value +
    "&naka=" +
    document.getElementById("naka").value +
    "&simo=" +
    document.getElementById("simo").value, true);

    request.responseType = 'json';

    request.onload = function () {
      var data = this.response;
      document.getElementById("show").value = data;
    };

    request.send();
}

///////////////////////検索//////////////////////////
function search(){
  var request2 = new XMLHttpRequest();

    request2.open('GET', "http://127.0.0.1:8888/getid?num=19" +
    document.getElementById("num").value, true);

    request2.responseType = 'json';

    request2.onload = function () {
      var data2 = this.response;
      document.getElementById("show2").value = data2;
    };

    request.send();
}
