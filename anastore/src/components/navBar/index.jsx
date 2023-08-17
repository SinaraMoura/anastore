import './styles.css'
import Categories from '../categories';
import Filter from '../filter';
import Contacts from '../contacts';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import ModalCategories from '../modals/modalCategories';
import ModalFilter from '../modals/modalFilter';

function NavBar({ setProdutos }) {
    const { modalCategories, setModalCategories, modalFilter, setModalFilter } = useContext(UserContext);

    function clickCategories() {
        setModalCategories(true)
    }
    function closeCategories() {
        setModalCategories(false)
    }
    function clickFilter() {
        setModalFilter(true)
    }
    function closeFilter() {
        setModalFilter(false)
    }
    return (
        <>
            <section className='coluna-menor '>
                <div className='border pb-10'>
                    <ModalCategories />
                    <ModalFilter />
                    <Categories setProdutos={setProdutos} />
                    <Filter setProdutos={setProdutos} />
                </div>

                <Contacts />
                <div className='btn flex gap-25'>
                    {modalCategories ?
                        <button className='btn-categories' onClick={() => closeCategories()} >Categorias</button>
                        :
                        <button className='btn-categories' onClick={() => clickCategories()} >Categorias</button>
                    }
                    {modalFilter ?
                        <button className='btn-filter' onClick={() => clickFilter()}>Filtros</button>
                        :
                        <button className='btn-filter' onClick={() => closeFilter()}>Filtros</button>
                    }
                </div>
            </section>
        </>
    )
}

export default NavBar