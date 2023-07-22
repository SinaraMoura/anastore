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
    const { allProducts, valueInput, setImg, setDesc, setCategorie, setPrice, setComponentRender } = useContext(UserContext);

    function clickCard(card) {
        setImg(card.img);
        setCategorie(card.categorie);
        setDesc(card.desc);
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
            <div className='flex'>
                <NavBar
                    setProdutos={setProdutos}
                />

                <section className='coluna-maior p-12 public-sans'>
                    {produtos.filter(item => {
                        return item.products.some(product => {
                            return product.desc.toLowerCase().includes(valueInput.toLowerCase());
                        })
                    }).map(produto => {
                        return (
                            <div key={produto.id} className='produto'>
                                <h2 className='mb-20 ibarra-real'>{produto.secao}</h2>
                                {produto.products.filter(item => {
                                    return item.desc.toLowerCase().includes(valueInput.toLowerCase());
                                }).map(produto => {
                                    return <Card
                                        key={produto.id}
                                        img={produto.img}
                                        desc={produto.desc}
                                        categorie={produto.categorie}
                                        price={produto.price}
                                        onclick={() => clickCard(produto)}
                                    />

                                })}
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