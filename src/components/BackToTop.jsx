import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

function BackToTop() {
    const [showButton, setShowButton] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > lastScrollTop && !showButton) {
                setShowButton(true);
            } else if (scrollTop < lastScrollTop && showButton) {
                setShowButton(false);
            }
            setLastScrollTop(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showButton, lastScrollTop]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`fixed bottom-4 right-4 bg-white text-zinc-950 border border-transparent hover:border-1 hover:border-white hover:text-white hover:bg-transparent w-12 h-12 flex items-center justify-center rounded-full shadow-xl z-50 transition-all duration-500 transform ${showButton ? 'translate-y-0' : 'transform translate-y-20 pointer-events-none'
                }`}
            onClick={scrollToTop}
        >
            <IoIosArrowUp size={24} />
        </button>

    );
}

export default BackToTop;
