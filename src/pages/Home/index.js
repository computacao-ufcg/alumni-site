import React from 'react';
import Header from '../../components/Header';
import "./styles.css";
import HomeContainer from './HomeContainer';

export default function Home() {
    return (
        <div id="page-home">
            <Header />
            <HomeContainer />   
        </div>
    )
}