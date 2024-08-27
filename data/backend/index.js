const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a la base de datos SQLite
const db = new sqlite3.Database('./datos_proyectos.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado a la base de datos SQLite.');
});

// Crear la tabla de usuarios si no existe
db.run(`CREATE TABLE IF NOT EXISTS Proyectos (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    Tittle TEXT,
    Desc TEXT,
    FtURL TEXT
)`);

// Endpoint para obtener todos los usuarios
app.get('/api/proyectos', (req, res) => {
    db.all('SELECT * FROM proyectos', [], (err, rows) => {
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
app.post('/api/proyectos', (req, res) => {
    const { Tittle, Desc, FtURL } = req.body;
    db.run(`INSERT INTO Proyectos (Tittle, Desc, FtURL) VALUES (?, ?, ?)`,
        [Tittle, Desc, FtURL],
        function(err) {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json({
                message: "proyecto creado",
                id: this.lastID
            });
        }
    );
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
