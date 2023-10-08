import React from 'react';
import Marquee from 'react-fast-marquee';

const Marq = () => {

    return (
        <div className='py-5 md-py-10 border-t border-b'>
            <Marquee speed={100} gradient={true} gradientWidth={200} gradientColor='rgb(24, 24, 27)' autoFill={true}>
                <h2 className='text-9xl text-white overflow-hidden font-black uppercase'>
                    LEARN&nbsp;&nbsp;&nbsp;LIVE&nbsp;&nbsp;&nbsp;HOPE&nbsp;&nbsp;&nbsp;
                </h2>
            </Marquee>
        </div>
    );
};

export default Marq;
