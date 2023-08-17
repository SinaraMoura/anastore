import { useContext } from 'react';
import search from '../../assets/icon-search.png';
import back from '../../assets/back.png';
import logo from '../../assets/logo.jpg';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import './styles.css';
function Header() {
    const navigate = useNavigate();
    const { valueInput, setValueInput, componentRender, setComponentRender } = useContext(UserContext);

    function handleChange(event) {
        const content = event.target.value;

        setValueInput(content);
        event.target.value = " ";
    }
    function teclouEnter(tecla) {
        return tecla === 'Enter';
    }
    function clickBack() {
        setComponentRender(false);
        navigate('/');
    }

    return (
        <section className='section-header '>
            <header className='header flex between align-center p-12'>
                <div className="header-icon flex align-center justify-content mr-20" onClick={clickBack}>
                    {componentRender ?
                        <img className="icon-back icon mr-10 pointer " src={back} alt="icone de volta" />
                        :
                        <img className="seach icon transform mr-10 " src={search} alt="icone de busca" />
                    }
                    {componentRender ?
                        <p className='back pointer'>Voltar</p>
                        :
                        <input value={valueInput} onChange={(e) => handleChange(e)}
                            className="input p-input box" type="text" placeholder="O que você procura?" />
                    }

                </div>

                <img className="logo mb-16 " src={logo} alt="logo" />

            </header>
        </section>
    )
}

export default Header