import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json([
        'Tomás',
        'Jéssica',
        'Giovanni',
        'Rebeca'
    ]);
});

app.listen(3333);
