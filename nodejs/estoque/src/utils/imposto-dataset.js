//Dataset em simulação ao retorno do banco de dados
const DATASET_IMPOSTOS = {
    FEDERAIS:
    {
        IOF: 1,
        PIS: 0.16,
        IPI: 0.16,
        COFINS: 0.16
    },
    ESTADUAIS: {
        ICMS: {
            SP: 0.23,
            RJ: 0.46,
            MG: 0.32,
            BA: 0.16
        }
    },
    MUNICIPAIS: {
        SAOPAULO: {
            ISS: {

                SP: 0.23,
                RJ: 0.46,
                MG: 0.32,
                BA: 0.16
            }
        },
        SANTOANDRE: {
            ISS: {

                SP: 0.23,
                RJ: 0.46,
                MG: 0.32,
                BA: 0.16
            }
        },
        SAOBERNARDODOCAMPO: {
            ISS: {

                SP: 0.23,
                RJ: 0.46,
                MG: 0.32,
                BA: 0.16
            }
        }

    }

}

module.export= DATASET_IMPOSTOS;