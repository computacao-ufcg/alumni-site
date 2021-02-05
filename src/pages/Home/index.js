import React from 'react';
import Header from '../../components/Header';
import "./styles.css";
import HomeContainer from './HomeContainer';
import Footer from '../../components/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            <HomeContainer /> 
            <Footer />  
        </div>
    )
}