import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Marq from '../components/Marq';
import BackToTop from '../components/BackToTop';

function Home() {

    return (
        <div>
            <Hero />
            <Services />
            <Marq />
            <BackToTop />
        </div>
    );
}

export default Home;
