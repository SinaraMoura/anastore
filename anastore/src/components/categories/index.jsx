import { useContext } from 'react';
import UserContext from '../../context/UserContext';

export default function Categories({ setProdutos }) {
    const { allProducts } = useContext(UserContext);

    function showAll() {
        const localeProdutos = allProducts;
        setProdutos(localeProdutos);
    }

    function earring() {
        const localeProdutos = allProducts;
        const newProducts = localeProdutos.filter(item => {
            return item.secao.toLowerCase().includes('brincos'.toLowerCase());
        });

        setProdutos(newProducts);
    }
    function necklaces() {
        const localeProdutos = allProducts;
        const newProducts = localeProdutos.filter(item => {
            return item.secao.toLowerCase().includes('colares'.toLowerCase());
        });

        setProdutos(newProducts);
    }
    function bracelets() {
        const localeProdutos = allProducts;
        const newProducts = localeProdutos.filter(item => {
            return item.secao.toLowerCase().includes('pulseiras'.toLowerCase());
        });

        setProdutos(newProducts);
    }
    function kits() {
        const localeProdutos = allProducts;
        const newProducts = localeProdutos.filter(item => {
            return item.secao.toLowerCase().includes('conjuntos'.toLowerCase());
        });

        setProdutos(newProducts);
    }
    return (
        <div>
            <h3 className='mb-25 ibarra-real'>Categorias</h3>

            <nav className='categories-list mb-40'>
                <ul className='flex column pl-30 gap-25'>
                    <li onClick={showAll}>Tudo</li>
                    <li onClick={earring}>Brincos</li>
                    <li onClick={necklaces}>Colares</li>
                    <li onClick={bracelets}>Pulseiras</li>
                    <li onClick={kits}>Conjuntos</li>
                </ul>
            </nav>
        </div>
    )
}