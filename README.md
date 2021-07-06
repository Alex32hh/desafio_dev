# Descrição do projeto
Toda a documentação, código e notas podem ser encontrados aqui, bem como links para outros recursos que achei úteis para concluir o programa com êxito.

O projecto foi contruido usando:
1. Python(Flask)
2. Vanila js
3. JQuery
4. tailwindcss,
5. MySQL.

**Setup**
Antes de mais nada inporte o banco de dados(MYSQL) que atende pelo nome "CNAB"  e cria a seguinte tabela:
```
CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `tipo` int(11) NOT NULL,
  `data` varchar(200) NOT NULL,
  `valor` int(100) NOT NULL,
  `cpf` varchar(100) NOT NULL,
  `cart` varchar(100) NOT NULL,
  `hora` varchar(200) NOT NULL,
  `DonoDaLoja` varchar(200) NOT NULL,
  `NomeLoja` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
Instale e importe o mysqlconnector

```
$ mysql.connector
```

Com o python instalado de preferência a versão 3.8 ou superior, dependendo da versão digita o código abaixo:
```
$ pip install -U Flask
```
ou
```
$ pip3 install Flask
```
Instale tambem o Flask-Cors para lidar com o compartilhamento de recursos de origem cruzada (CORS), tornando possível o AJAX de origem cruzada.
Este pacote tem uma filosofia simples: quando você deseja habilitar o CORS, deseja habilitá-lo para todos os casos de uso em um domínio. Isso significa que não há confusão com diferentes cabeçalhos permitidos, métodos, etc.

```
 pip install -U flask-cors
```
Após isso inporte o pacote **tailwindcss**, mais detalhes no link (https://github.com/tailwindlabs/tailwindcss) e por fim importe:
1. JQuery
2. Dropify

# Api end Point
Para a submissão/envio do arquivo/dados use o seguinte end-Point **GET**  e **POST**
```
@app.route("/sendata/<contents>",methods = ['GET', 'POST'])
@cross_origin()
```
Para listar todos os dados enviados anteriormente use o seguente end point, que retornará um **json**
```
@app.route("/gerdata")
@cross_origin()
```

