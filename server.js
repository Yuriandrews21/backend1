const express = require('express');
const app = express();
const userRoutes = require('../routes/users'); // Importa as rotas de usuários

app.use(express.json()); // Middleware para interpretar JSON
app.use('/api/users', userRoutes); // Prefixo para as rotas de usuários

const PORT = 3000; // Porta do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
