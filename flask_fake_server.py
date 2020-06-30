from flask import *
app = Flask(__name__)


@app.route("/list")  # ,methods=["GET", "POST"])
def new():
    return str({'data': [{'id': 15, 'user': 'n', 'kami': 'aa', 'naka': 'bb', 'shimo': 'cc'}, {'id': 14, 'user': 'g', 'kami': 'aa',
                                                                                              'naka': 'bb', 'shimo': 'cc'}, {'id': 13, 'user': 'g', 'kami': 'aa', 'naka': 'bb', 'shimo': 'cc'}, {'id': 12, 'user':
                                                                                                                                                                                                 'e', 'kami': 'aa', 'naka': 'bb', 'shimo': 'cc'}, {'id': 11, 'user': 'r', 'kami': 'aa', 'naka': 'bb', 'shimo': 'cc'},
                         {'id': 10, 'user': 'D', 'kami': 'aa', 'naka': 'bb', 'shimo': 'cc'}, {'id': 9, 'user': 'J', 'kami': 'aa', 'naka': 'bb',
                                                                                              'shimo': 'cc'}, {'id': 8, 'user': 'B', 'kami': 'aa', 'naka': 'bb', 'shimo': 'cc'}, {'id': 7, 'user': 'G', 'kami': 'aa',
                                                                                                                                                                                  'naka': 'bb', 'shimo': 'cc'}, {'id': 6, 'user': 'X', 'kami': 'aa', 'naka': 'bb', 'shimo': 'cc'}]})


if __name__ == "__main__":
    app.run(port=8888)
