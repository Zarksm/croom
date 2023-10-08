import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    // State for menu open/close
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to close the menu
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className='px-5 md:px-20 fixed w-full md:relative bg-zinc-900 z-20'>
            <div className='py-4 md:py-7 flex justify-between font-ins text-white border-b border-stone-700'>
                <div className='flex gap-5 md:gap-10 items-center'>
                    <div>
                        <h1 className='font-black text-3xl'>TI3</h1>
                    </div>
                    <div className='md:flex gap-5 md:gap-10 justify-end hidden'>
                        <Link
                            to="/"
                            className="hover:text-zinc-600 duration-300"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="hover:text-zinc-600 duration-300"
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                    </div>
                </div>
                <div className='flex items-center md:hidden'>
                    <h2
                        className={`py-2 px-3 border bottom-1 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ${menuOpen ? 'bg-white text-black' : ''}`}
                        onClick={toggleMenu}
                    >
                        Menu
                    </h2>
                </div>
            </div>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className='md:hidden absolute w-full h-auto pb-10 text-white bg-zinc-900 left-0 z-20 overflow-hidden shadow-xl'
                    >
                        <div className='px-5 flex flex-col justify-between h-full'>
                            <div className='pt-7'>
                                <motion.div
                                    initial={{ opacity: 0, y: '100%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <Link to='/' className='linkM' onClick={() => setMenuOpen(false)}>
                                        Home
                                    </Link>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: '100%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                >
                                    <Link to='/about' className='linkM' onClick={() => setMenuOpen(false)}>
                                        About
                                    </Link>
                                </motion.div>
                            </div>
                            <div className='flex justify-between px-2 mt-16 items-center border-t border-b py-4 border-stone-600'>
                                <motion.div
                                    initial={{ opacity: 0, y: '100%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.5 }}
                                >
                                    <h2 className='uppercase'>teknik informatika iii</h2>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: '100%' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.7 }}
                                >
                                    <div className='p-2 border rounded-full'>
                                        <a href=''><FaInstagram /></a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
