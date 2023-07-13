import { useContext } from 'react';
import search from '../../assets/icon-search.png';
import back from '../../assets/back.png';
import logo from '../../assets/logo.jpg';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const { valueInput, setValueInput, componentRender, setComponentRender } = useContext(UserContext);

    function handleChange(event) {
        const content = event.target.value;

        event.target.value = '';
        setValueInput(content);
    }
    function clickBack() {
        setComponentRender(false);
        navigate('/');
    }

    return (
        <section className='border'>
            <header className='header flex between align-center p-12 mr-ml-100'>
                <div className="header-icon flex align-center justify-content mr-20" onClick={clickBack}>
                    {componentRender ?
                        <img className="icon mr-10 pointer " src={back} alt="icone de busca" />
                        :
                        <img className="icon transform mr-10 " src={search} alt="icone de busca" />
                    }
                    {componentRender ?
                        <p className='pointer'>Voltar</p>
                        :
                        <input value={valueInput} onChange={(e) => handleChange(e)}
                            className="input p-input box" type="text" placeholder="O que você procura?" />
                    }

                </div>

                <img className="logo mb-16 ml-30p" src={logo} alt="logo" />
            </header>
        </section>
    )
}

export default Header