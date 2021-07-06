from flask import Flask, render_template, request, redirect, flash
import json
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
    insert_transactions(tipo,Data,Valor,CPF,Cart,Hora,DonoDaLoja,NomeLoja)

  return "olamundo"

@app.route("/gerdata")
@cross_origin()
def setFile():
  
  return query_trans()


def query_trans():
    try:
        conn = None
        config = {
          'user': 'root',
          'password': 'root',
          'unix_socket': '/Applications/MAMP/tmp/mysql/mysql.sock',
          'database': 'CNAB',
          'raise_on_warnings': True,
        }
        conn = mysql.connector.connect(**config)
        if conn.is_connected():
            print('Connected to MySQL database')
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM transactions")

        row = cursor.fetchall()

        return json.dumps(row)

    except Error as e:
        print(e)

    finally:
        cursor.close()
        conn.close()





def insert_transactions(tipo,data,valor,cpf,cart,hora,DonoDaLoja,NomeLoja):
    conn = None
    config = {
      'user': 'root',
      'password': 'root',
      'unix_socket': '/Applications/MAMP/tmp/mysql/mysql.sock',
      'database': 'CNAB',
      'raise_on_warnings': True,
    }
    conn = mysql.connector.connect(**config)
    if conn.is_connected():
            print('Connected to MySQL database')

    query = "INSERT INTO transactions(tipo,data,valor,cpf,cart,hora,DonoDaLoja,NomeLoja) " \
            "VALUES(%s,%s,%s,%s,%s,%s,%s,%s)"
    args = (tipo,data,valor,cpf,cart,hora,DonoDaLoja,NomeLoja)

    try:
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