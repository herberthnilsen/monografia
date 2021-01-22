const express = require('express');
const app = express();
const entrada = require('./notas/entrada');
const saida = require('./notas/saida');

app.use(express.json());

app.post('/entrada', (req, res)=>{

    const retornoRegistro = entrada(req.body);

    res.status(retornoRegistro.code).send(retornoRegistro.message);
    
});


app.post('/saida', (req, res)=>{

    const retornoRegistro = saida(req.body);

    res.status(retornoRegistro.code).send(retornoRegistro.message);
    
});


app.listen(80, ()=>{
    console.log('Listen at port 80');
})