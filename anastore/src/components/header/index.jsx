import search from '../../assets/icon-search.png';
import logo from '../../assets/logo.jpg';
import './styles.css'
function Header() {
    return (
        <>
            <header className='header flex p-12 align-center mr-ml-100'>
                <div className="icon-search">
                    <img className="icon transform" src={search} alt="icone de busca" />
                </div>

                <input className="input p-input box" type="text" placeholder="O que você procura?" />
                <div className="logomarca ml-250 ">
                    <a href="#"><img className="logo" src={logo} alt="logo" /></a>
                </div>
            </header>
        </>
    )
}

export default Header