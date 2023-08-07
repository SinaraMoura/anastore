import './styles.css'
function Card({ img, title, categorie, price, desc, onclick }) {

    return (
        <div className="produto-item flex hover-produto mb-20" onClick={onclick}>
            <div className="p-12">
                <img className="img-coluna-maior" src={img} />
            </div>

            <div className="descricao p-12">
                <a href="">
                    <h4 className="title mb-10 mt-10">{title}</h4>

                    <div className="categoria mb-10">
                        <span>{categorie}</span>
                    </div>

                    <span className="price rose"><strong>{price}</strong></span>
                    <p className='description mt-10'>{desc}</p>
                </a>
            </div>
        </div>
    )
}

export default Card