const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('API funcionando');
});

app.get('/suma', (req, res) => {
    res.send('Hola desde Render');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor iniciado');
});
