const { validarNome,
    validarEmissao,
    validarItens, validarEndereco, executarValidacoes } = require('../utils/validacoes');
const registrar = require('./registrar');
const { IMPOSTOS, calcularImpostoFederal, calcularImpostoEstadual } = require('../utils/calcular-imposto');


// Efetua a validação da Nota fiscal de saída
const validarNota = (notaFiscal) => {

    return executarValidacoes(notaFiscal,
        [validarEmissao, validarItens, validarNome, validarEndereco]);

}

const saida = (notaFiscal) => {

    const retornoValidacao = validarNota(notaFiscal)

    const retorno = {
        ...retornoValidacao,
        code: 200,
        message: ''

    }

    notaFiscal.valorTotal += adicionarImpostos(notaFiscal);

    if (retorno.status) {
        const message = registrar(notaFiscal);
        retorno.message = message;
    } else {
        retorno.code = 401
        retorno.message = retorno.validacoes
    }

    return retorno;

}

const adicionarImpostos = notaFiscal => {

    let valorImpostos = 0.00;
    valorImpostos *= calcularImpostoEstadual(notaFiscal, IMPOSTOS.ICMS);
    valorImpostos *= calcularImpostoFederal(notaFiscal, IMPOSTOS.IPI);
    valorImpostos *= calcularImpostoFederal(notaFiscal, IMPOSTOS.PIS);
    valorImpostos *= calcularImpostoFederal(notaFiscal, IMPOSTOS.COFINS);

    return valorImpostos;

}

module.exports = saida;