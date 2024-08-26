const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a la base de datos SQLite
const db = new sqlite3.Database('./mi_base_de_datos.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado a la base de datos SQLite.');
});

// Crear la tabla de usuarios si no existe
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    edad INTEGER,
    ciudad TEXT
)`);

// Endpoint para obtener todos los usuarios
app.get('/api/usuarios', (req, res) => {
    db.all('SELECT * FROM usuarios', [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            data: rows
        });
    });
});

// Endpoint para crear un nuevo usuario
app.post('/api/usuarios', (req, res) => {
    const { nombre, edad, ciudad } = req.body;
    db.run(`INSERT INTO usuarios (nombre, edad, ciudad) VALUES (?, ?, ?)`,
        [nombre, edad, ciudad],
        function(err) {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json({
                message: "Usuario creado",
                id: this.lastID
            });
        }
    );
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
