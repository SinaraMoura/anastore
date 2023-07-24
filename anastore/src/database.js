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
                id: 'b01',
                img: brincoGota,
                desc: 'Brinco Gota',
                categorie: 'brincos',
                price: 'R$ 30,00'
            },
            {
                id: 'b02',
                img: brincoTriplo,
                desc: 'Brinco Triplo',
                categorie: 'brincos',
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
                price: 'R$ 35,00'
            },
            {
                id: 'c02',
                img: olho,
                desc: 'Colar Olho Grego',
                categorie: 'colares',
                price: 'R$ 60,00'
            }
        ]
    },
    {
        id: 3,
        sessao: 'Pulseiras',
        produtos: [
            {
                id: 'p01',
                img: tartaruga,
                desc: 'Pulseira Tartaruga',
                categorie: 'pulseiras',
                price: 'R$ 30,00'
            },
            {
                id: 'p02',
                img: perolas,
                desc: 'Pulseira Perolas',
                categorie: 'pulseiras',
                price: 'R$ 80,00'
            }
        ]
    },
    {
        id: 4,
        sessao: 'Conjuntos',
        produtos: [
            {
                id: 'cj01',
                img: branco,
                desc: 'Kit Brilhante Branco',
                categorie: 'kit',
                price: 'R$ 100,00'
            },
            {
                id: 'cj02',
                img: azul,
                desc: 'Kit Brilhante Azul',
                categorie: 'kit',
                price: 'R$ 85,00'
            }
        ]
    }

]

export default database