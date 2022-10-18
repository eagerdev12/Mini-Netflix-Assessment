import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './index.scss';

const Container = (props) => {
    return (
        <div className='layout'>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Container;