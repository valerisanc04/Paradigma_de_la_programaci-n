const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('¡holaaa,chicoss!');
});

app.get('/json',(req,res) => {
    res.json({mensaje: '¡Hola,mundo en formato JSON'});
});

app.get('/inf',(req,res) => {
    res.json({nombre:'valeri ', apellido:'sanchez', edad:'15', IE:'salle campoamor' });
});

app.listen(3000, () => {
    console.log('servidor escuchando en el puerto 3000');
});