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

  print(len(groups))
  # tipo = responselist[0][0]
  # Data = responselist[0][1:9]
  # Valor = responselist[0][9:19]
  # CPF = responselist[0][19:30]
  # Cart = responselist[0][30:42]
  # Hora = responselist[0][42:48]
  # DonoDaLoja = responselist[0][48:62]
  # NomeLoja = responselist[2][62:81]

  return "olamundo"

@app.route("/api")
def setFile():
  return tipo





if __name__ == "__main__":
 app.run()