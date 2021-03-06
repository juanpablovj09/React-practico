import React from 'react';

import Header from './Header';
import Footer from './Footer';
import '../assets/styles/App.scss';

const Layout = ({ children }) => {
    return(
        <div className="app">
                {children}
            <Footer />
        </div>
    )
};

export default Layout;