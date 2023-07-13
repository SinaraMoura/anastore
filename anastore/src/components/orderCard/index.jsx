import { useContext } from 'react';
import UserContext from '../../context/UserContext'
import Header from '../header';
import './styles.css';
function OrderCard() {
    const { img, categorie, desc, price } = useContext(UserContext);
    const message = 'Olá, gostaria de fazer um pedido da sua loja.';

    return (
        <>
            <Header />
            <div className="payment flex space-around p-15 mt-20 grafik">
                <div className='img-pay'>
                    <img src={img} alt="" />
                </div>
                <div className='info-pay flex column between'>
                    <div>
                        <p className='categorie-pay uppercase'>{categorie}</p>
                        <p className='desc-pay'>{desc}</p>
                        <p className='price-pay border'>{price}</p>
                    </div>

                    <a className='button ' href={`https://wa.me/556163992139582?text=+${message}`} target="_blank">
                        <img className="img"
                            src="https://i.pinimg.com/originals/d9/d9/7d/d9d97d48264770f85d35c208f279152c.png"
                            alt="icone whatsapp" />
                        PEDIR POR WHATSAPP
                    </a>
                </div>

            </div>
        </>
    )
}

export default OrderCard