import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useParams } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Layouts = () => {
    const { name } = useParams();

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <div className='w-full min-h-screen bg-zinc-900 relative font-ins overflow-x-hidden'>
            <Navbar />
            <Outlet />
            {!name && <Footer />}
        </div>
    );
};

export default Layouts;
