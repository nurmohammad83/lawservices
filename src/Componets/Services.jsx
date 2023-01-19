import React from 'react';
import { services } from '../Conenst';

const Services = () => {
    return (
        <div>
<div className="text center pb-16">
          <p className="text-center text-2xl font-semibold text-green-500">Services</p>
        <h2 className="text-5xl font-semibold text-center">Our Services</h2>
          </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-center items-center md:grid-cols-3 gap-5'>
       {
        services.map((service,i)=>(
            <div className='flex border-2 border-gray-500 flex-col w-full  h-full  rounded-md  outline-y-[6px] -outline-offset-8 outline-red-600 justify-center items-center'>
                <div className='mt-3'>
                    <img src={service.img} className="w-[80px] h-[60px]" alt="" />
                </div>
                <div className='py-3 text-center text-2xl font-semibold'>
                    <span>{service.title}</span>
                </div>
                <div className='text-center px-2 mb-4'>
                    <p>{service.subTitle}</p>
                </div>
                <div className='my-5'>
                    <a className='p-2  hover:bg-green-500 bg-green-600 text-white font-semibold rounded-sm' href="/#">
                        Read More

                    </a>
                </div>
            </div>
        ))
       }
        </div>
        </div>
    );
};

export default Services;