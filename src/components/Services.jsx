import React from 'react'
import { dataList } from '../API/Data'


const Services = () => {


    return (
        <div className='flex flex-col md:flex-row gap-5 pt-20 py-32 px-5 md:px-20'>
            <div className='w-72'>
                <p className='text-white font-ins capitalize' data-aos='fade-right'>We Also offered our services.</p>
            </div>
            <div className='w-full md:w-2/3 h-full flex flex-col'>
                {dataList.map((data) => (
                    <div className='text-zinc-600 hover:text-white duration-700 transition-colors cursor-pointer' data-aos='fade-up' key={data.id}>
                        <div className='flex justify-center py-10'>
                            <p className='text-4xl md:text-7xl font-ser '>{data.title}</p>
                        </div>
                        <div className='flex justify-between gap-5'>
                            <p className='flex-1 uppercase md:py-10'>{data.subTitle}</p>
                            <p className='flex-2 md:py-10 text-xs md:text-base items-center justify-center'>
                                {data.tes.map((item, i) => (
                                    <span key={i} className='mr-3'>{item}</span>
                                ))}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div >
    )
}

export default Services
