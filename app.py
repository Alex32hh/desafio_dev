from flask import Flask, render_template, request, redirect, flash
import re
import pandas as pd
from flask_cors import CORS, cross_origin
import mysql.connector
from mysql.connector import Error

app = Flask(__name__, template_folder='templates_folder')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/<contents>",methods = ['GET', 'POST', 'DELETE'])
@cross_origin()
def gelist(contents):
  connect()
  groups = [(contents[i:i+80]) for i in range(0, len(contents), 80)]

  print(groups)

  for item in groups:
    tipo = item[0]
    Data = item[1:9]
    Valor = float(item[9:19]) /100.00
    CPF = item[19:30]
    Cart = item[30:42]
    Hora = item[42:48]
    DonoDaLoja = item[48:62]
    NomeLoja = item[62:81]

  return "olamundo"

@app.route("/gerdata")
def setFile():
  return tipo


def connect():
    """ Connect to MySQL database """
    conn = None
    config = {
  'user': 'root',
  'password': 'root',
  'unix_socket': '/Applications/MAMP/tmp/mysql/mysql.sock',
  'database': 'CNAB',
  'raise_on_warnings': True,
}
    try:
        conn = mysql.connector.connect(**config)
        if conn.is_connected():
            print('Connected to MySQL database')

    except Error as e:
        print(e)

    finally:
        if conn is not None and conn.is_connected():
            conn.close()

def insert_transactions(title, isbn):
    query = "INSERT INTO books(title,isbn) " \
            "VALUES(%s,%s)"
    args = (title, isbn)

    try:
        db_config = read_db_config()
        conn = MySQLConnection(**db_config)

        cursor = conn.cursor()
        cursor.execute(query, args)

        if cursor.lastrowid:
            print('last insert id', cursor.lastrowid)
        else:
            print('last insert id not found')

        conn.commit()
    except Error as error:
        print(error)

    finally:
        cursor.close()
        conn.close()



if __name__ == "__main__":
 app.run()
 connect()