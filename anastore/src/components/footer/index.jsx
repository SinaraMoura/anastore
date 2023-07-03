import { NavLink } from "react-router-dom";
function Footer() {
    return (
        <>
            <footer className="footer flex align-center justify-content  ">
                <p className="paragrafo public-sans grey">
                    Dica de Segurança: não realize pagamentos para desconhecidos. As ofertas e produtos apresentados nesse
                    catálogo
                    são de responsabilidade de <a href='https://www.instagram.com/ana.store2/' className="rose" target='_blank'>Ana Store</a>.
                </p>
            </footer>
        </>
    )
}
export default Footer