import psycopg2
from psycopg2.extras import RealDictCursor

def get_db_connection():
    conn = psycopg2.connect(
        host= "localhost",
        database= "agro4.0",
        user= "postgres",
        password= "1234567890"
    )
    return conn
