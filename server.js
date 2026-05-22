const express = require('express');
const app = express();

app.use('/suma', require('./routes/suma'));
app.use('/weekends', require('./routes/weekends'));

const PORT = process.env.PORT || 3000;
app.listen(PORT);
