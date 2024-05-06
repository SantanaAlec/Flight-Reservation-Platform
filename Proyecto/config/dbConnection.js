import mysql from 'mysql';
import { dbConfig } from './dbConfig.js';

// Clase para manejar la conexión a la base de datos
export class DBConnection {
    constructor() {
        this.connection = mysql.createConnection(dbConfig);
    }

    connect() {
        this.connection.connect((err) => {
            if (err) throw err;
            console.log('Connected to MySQL database!');
        });
    }

    disconnect() {
        this.connection.end((err) => {
            if (err) throw err;
            console.log('Disconnected from MySQL database!');
        });
    }
}
