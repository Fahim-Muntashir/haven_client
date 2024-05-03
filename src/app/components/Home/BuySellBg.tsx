import React from 'react';

const BuySellBg = () => {
    return (
        <div>

            <section className="pt-40 pb-32 relative">
                <div className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity- bg-fixed" style={{ backgroundImage: 'url(https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/71fe09e2-9320-4f61-8eca-067243e2ef68.jpeg)' }}></div>
                <div className="text-white display-2 text-center relative">
                    <h1><span className='text-4xl'>The Haven House </span></h1>
                    <div class="flex justify-center mx-auto mt-2 mb-3">
                        <span class="inline-block w-40 h-1 bg-blue-400 rounded-full"></span>
                        <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                        <span class="inline-block w-1 h-1 bg-blue-400 rounded-full"></span>
                    </div>
                    <h1 className='text-4xl font-semibold text-gray-100 lg:w-3/6 mx-auto'>Your Premier Real Estate Agency for Buying or Selling Your Dream Property.</h1>
                    <div className='flex gap-4 items-center justify-center mt-4'>
                        <button className='bg-[rgb(0,174,255)] text-white rounded px-6 py-2 font-bold'>Sell Property</button>   <button className='border-[rgb(21,144,197)] border-2 hover:bg-blue-400 transition-all text-white rounded px-6 py-2 font-bold'>Buy Property</button>
                    </div>

                </div>
            </section >



        </div >
    );
};

export default BuySellBg;