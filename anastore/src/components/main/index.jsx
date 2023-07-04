import iconLocation from '../../assets/icon-location.png';
import './styles.css';
function Main() {
    return (
        <main>
            <section className='coluna-menor p-20-10 mr-ml-100'>
                <div className='categories pb-10'>
                    <h3 className='mb-25 ibarra-real'>Categorias</h3>
                    <nav className='categories-list mb-40'>
                        <ul className='flex column pl-30 gap-25'>
                            <li>Brincos</li>
                            <li>Colares</li>
                            <li>Pulseiras</li>
                            <li>Conjuntos</li>
                        </ul>
                    </nav>

                    <h3 className='mb-25 ibarra-real'>Ordenar Por</h3>
                    <nav className='mb-40'>
                        <ul className='flex column pl-30 gap-25'>
                            <li>Categorias</li>
                            <li>Menor preço</li>
                            <li>Maior preço</li>
                            <li>A-Z</li>
                            <li>Z-A</li>
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
        </main>
    )
}
export default Main