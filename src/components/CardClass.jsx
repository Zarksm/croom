import React from 'react';
import { Link } from 'react-router-dom';

const CardClass = ({ item }) => {
    return (
        <div key={item.id}>
            {/* card */}
            <div className='w-80 h-auto bg-card p-5 rounded-xl' data-aos="fade-up" data-aos-delay={item.delay}>
                <div className='text-zinc-300 uppercase text-xs'>{item.subTitle}</div>
                <div className='text-white uppercase py-2'>{item.name}</div>

                {/* Image */}
                <div className='py-10 flex justify-center'>
                    <div className='w-52 h-52 rounded-lg overflow-hidden'>
                        <img
                            src={item.img}
                            className='w-full h-full object-cover'
                            alt=""
                        />
                    </div>
                </div>

                <div className='flex justify-between text-white uppercase'>
                    <h2 className='text-xs flex items-center justify-center'>{item.role}</h2>
                    <Link to={`${item.name}`} className='flex items-center justify-center gap-1 cursor-pointer group'>
                        <p>More</p>
                        <span className='w-2 h-2 bg-white rounded-full inline-block group-hover:w-3 group-hover:h-3 duration-300 transition-all'></span>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default CardClass;
