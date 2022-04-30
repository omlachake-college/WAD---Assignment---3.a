

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('static'))
app.get('/', (req, res) => {
    res.sendFile('./static/home.html', { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));