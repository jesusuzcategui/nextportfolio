import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

import Header from '../components/Header';

const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);
    return (
        <>  <Header />
            <h1>404</h1>
        </>
    );
};

export default MyApp;