import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { dataClass } from '../API/Data';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';

const AboutDetail = () => {
    const { name } = useParams();

    // Find the class object in the data based on the name
    const cls = dataClass.find((item) => item.name === name);

    // Create a ref for the element you want to scroll to (e.g., a div or h2)
    const topElementRef = useRef(null);

    useEffect(() => {
        // Focus on the element when the component mounts, scrolling to it
        if (topElementRef.current) {
            topElementRef.current.focus();
        }
    }, []);

    return (
        <div className='px-5 lg:px-20 text-white h-auto mt-20 lg:mt-0'>
            {cls ? (
                <div className='w-full'>

                    {/* Element at the top of the component */}
                    <h2 ref={topElementRef} tabIndex={-1}></h2>

                    <div className='border-b border-zinc-600 py-5 lg:pl-52 md:px-20'>
                        <div>
                            <h2 className='text-5xl md:text-7xl font-semibold md:font-bold'>{cls.name}</h2>
                        </div>
                        <div className='flex items-center justify-between pt-10 md:pt-3'>
                            <h2>{cls.subTitle}</h2>
                            <div className='flex gap-3'>
                                <div className='p-2 border rounded-full cursor-pointer hover:border-zinc-600 hover:text-zinc-600 transition-all duration-300'><BsInstagram /></div>
                                <div className='p-2 border rounded-full cursor-pointer hover:border-zinc-600 hover:text-zinc-600 transition-all duration-300'><BsWhatsapp /></div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-10 flex md:flex-row flex-col-reverse lg:pl-52 gap-20'>
                        <div className='w-full text-justify md:text-left md:w-[35rem] px-2 md:px-0 pb-5 md:pb-0'>
                            {cls.introduction.map((paragraph, index) => (
                                <p key={index} className={`mb-4  tracking-tighter leading-relaxed ${index === 0 ? 'indent-5' : ''}`}>{paragraph}</p>
                            ))}
                        </div>
                        <div className='flex justify-center items-center md:w-1/2'>
                            <div className='flex items-center justify-center w-80 h-80 rounded-lg overflow-hidden'>
                                <img
                                    src={cls.img}
                                    className='w-full h-full object-cover grayscale'
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className='text-center pb-20 md:pt-20'>
                        <Link to={'/about'} className='py-1 px-4 border rounded-full hover:bg-zinc-600 transition-all duration-300'>Back</Link >
                    </div>
                </div>
            ) : (
                <p>Class not found</p>
            )}
        </div>
    );
};

export default AboutDetail;
