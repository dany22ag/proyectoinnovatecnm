import psycopg2
from psycopg2.extras import RealDictCursor

def get_db_connection():
    conn = psycopg2.connect(
        host="localhost",
        database="tu_base_de_datos",
        user="tu_usuario",
        password="tu_contraseña"
    )
    return conn
