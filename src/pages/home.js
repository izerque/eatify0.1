import React from 'react';
import Card from '../components/Card.jsx';
import Category from '../components/Category.jsx';
import Food from  '../components/Food.jsx';
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';

const Home = () => {
    return (
        <>
        <Navbar />
        <Hero />
        <Card />
        <Food />
        <Category />
        </>
    );
}

export default Home;
