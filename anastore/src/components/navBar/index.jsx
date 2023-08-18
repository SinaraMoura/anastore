import './styles.css'
import Categories from '../categories';
import Filter from '../filter';
import Contacts from '../contacts';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import ModalCategories from '../modals/modalCategories';
import ModalFilter from '../modals/modalFilter';

function NavBar({ setProdutos }) {
    const { setModalCategories, setModalFilter } = useContext(UserContext);

    function clickCategories() {
        setModalCategories(true)
    }

    function clickFilter() {
        setModalFilter(true)
    }

    return (
        <>
            <section className='coluna-menor '>
                <div className='border pb-10'>
                    <ModalCategories setProdutos={setProdutos} />
                    <ModalFilter setProdutos={setProdutos} />

                    <h3 className='mb-25 ibarra-real'>Categorias</h3>
                    <Categories setProdutos={setProdutos} />

                    <h3 className='mb-25 ibarra-real'>Ordenar por</h3>
                    <Filter setProdutos={setProdutos} />
                </div>

                <Contacts />
                <div className='btn  gap-25'>
                    <button className='btn-categories' onClick={() => clickCategories()} >Categorias</button>
                    <button className='btn-filter' onClick={() => clickFilter()}>Filtros</button>
                </div>
            </section>
        </>
    )
}

export default NavBar