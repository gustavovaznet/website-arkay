//HOME PAGE

//IMPORTING
import React from 'react';
import About from '../../components/About';
import Blog from '../../components/Blog';
import CallToActionOne from '../../components/CallToActionOne';
import CallToActionTwo from '../../components/CallToActionTwo';
import FunFact from '../../components/FunFact';
import MoveTop from '../../components/MoveTop';
import Portfolio from '../../components/Portfolio';
import Service from '../../components/Service';
import Skill from '../../components/Skill';
import Strategy from '../../components/Strategy';
import BannerOne from '../../components/BannerOne';

//HOME
const Home = () => {
    return (
        <>
            <BannerOne /> 
            <About />
            <Service />    
            <CallToActionOne />
            <Skill />
            <Strategy />
            <FunFact />
            <Portfolio />
            <CallToActionTwo /> 
            <Blog />  
            <MoveTop />
        </>
    );
};

export default Home;
