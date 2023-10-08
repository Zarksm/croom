import React from "react"

const AboutUs = () => {


    return (
        <div>
            <div className='w-full h-full lg:h-screen border-b mt-20 lg:mt-0 md:px-20  border-stone-700 flex flex-col justify-between'>
                <h2 className='text-white text-5xl font-black py-5 mt-10'>About US</h2>
                <div className='lg:w-2/3 flex flex-col md:flex-row gap-10 md:gap-20 pb-28 py-32'>
                    <p className='text-white flex-2' data-aos="fade-up">
                        As proud members of IT3 from the Information Technology Department at STMIK University since 2023, our journey started with a grand vision: to transform the way businesses engage with their audiences. We're firm believers that every brand holds a one-of-a-kind story.
                    </p>
                    <p className='text-white' data-aos="fade-up">
                        What makes us stand out is our strong dedication to innovation. We love adopting the newest trends, technologies, and techniques to help our clients stay ahead in the constantly changing digital world. Whether it's creating stylish and user-friendly interfaces or crafting smooth e-commerce platforms, we use our expertise to turn ideas into reality.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
