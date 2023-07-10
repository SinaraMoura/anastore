import './styles.css';
function Payment({ img, categorie, desc, price }) {
    return (
        <>
            <div className="payment flex space-around p-15 mt-20 grafik">
                <div className='img-pay'></div>
                <div className='info-pay flex column between'>
                    <div>
                        <p className='categorie-pay uppercase'>{categorie}</p>
                        <p className='desc-pay'>{desc}</p>
                        <p className='price-pay border'>{price}</p>
                    </div>

                    <a className='button flex align-center justify-content' href="https://web.whatsapp.com/send?phone=5563992139582" target="_blank">
                        <img className="img"
                            src="https://i.pinimg.com/originals/d9/d9/7d/d9d97d48264770f85d35c208f279152c.png"
                            alt="icone whatsapp" />
                        Pedir por WhatsApp
                    </a>
                </div>

            </div>
        </>
    )
}

export default Payment