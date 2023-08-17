import iconLocation from '../../assets/icon-location.png';
export default function Contacts() {
    return (
        <div className='contacts'>
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
                    <a href="https://www.google.com/maps/place/Arraias,+TO,+77330-000/@-12.9289267,-46.9549947,15z/data=!3m1!4b1!4m6!3m5!1s0x9348fafb9b44372f:0x9128b5eb43defdd2!8m2!3d-12.9325033!4d-46.9367418!16s%2Fg%2F11bc6x_ksh?entry=ttu"
                        target="_blank">
                        Arraias - Tocantins
                    </a>
                </div>
            </div>
        </div>
    )
}