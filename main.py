import psycopg2
from flask import Flask

app = Flask(__name__)
conn = psycopg2.connect(database="flask_db",user="postgres",password="ZUeotp8KYt",host="localhost",port="5432")

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run()