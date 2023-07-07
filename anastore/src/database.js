import brincoGota from './assets/brincos/brinco-gota.jpg';
import brincoTriplo from './assets/brincos/brinco-triplo.jpg';
import girrasol from './assets/colares/colar-girrasol.jpg';
import olho from './assets/colares/colar-olho-grego.jpg';
import tartaruga from './assets/pulseiras/pulseira-tartaruga.jpg';
import perolas from './assets/pulseiras/pulseira-perolas.jpg';
import azul from './assets/conjuntos/conjunto-brilhante-azul.jpg';
import branco from './assets/conjuntos/conjunto-brilhante-branco.jpg'

const database = [
    {
        id: 1,
        sessao: 'Brincos',
        produtos: [
            {
                id: 'brinco01',
                img: brincoGota,
                desc: 'Brinco Gota',
                categorie: 'colares',
                price: 'R$ 70,00'
            },
            {
                id: 'brinco02',
                img: brincoTriplo,
                desc: 'Brinco Triplo',
                categorie: 'categorie',
                price: 'R$ 60,00'
            }
        ]
    },
    {
        id: 2,
        sessao: 'Colares',
        produtos: [
            {
                id: 'c01',
                img: girrasol,
                desc: 'Colar Girrasol',
                categorie: 'colares',
                price: 'R$ 70,00'
            },
            {
                id: 'c02',
                img: tartaruga,
                desc: 'Colar Tartaruga',
                categorie: 'categorie',
                price: 'R$ 60,00'
            }
        ]
    }

]

export default database