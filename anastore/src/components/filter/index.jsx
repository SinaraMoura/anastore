import { useContext } from 'react';
import UserContext from '../../context/UserContext';

export default function Filter({ setProdutos }) {
    const { allProducts } = useContext(UserContext);

    function lowestPrice() {
        const localeProdutos = [...allProducts];
        const newProducts = localeProdutos.map(item => {
            return {
                ...item, produtos: item.products.sort((a, b) => {
                    return a.price.localeCompare(b.price);
                })
            }
        });

        setProdutos(newProducts);
    }
    function biggestPrice() {
        const localeProdutos = [...allProducts];
        const newProducts = localeProdutos.map(item => {
            return {
                ...item, produtos: item.products.sort((a, b) => {
                    return b.price.localeCompare(a.price);
                })
            }
        });

        setProdutos(newProducts);
    }
    function ascendingOrder() {
        const localeProdutos = [...allProducts];
        const newProducts = localeProdutos.map(item => {
            return {
                ...item, produtos: item.products.sort((a, b) => {
                    return a.desc.localeCompare(b.desc);
                })
            }
        });

        setProdutos(newProducts);
    }
    function descendingOrder() {
        const localeProdutos = [...allProducts];
        const newProducts = localeProdutos.map(item => {
            return {
                ...item, produtos: item.products.sort((a, b) => {
                    return b.desc.localeCompare(a.desc);
                })
            }
        });

        setProdutos(newProducts);
    }
    return (
        <div>
            <h3 className='mb-25 ibarra-real'>Ordenar Por</h3>
            <nav className='filtros-list mb-40'>
                <ul className='flex column pl-30 gap-25'>
                    <li onClick={lowestPrice}>Menor preço</li>
                    <li onClick={biggestPrice}>Maior preço</li>
                    <li onClick={ascendingOrder}>A-Z</li>
                    <li onClick={descendingOrder}>Z-A</li>
                </ul>
            </nav>
        </div>
    )
}