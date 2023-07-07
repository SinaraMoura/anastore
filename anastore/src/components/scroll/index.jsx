import { useState } from 'react';
import './styles.css';

function Scroll() {
    window.addEventListener('scroll', rolar);
    const [pageYPosition, setPageYPosition] = useState(0);

    function rolar() {
        setPageYPosition(window.scrollY);
    }

    return (
        <div className="top-to-btm">
            {pageYPosition > 0 &&
                <a href="#">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                        strokeLinejoin="round" className="icon-position icon-style" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="16 12 12 8 8 12"></polyline>
                        <line x1="12" y1="16" x2="12" y2="8"></line>
                    </svg>
                </a>
            }
        </div>
    )
}

export default Scroll