import React from 'react';
import { GiBathtub } from 'react-icons/gi';
import { LiaBedSolid } from 'react-icons/lia';
import { LuHeart } from 'react-icons/lu';
import { MdLocationOn } from 'react-icons/md';
import { SlSizeFullscreen } from 'react-icons/sl';

const latestPropertiesData = [
    {
        name: 'The Best Building new WORK'
    },
    {

    },
    {

    },
    {

    },

]

const LatestItem = () => {
    return (
        <div className='my-20 w-4/5 mx-auto'>

            <div className='text-center'>
                <h1 className='text-4xl  text-gray-900'>Latest Properties</h1>

                <p className='my-1 text-sm text-gray-700'>Unveiling the Newest Additions to Our Property Portfolio - <br /> Your Gateway to the Latest Listings!</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 justify-between gap-x-5 gap-y-10 my-10'>
                {
                    latestPropertiesData.map((property, index) => (
                        <div key={index} className='rounded shadow-sm relative'>

                            <div className='relative'>
                                <div className='absolute top-2 left-0 z-10'><p className='bg-green-400 w-20 text-white text-sm font-sm  text-center rounded-r-sm'>Featured</p></div>
                                <div className='absolute top-2 right-0 z-10'><p className='bg-gray-600 rounded-l-sm w-20 text-white text-sm font-sm  text-center'>For Sale</p></div>

                                <h3 className='absolute bottom-0 z-10 text-white  text-xl font-semibold m-3'>$ 40999</h3>

                                <h3 className='absolute bottom-0 right-0 z-10 text-white  text-xl font-semibold m-3'><LuHeart />

                                </h3>
                                <img className='rounded w-full h-60' src="https://images.unsplash.com/photo-1551524164-687a55dd1126?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                            </div>


                            <div className='relative z-0'>

                                <div className='p-2'>
                                    <h1 className='text-xl font-lg text-[#4d4d4d]'> Heven House</h1>
                                    <p className='flex items-center gap-1 w-full text-xs text-gray-400 my-1'><MdLocationOn /> United Thas Dhaka
                                    </p>
                                    <p className='text-xs text-gray-500'>Situated in the highly sought-after neighborhood surrounding Lincoln Center, AIRE offers breathtaking vistas of the city skyline......

                                    </p>
                                </div>


                                <div className='flex justify-between text-gray-700'>
                                    <p className='flex justify-center items-center gap-1 border w-full'><LiaBedSolid /> 2</p>
                                    <p className='flex justify-center items-center gap-1 border w-full'>
                                        <SlSizeFullscreen />
                                        200ft</p>
                                    <p className='flex justify-center items-center gap-1 border w-full'><GiBathtub />5
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default LatestItem;