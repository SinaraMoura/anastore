import Card from '../cards';
import './styles.css';
import Scroll from '../scroll';
import { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import NavBar from '../navBar';
import database from '../../database';

function Main() {
    const [produtos, setProdutos] = useState(database);
    const { valueInput } = useContext(UserContext);

    return (
        <main className='flex'>
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
                                    />
                                })}
                            </div>)
                    })
                }
            </section>
            <Scroll />
        </main>
    )
}
export default Main