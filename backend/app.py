import psycopg2
from psycopg2.extras import RealDictCursor
from flask import Flask, jsonify, request
from db import get_db_connection
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True, resources={r"/*": {"origins": "*"}})


@app.route('/')
def home():
    return "¡Backend funcionando!" 

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
    try:
        new_item = request.json
        print("Datos recibidos:", new_item)

        nombre = new_item.get('nombre')
        apellido_paterno = new_item.get('apellido_paterno')
        apellido_materno = new_item.get('apellido_materno')
        edad = new_item.get('edad')
        usuario = new_item.get('usuario')
        contrasena = new_item.get('contrasena')

        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute(
            'INSERT INTO usuarios (nombre, apellido_paterno, apellido_materno, edad, usuario, contrasena) VALUES (%s, %s, %s, %s, %s, %s);',
            (nombre, apellido_paterno, apellido_materno, edad, usuario, contrasena)
        )
        conn.commit()
        cur.close()
        conn.close()
        return jsonify({'message': 'Usuario creado correctamente'}), 201

    except Exception as e:
        print("Error en POST /api/usuarios:", e)
        return jsonify({'error': 'Error interno del servidor'}), 500
