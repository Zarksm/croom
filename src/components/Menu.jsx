import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
const Menu = ({ menuOpen, closeMenu }) => {
    return (
        <AnimatePresence>
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '-100%' }}
                    className='md:hidden absolute w-full h-96 text-white bg-zinc-900 left-0 z-20 overflow-hidden shadow-xl'
                >
                    <div className='px-5 py-5 flex flex-col justify-between h-full'>
                        <motion.div
                            initial={{ opacity: 0, y: '100%' }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            exit={{ opacity: 0, y: '100%' }} // Exit animation for the "Home" link
                        >
                            <Link to='/' className='linkM' onClick={closeMenu}>
                                Home
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: '100%' }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            exit={{ opacity: 0, y: '100%' }} // Exit animation for the "About" link
                        >
                            <Link to='/about' className='linkM' onClick={closeMenu}>
                                About
                            </Link>
                        </motion.div>
                        <div className='flex justify-between px-2 items-center border-t border-b py-4 border-stone-600'>
                            <motion.div
                                initial={{ opacity: 0, y: '100%' }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5 }}
                                exit={{ opacity: 0, y: '100%' }} // Exit animation for "teknik informatika iii"
                            >
                                <h2 className='uppercase'>teknik informatika iii</h2>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: '100%' }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.7 }}
                                exit={{ opacity: 0, y: '100%' }} // Exit animation for the Instagram icon
                            >
                                <div className='p-2 border rounded-full'>
                                    <a href=''>
                                        <FaInstagram />
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Menu;
