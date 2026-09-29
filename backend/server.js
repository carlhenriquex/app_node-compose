const express = require('express');
const mysql = require('mysql2');

const app = express();

app.use(express.json());

app.use(express.static('public'));

// Conexão com o banco de dados
const db = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: '123456',
    database: 'sistema'
});

// Verificando conexão
db.connect((err) => {
    if (err) {
        console.log('Erro ao conectar:', err);
        return;
    }

    console.log('Conectado ao MySQL!');
});

// Rota de login
app.post('/login', (req, res) => {

    const { nome, senha } = req.body;

    const sql = 'SELECT * FROM usuarios WHERE nome = ? AND senha = ?';

    db.query(sql, [nome, senha], (err, resultado) => {

        if (err) {
            return res.status(500).json({
                mensagem: 'Erro no banco de dados'
            });
        }

        if (resultado.length > 0) {
            return res.json({
                mensagem: 'Login realizado com sucesso!'
            });
        }

        res.status(401).json({
            mensagem: 'Usuário ou senha incorretos'
        });
    });
});

// Iniciando servidor
app.listen(3000, '0.0.0.0', () => {
    console.log('Backend rodando na porta 3000');
});