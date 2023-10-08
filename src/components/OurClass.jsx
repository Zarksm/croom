import React from 'react';
import { dataClass } from '../API/Data';
import CardClass from './CardClass';

const OurClass = () => {
    return (
        <div>
            <div className='h-auto border-b border-stone-700 py-10'>
                <h2 className='text-white text-2xl md:px-20'>Everyone in our class.</h2>
                <div className='py-20 flex flex-wrap gap-10 justify-center'>
                    {dataClass.map((item) => (
                        <CardClass key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurClass;
