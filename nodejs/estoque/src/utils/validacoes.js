const validarNome = (notaFiscal) => {

    return notaFiscal.nome && notaFiscal.nome !== null ? null :
        "Não foi informado nome do cliente!" ;

}

const validarEmissao = (notaFiscal) => {

    return notaFiscal.emissao && notaFiscal.emissao !== null ? null :
        "Não foi informado data de emissão!" ;

}

const validarItens = (notaFiscal) => {

    return notaFiscal.itens && notaFiscal.itens !== null && notaFiscal.itens.length > 0 ? null :
        "Não há itens na nota fiscal!" ;

}

const validarEndereco = (notaFiscal) => {
    return notaFiscal.endereco && notaFiscal.endereco !== null ? null :
        "Não foi informado destinatário na nota fiscal!" ;

}

const executarValidacoes = (objeto, validacoes) => {

    const retorno = {
        status: true,
        validacoes: []
    }

    // Percorre a lista de validações recebidas
    validacoes.forEach((validacao) => {
        
        // Aplica a validação para cada funcção recebida
        const mensagem = validacao(objeto);
        console.log(`mensagem validação=> ${mensagem}`);

        // Se recebeu alguma mensagem de validação, 
        // então adiciona ao retorno
        if (mensagem !== null) retorno.validacoes.push(mensagem);
    
    });

    if (retorno.validacoes.length > 0) retorno.status = false

    return retorno;
}

module.exports = {
    validarNome: validarNome,
    validarEmissao: validarEmissao,
    validarItens: validarItens,
    validarEndereco: validarEndereco,
    executarValidacoes : executarValidacoes
}