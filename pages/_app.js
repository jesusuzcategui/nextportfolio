import 'bootstrap/dist/css/bootstrap.css';
import '../css/Skills.css';
import { useEffect } from 'react';

import Header from '../components/Header';

const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);
    return (
        <>  <Header />
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;