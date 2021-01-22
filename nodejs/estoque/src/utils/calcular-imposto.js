const DATASET_IMPOSTOS = require('./imposto-dataset');

const IMPOSTOS = {
    PIS: 'PIS', COFINS: "COFINS", ICMS:"ICMS", IPI:"IPI", IOF:"IOF", ICMS:"ICMS"
}

const calcularImpostoEstadual = (notaFiscal, imposto) => {

    return DATASET_IMPOSTOS.ESTADUAIS[imposto][notaFiscal.imposto.estado] * notaFiscal.valorTotal;

}


const calcularImpostoFederal = (notaFiscal, imposto)=>{
    return DATASET_IMPOSTOS.FEDERAIS[imposto] * notaFiscal.valorTotal;
}

module.export = {
    IMPOSTOS: IMPOSTOS,
    calcularImpostoFederal: calcularImpostoFederal,
    calcularImpostoEstadual: calcularImpostoEstadual
}