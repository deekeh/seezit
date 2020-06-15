const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/login', (req, res) => {
    console.log('logged in');
})

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
