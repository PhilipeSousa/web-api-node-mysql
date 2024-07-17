require('dotenv').config();
const express = require('express');
const app = express();

const db = require('./db');

// Parse do corpo das requisições
app.use(express.json());

app.delete('/clients/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await db.deleteClient(id);
    res.sendStatus(204);
});

app.patch('/clients/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const upClient = req.body;
    await db.patchClient(id, upClient);
    res.sendStatus(200);
});

app.post('/clients', async (req, res) => {
    const client = req.body;
    await db.insertClient(client);
    res.sendStatus(201);
});

app.get('/clients/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const client = await db.getClient(id);
    res.json(client);
});

app.get('/clients', async (req, res) => {
    const allClients = await db.getAllClients();
    res.json(allClients);
});

app.get('/', (req, res) => {
    res.json({
        message: 'está rodando'
    });
});

app.listen(process.env.PORT, () => {
    console.log("Está rodando!");
});
