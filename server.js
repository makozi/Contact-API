//server.js

import express from 'express';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send({ 'message': 'Yay! The Contact API works ' });
});


import Contact from './src/controllers/Contact';

app.post('/api/v1/contacts', Contact.create);
app.get('/api/v1/contacts', Contact.getAll);
app.get('/api/v1/contacts/:id', Contact.getOne);
app.put('/api/v1/contacts/:id', Contact.update);
app.delete('/api/v1/contacts/:id', Contact.delete);

app.listen(5000);
console.log('app running on port', 5000);