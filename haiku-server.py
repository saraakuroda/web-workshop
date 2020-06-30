from flask import *
from flask import request
import pymysql
import math
pymysql.install_as_MySQLdb()

app = Flask(__name__)

conn = pymysql.connect(host="localhost", user="root",
                       passwd="Password", db="haiku")
cursor = conn.cursor()


@app.route("/new")  # ,methods=["GET", "POST"])
def new():

    r = cursor.execute(
        "INSERT INTO haikus (user,kami,naka,shimo)VALUES(  '"+request.args.get('user')+"','"+request.args.get('kami')+"','"+request.args.get('naka')+"','"+request.args.get('simo')+"');")
    conn.commit()
    conn.close
    return str(r)

# http://127.0.0.1:8888/new?user=tatsuru&kami=ああああ上&naka=ああああああ中&simo=ああああ下


@app.route("/getid")  # ,methods=["GET", "POST"])
def getid():
    cursor.execute(
        'SELECT * FROM haikus where id=' + request.args.get('num') + ';')
    result = cursor.fetchall()
    return str({cursor.description[i][0]: result[0][i]
                for i in range(0, len(result[0]))})

# http://127.0.0.1:8888/getid?num=19


@app.route("/list")  # ,methods=["GET", "POST"])
def getList():
    cursor.execute('SELECT COUNT( id ) FROM haikus;')
    result1 = cursor.fetchall()
    fornum = int(result1[0][0])
    pagenum = int(request.args.get('page'))
    """ if pagenum * 10 >= fornum:
        return "error" """
    dist = {"data": []}
    forren = range(fornum - 9 - 10 * (pagenum - 1),
                   fornum + 1 - 10 * (pagenum - 1))
    if (fornum - pagenum * 10) <= -1 and (fornum - pagenum * 10) >= -9:
        forren = range(1, fornum % 10+1)
    for i in forren:
        cursor.execute(
            'SELECT * FROM haikus where id=' + str(i) + ';')
        result2 = cursor.fetchall()
        dist["data"].append(result2)

    return str(dist)


# http://127.0.0.1:8888/list?page=3

@app.route("/pagenum")  # ,methods=["GET", "POST"])
def getPageNum():
    cursor.execute('SELECT COUNT( id ) FROM haikus;')
    result1 = cursor.fetchall()
    fornum = int(result1[0][0])
    numofpage = int(math.ceil(fornum/10))
    return str({"numOfPages": numofpage})
# http://127.0.0.1:8888/pagenum


""" 


conn = pymysql.connect(host="localhost", user="root",
                       passwd="Password", db="user")
cursor = conn.cursor()
# 'select Name, Continent, Population, LifeExpectancy, GNP from Country');
cursor.execute(
    'SELECT * FROM members;')
result = cursor.fetchall()


print(result[0])
print({cursor.description[0][i]: result[0][i]
       for i in range(0, len(result[0]))})


@app.route("/")
def index():
    return jsonify({cursor.description[i][0]: result[0][i]
                    for i in range(0, len(result[0]))})

 """
if __name__ == "__main__":
    app.run(port=8888)
