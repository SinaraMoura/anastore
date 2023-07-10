import { useState } from 'react';
import iconLocation from '../../assets/icon-location.png';
import database from '../../database';

function NavBar({ produtos, setProdutos }) {
    const [checked, setChecked] = useState(true);

    function showAll() {
        const localeProdutos = database;
        setProdutos(localeProdutos);
    }

    function earring() {
        const localeProdutos = database;
        const newProducts = localeProdutos.filter(item => {
            return item.sessao.toLowerCase().includes('brincos'.toLowerCase());
        });

        setProdutos(newProducts);
    }
    function necklaces() {
        const localeProdutos = database;
        const newProducts = localeProdutos.filter(item => {
            return item.sessao.toLowerCase().includes('colares'.toLowerCase());
        });

        setProdutos(newProducts);
    }
    function bracelets() {
        const localeProdutos = database;
        const newProducts = localeProdutos.filter(item => {
            return item.sessao.toLowerCase().includes('pulseiras'.toLowerCase());
        });

        setProdutos(newProducts);
    }
    function kits() {
        const localeProdutos = database;
        const newProducts = localeProdutos.filter(item => {
            return item.sessao.toLowerCase().includes('conjuntos'.toLowerCase());
        });

        setProdutos(newProducts);
    }
    function lowestPrice() {
        const localeProdutos = [...produtos];
        const newProducts = localeProdutos.map(item => {
            return {
                ...item, produtos: item.produtos.sort((a, b) => {
                    return a.price.localeCompare(b.price);
                })
            }
        });

        setProdutos(newProducts);
    }
    function biggestPrice() {
        const localeProdutos = [...produtos];
        const newProducts = localeProdutos.map(item => {
            return {
                ...item, produtos: item.produtos.sort((a, b) => {
                    return b.price.localeCompare(a.price);
                })
            }
        });

        setProdutos(newProducts);
    }
    function ascendingOrder() {
        const localeProdutos = [...produtos];
        const newProducts = localeProdutos.map(item => {
            return {
                ...item, produtos: item.produtos.sort((a, b) => {
                    return a.desc.localeCompare(b.desc);
                })
            }
        });

        setProdutos(newProducts);
    }
    function descendingOrder() {
        const localeProdutos = [...produtos];
        const newProducts = localeProdutos.map(item => {
            return {
                ...item, produtos: item.produtos.sort((a, b) => {
                    return b.desc.localeCompare(a.desc);
                })
            }
        });

        setProdutos(newProducts);
    }
    return (
        <>
            <section className='coluna-menor p-20-10 mr-ml-100'>
                <div className='border pb-10'>
                    <h3 className='mb-25 ibarra-real'>Categorias</h3>

                    <nav className='categories-list mb-40'>
                        <ul className='flex column pl-30 gap-25'>
                            <li onClick={showAll}>Tudo</li>
                            <li onClick={earring}>Brincos</li>
                            <li onClick={necklaces}>Colares</li>
                            <li onClick={bracelets}>Pulseiras</li>
                            <li onClick={kits}>Conjuntos</li>
                        </ul>
                    </nav>

                    <h3 className='mb-25 ibarra-real'>Ordenar Por</h3>
                    <nav className='mb-40'>
                        <ul className='flex column pl-30 gap-25'>
                            <li>Categorias</li>
                            <li onClick={lowestPrice}>Menor preço</li>
                            <li onClick={biggestPrice}>Maior preço</li>
                            <li onClick={ascendingOrder}>A-Z</li>
                            <li onClick={descendingOrder}>Z-A</li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <div className="whats flex align-center pt-pb-20">
                        <div className="icon-whats">
                            <a href="https://web.whatsapp.com/send?phone=5563992139582" target="_blank">
                                <img className="img"
                                    src="https://i.pinimg.com/originals/d9/d9/7d/d9d97d48264770f85d35c208f279152c.png"
                                    alt="icone whatsapp" />
                            </a>
                        </div>

                        <div className="numero-whats ml-10">
                            <a href="https://web.whatsapp.com/send?phone=5563992139582" target="_blank">
                                +55 63 99213-9582
                            </a>
                        </div>

                    </div>

                    <div className="instagram flex align-center pt-pb-20">
                        <div className="icon-insta">
                            <a href="https://www.instagram.com/ana.store2/" target="_blank">
                                <img className="img"
                                    src="http://siqueira-azul.com.br/wp-content/uploads/2021/04/ICONE-INSTAGRAM.png"
                                    alt="icone instagram" />
                            </a>
                        </div>
                        <div className="pag-insta ml-10">
                            <a href="https://www.instagram.com/ana.store2/" target="_blank">
                                @ana.store2
                            </a>
                        </div>
                    </div>

                    <div className="location flex align-center pt-pb-20">
                        <div className="icone-loc">
                            <a href="https://www.google.com/maps/place/Taipas+do+Tocantins+-+TO,+77308-000/@-12.1545121,-47.5342978,10z/data=!3m1!4b1!4m5!3m4!1s0x93482a4755d9a05b:0x375123dc8d01716c!8m2!3d-12.1938844!4d-46.9925087"
                                target="_blank">
                                <img className="img" src={iconLocation} alt="icone localização" />
                            </a>
                        </div>

                        <div className="nome-loc ml-10">
                            <a href="https://www.google.com/maps/place/Taipas+do+Tocantins+-+TO,+77308-000/@-12.1545121,-47.5342978,10z/data=!3m1!4b1!4m5!3m4!1s0x93482a4755d9a05b:0x375123dc8d01716c!8m2!3d-12.1938844!4d-46.9925087"
                                target="_blank">
                                Arraias/Taipas - Tocantins
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NavBar