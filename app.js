import express from 'express';

const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/new', (req, res) => res.send('heureux de vous voir!'));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
