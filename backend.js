import express, { json } from 'express';
import cors from 'cors';
import { readFile, writeFile } from 'fs';


const app = express();

app.use(cors());
app.use(json());

// Send the todo list to the client
app.get('/todo', (req, res) => {
    readFile('./todo.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
        } else {
            res.send(data);
        }
    });
});


// Send the doing list to the client
app.get('/doing', (req, res) => {
    readFile('./doing.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
        } else {
            res.send(data);
        }
    });
});

// Send the done list to the client
app.get('/done', (req, res) => {
    readFile('./done.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
        } else {
            res.send(data);
        }
    });
});

// Save the todo list
app.post('/todo', (req, res) => {
    writeFile('./todo.json', JSON.stringify(req.body), (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
        } else {
            res.send('OK');
        }
    });
});


// Save the doing list
app.post('/doing', (req, res) => {
    writeFile('./doing.json', JSON.stringify(req.body), (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
        } else {
            res.send('OK');
        }
    });
});

// Save the done list
app.post('/done', (req, res) => {
    writeFile('./done.json', JSON.stringify(req.body), (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
        } else {
            res.send('OK');
        }
    });
});

app.listen(3456, () => {
    console.log('Server started on port 3456');
});