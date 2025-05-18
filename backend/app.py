import psycopg2
from psycopg2.extras import RealDictCursor
from flask import Flask, jsonify, request
from flask_cors import CORS # type: ignore
from db import get_db_connection

app = Flask(__name__)
CORS(app) 

@app.route('/api/usuarios', methods=['GET'])
def get_items():
    conn = get_db_connection()
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute('SELECT * FROM usuarios;')
    items = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(items)

@app.route('/api/usuarios', methods=['POST'])
def add_item():
    new_item = request.json
    name = new_item.get('nombre')
    name = new_item.get('apellido_paterno')
    name = new_item.get('apellido_materno')
    name = new_item.get('edad')
    name = new_item.get('usuario')
    name = new_item.get('contrasena')
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('INSERT INTO usuarios (nombre, apellido_paterno, apellido_materno, edad, usuario, contrasena) VALUES (%s, %s, %s, %s, %s, %s) RETURNING *;', (name,))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({'message': 'Item added'}), 201

if __name__ == '__main__':
    app.run(debug=True)