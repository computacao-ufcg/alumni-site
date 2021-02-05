import React from 'react';
import Header from '../../components/Header';
import HomeContainer from './HomeContainer';
import Footer from '../../components/Footer';

import "./styles.css";

export default function Home() {
    return (
        <div className="container">
            <Header />
            <HomeContainer /> 
            <Footer />  
        </div>
    )
}