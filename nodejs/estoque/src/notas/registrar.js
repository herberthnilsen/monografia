// Registra a nota fiscal 
const registrarNota = (notaFiscal) =>{

    const message = `Nota Fiscal ${notaFiscal.numero} registrada com sucesso!`
    console.log(message);
    return message;

}

module.exports=registrarNota;