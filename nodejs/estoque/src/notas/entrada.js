const {validarNome,
    validarEmissao,
    validarItens, executarValidacoes} = require('../utils/validacoes');
const registrar = require('./registrar');

// Efetua a validação da Nota fiscal de entrada
const validarNota = (notaFiscal) => {
 
    return executarValidacoes(notaFiscal, 
        [validarEmissao, validarItens, validarNome]);
    
}

const entrada = (notaFiscal)=>{
    
    const retorno = {
        ... validarNota(notaFiscal),
        code: 200,
        message:''

    } 

    if(retorno.status){
        const message = registrar(notaFiscal);
        retorno.message=message;
    }else{
        retorno.code=401
        retorno.message = retorno.validacoes
    }

    return retorno;

}

module.exports = entrada;