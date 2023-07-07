import { useContext } from 'react';
import search from '../../assets/icon-search.png';
import logo from '../../assets/logo.jpg';
import UserContext from '../../context/UserContext';

function Header() {
    const { valueInput, setValueInput } = useContext(UserContext);

    function handleChange(event) {
        const content = event.target.value;

        event.target.value = '';
        setValueInput(content);
    }

    return (
        <section className='border'>
            <header className='header flex align-center p-12 mr-ml-100'>
                <div className="icon-search mr-20">
                    <img className="icon transform mr-10 " src={search} alt="icone de busca" />
                    <input value={valueInput} onChange={(e) => handleChange(e)} className="input p-input box" type="text" placeholder="O que você procura?" />
                </div>

                <img className="logo mb-16 ml-30p" src={logo} alt="logo" />
            </header>
        </section>
    )
}

export default Header