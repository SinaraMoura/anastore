import Card from '../../components/cards'
import './styles.css';
import Scroll from '../../components/scroll';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import NavBar from '../../components/navBar';
import database from '../../database';
import Header from '../../components/header';
import Footer from '../../components/footer';
import '../../css/global.css';
import '../../css/layout.css';
import '../../css/spacing.css';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import { client, api } from '../../service/api';
import { toast } from "react-toastify";

function Main() {
    const navigate = useNavigate()
    const [produtos, setProdutos] = useState(database);
    const { valueInput, setImg, setDesc, setCategorie, setPrice, setComponentRender } = useContext(UserContext);

    function clickCard(card) {
        setImg(card.img);
        setCategorie(card.categorie);
        setDesc(card.desc);
        setPrice(card.price);

        setComponentRender(true);
        navigate('/order')
    }

    // useEffect(() => {
    //     async function handleInitial() {
    //         try {
    //             const responseProducts = await api.get('products', { client });
    //             console.log(responseProducts)
    //         } catch (error) {
    //             console.log(error?.response?.data?.message)
    //             // toast.error(error?.response?.data?.message);
    //         }
    //     }
    //     handleInitial()
    // }, [])

    return (
        <main className='main flex column'>
            <Header />
            <div className='flex'>
                <NavBar
                    produtos={produtos}
                    setProdutos={setProdutos}
                />

                <section className='coluna-maior p-12 public-sans'>
                    {
                        produtos.filter(item => {
                            return item.produtos.some(produto => {
                                return produto.desc.toLowerCase().includes(valueInput.toLowerCase());
                            })
                        }).map(item => {
                            return (
                                <div key={item.id} className='produto'>
                                    <h2 className='mb-20 ibarra-real'>{item.sessao}</h2>
                                    {item.produtos.filter(item => {
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
                                </div>)
                        })
                    }
                </section>
            </div>
            <Footer />
            <Scroll />
        </main>
    )
}
export default Main