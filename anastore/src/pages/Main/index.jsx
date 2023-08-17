import Card from '../../components/cards'
import './styles.css';
import Scroll from '../../components/scroll';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import NavBar from '../../components/navBar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import '../../css/global.css';
import '../../css/layout.css';
import '../../css/spacing.css';
import '../../App.css';
import { useNavigate } from 'react-router-dom';


function Main() {
    const navigate = useNavigate()
    const [produtos, setProdutos] = useState([]);
    const { allProducts, valueInput, setImg, setDesc, setCategorie, setPrice, setTitle, setComponentRender } = useContext(UserContext);

    function clickCard(card) {
        setImg(card.img);
        setCategorie(card.categorie);
        setDesc(card.desc);
        setTitle(card.title)
        setPrice(card.price);

        setComponentRender(true);
        navigate('/order')
    }

    useEffect(() => {
        setProdutos(allProducts);
    }, [allProducts]);

    return (
        <main className='main flex column'>
            <Header />
            <div className='content flex'>
                <NavBar
                    setProdutos={setProdutos}
                />

                <section className='coluna-maior p-12 public-sans'>
                    {produtos.filter(item => {
                        return item.products.some(product => {
                            return product.title.toLowerCase().includes(valueInput.toLowerCase());
                        })
                    }).map(produto => {
                        return (
                            <div key={produto.id} className='produto'>
                                <h2 className='mb-20 ibarra-real'>{produto.secao}</h2>
                                <div className='card-produtos space-around wrap'>
                                    {produto.products.filter(item => {
                                        return item.title.toLowerCase().includes(valueInput.toLowerCase());
                                    }).map(produto => {
                                        return <Card
                                            key={produto.id}
                                            img={produto.img}
                                            title={produto.title}
                                            categorie={produto.categorie}
                                            desc={produto.desc}
                                            price={produto.price}
                                            onclick={() => clickCard(produto)}
                                        />

                                    })}
                                </div>
                            </div>
                        )
                    })}
                </section>
            </div>
            <Footer />
            <Scroll />
        </main>
    )
}
export default Main