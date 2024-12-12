const { Pool } = require('pg');

// Configuração da conexão com o PostgreSQL
const pool = new Pool({
  user: 'gotattoo_user',        // Nome do usuário
  host: 'localhost',            // Local do PostgreSQL
  database: 'gotattoo',         // Nome do banco de dados
  password: '24434998',         // Senha do banco
  port: 5432,                   // Porta padrão do PostgreSQL
});

// Testa a conexão
pool.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao PostgreSQL:', err);
  } else {
    console.log('Conectado ao PostgreSQL!');
  }
});

module.exports = pool;
