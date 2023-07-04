import search from '../../assets/icon-search.png';
import logo from '../../assets/logo.jpg';

function Header() {
    return (
        <>
            <header className='header flex align-center p-12 mr-ml-100'>
                <div className="icon-search mr-20">
                    <img className="icon transform mr-10 " src={search} alt="icone de busca" />
                    <input className="input p-input box" type="text" placeholder="O que você procura?" />
                </div>

                <img className="logo mb-16 ml-30p" src={logo} alt="logo" />
            </header>
        </>
    )
}

export default Header