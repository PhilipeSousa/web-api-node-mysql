const mysql = require('mysql2/promise');

const client = mysql.createPool(process.env.CONNECTION_STRING);

async function getAllClients() {
    const [results] = await client.query("SELECT * FROM clientes");
    return results;
}

async function getClient(id) {
    const [results] = await client.query("SELECT * FROM clientes WHERE id=?", [id]);
    return results[0];
}

async function insertClient(newClient) {
    const values = [newClient.nome, newClient.email, newClient.telefone, newClient.endereco];
    await client.query("INSERT INTO clientes (nome, email, telefone, endereco) VALUES (?, ?, ?, ?)", values);
}

async function patchClient(id, clientData) {
    const allowedFields = ['nome', 'email', 'telefone', 'endereco'];
    const fields = [];
    const values = [];

    for (let key in clientData) {
        if (clientData.hasOwnProperty(key) && allowedFields.includes(key)) {
            fields.push(`${key} = ?`);
            values.push(clientData[key]);
        }
    }

    if (fields.length === 0) {
        throw new Error('Este campo não pode ser editado');
    }

    values.push(id);

    const query = `UPDATE clientes SET ${fields.join(', ')} WHERE id = ?`;
    await client.query(query, values);
}

async function deleteClient(id) {
    await client.query("DELETE FROM clientes WHERE id = ?", [id]);
}

module.exports = {
    getAllClients,
    getClient,
    insertClient,
    patchClient,
    deleteClient
};
