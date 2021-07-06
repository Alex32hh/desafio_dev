from flask import Flask, render_template, request, redirect, flash
import re
import pandas as pd
from flask_cors import CORS, cross_origin

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

  return "olamundo"

@app.route("/api")
def setFile():
  return tipo





if __name__ == "__main__":
 app.run()