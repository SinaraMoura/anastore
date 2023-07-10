import './styles.css'
function Card({ img, desc, categorie, price }) {

    return (
        <div className="produto-item flex hover-produto">
            <div className="p-12">
                <a href=''>
                    <img className="img-coluna-maior" src={img} />
                </a>
            </div>

            <div className="descricao p-12">
                <a href="">
                    <h4 className=" mb-10 mt-10">{desc}</h4>

                    <div className="categoria mb-10">
                        <span>{categorie}</span>
                    </div>

                    <span className="price rose"><strong>{price}</strong></span>
                </a>
            </div>
        </div>
    )
}

export default Card