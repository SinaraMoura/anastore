import $ from 'jquery'
import './styles.css'
function Scroll() {

    // function boxTop(idBox) {
    //     // retorna os valores dentro do
    //     // elemento que está selecionado em $(idBox)
    //     //no caso o topo .top
    //     var boxOffset = $(idBox).offset().top;
    //     return boxOffset;
    // }

    // //$(document).ready(function())
    // $(function () {
    //     // $target define qual elemento vamos animar
    //     // todos que estiverem com a classe '.top-to-btm'
    //     let $target = $('.top-to-btm'),
    //         removeClass = 'none',
    //         windowHeight = $(window).height(),
    //         offset = windowHeight - (windowHeight / 4);

    //     function scrollAnime() {
    //         //documentTop vai pegar a distância do total do scroll e o topo da página
    //         let documentTop = $(document).scrollTop();

    //         $target.each(function () {
    //             if (documentTop < boxTop(this) - offset) {
    //                 $(this).removeClass(removeClass);
    //             } else {
    //                 $(this).addClass(removeClass);
    //             }
    //         });
    //     }
    //     scrollAnime();
    // })


    return (
        <div className="top-to-btm">
            <a href="#">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                    strokeLinejoin="round" className="icon-position icon-style" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="16 12 12 8 8 12"></polyline>
                    <line x1="12" y1="16" x2="12" y2="8"></line>
                </svg>
            </a>

        </div>
    )
}

export default Scroll