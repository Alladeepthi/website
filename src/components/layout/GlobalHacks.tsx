import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const GlobalHacks = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top on every route change
        window.scrollTo(0, 0);

        // Ensure the body has the 'loaded' class even if subcomponents clobber it
        const timer = setTimeout(() => {
            document.body.classList.add('loaded');
        }, 100);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
};
