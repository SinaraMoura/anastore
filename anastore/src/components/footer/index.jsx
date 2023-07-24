import './styles.css';
function Footer() {
    return (
        <>
            <footer className="footer flex column align-center gap-25 justify-content ptb-30">
                <p className="paragrafo public-sans grey">
                    Dica de Segurança: não realize pagamentos para desconhecidos. As ofertas e produtos apresentados nesse
                    catálogo
                    são de responsabilidade de <a href='https://www.instagram.com/ana.store2/' className="rose" target='_blank'>Ana Store</a>.
                </p>
                <p className='public-sans grey'>Desenvolvido por <b className='rose'>Sinara Tibel</b></p>
            </footer>
        </>
    )
}
export default Footer