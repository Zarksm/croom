import React from "react"
const Footer = () => {


    return (
        <div className='w-full flex flex-col justify-between overflow-hidden pt-10 md:pt-10 px-5 lg:px-20 h-auto  md:h-screen'>
            <p className='text-white md:px-10' data-aos="fade-down" >🍻 BASED IN INDONESIA</p>
            <div className='flex flex-col gap-10 text-white w-full md:w-1/2 py-16 md:py-0 md:px-10'>
                <h2 className='text-3xl md:text-6xl' data-aos="fade-right">Let's Create Memorable
                    Experiences Together.</h2>
                <p className='text-lg md:text-4xl cursor-pointer hover:text-zinc-600 duration-500 transition-all pb-20' data-aos="fade-right">ti3dnbs.gmail.com</p>
            </div>
            <h2 className='text-2xl md:text-[3.5rem] lg:text-[7.5rem] text-white font-ins font-black w-full text-center -mb-4 md:-mb-0'>TEKNIK INFORMATIKA III</h2>
        </div>
    )
}

export default Footer
