const express = require('express');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let db;

(async () => {
    db = await open({
        filename: './banco.db',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS torcedores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            data_nascimento TEXT,
            email TEXT,
            pais TEXT,
            jogador_favorito TEXT
        )
    `);
})();

app.post('/salvar-torcedor', async (req, res) => {
    const { nome, dataNascimento, email, pais, jogadorFavorito } = req.body;
    
    const resultado = await db.run(
        `INSERT INTO torcedores (nome, data_nascimento, email, pais, jogador_favorito) VALUES (?, ?, ?, ?, ?)`,
        [nome, dataNascimento, email, pais, jogadorFavorito]
    );
    
    res.json({ id: resultado.lastID });
});

app.get('/pegar-torcedor/:id', async (req, res) => {
    const torcedor = await db.get(`SELECT * FROM torcedores WHERE id = ?`, [req.params.id]);
    res.json(torcedor);
});

app.listen(3000, () => console.log("Servidor ligado com sucesso na porta 3000!"));