import React from 'react'

const Hero = () => {

    return (
        <div className='text-white flex flex-col gap-4 z-30 mt-20 lg:mt-0 border-b border-stone-700 px-5 md:px-20'>

            <div className='w-full py-10 md:py-0'>
                <img src="./assets/heros.svg" alt="" className='bg-cover' />
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-44 items-end mt-[10rem] md:mt-[27rem] pb-10">
                <div className="flex-3  tracking-tighter" data-aos="fade-right">
                    <p className="text-xl md:text-[3rem] uppercase leading-relaxed md:leading-none">
                        BEGIN YOUR JOURNEY WITH <span className="text-amber-600">US</span> AND MAKE YOUR MARK ON THE WORLD. GET INSPIRED TO CREATE AND INNOVATE TODAY
                    </p>
                </div>
                <div className="flex-2 justify-end" data-aos="fade-left">
                    <p className='text-xs md:text-base'>
                        From revolutionary designs to state-of-the-art technology, TI3 brings together the most innovative and daring ideas from a wide range of industries. Explore how passion and creativity have influenced exceptional projects.
                    </p>
                </div>
            </div>

        </div >
    )
}

export default Hero
