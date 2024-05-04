import Container from '@/app/components/Shared/Container';
import React from 'react';
import { FaPhoneAlt, FaRegHeart } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { GiBathtub } from 'react-icons/gi';
import { LiaBedSolid } from 'react-icons/lia';
import { MdLocationOn } from 'react-icons/md';
import { SlSizeFullscreen } from 'react-icons/sl';

const page = ({ params }: { params: {} }) => {

    return (
        <section className='py-10 bg-slate-50'>
            <Container>
                <div className='md:flex justify-between my-7'>
                    <div className=''>
                        <h1 className='text-3xl font-bold text-gray-600'>  The Pro Controller Party</h1>
                        <p className='flex items-center gap-1 w-full text- text-gray-600 my-1'><MdLocationOn /> United Thas Dhaka
                        </p>

                    </div>
                    <div className='text-right'>
                        <div className='flex text-xl gap-3 mb-3'>

                            <a href="" className='px-2 border-x py-1 flex items-center gap-x-3'>
                                <FaRegHeart />

                            </a>
                            <a href="" className='border-x px-2 py-1 flex items-center gap-x-3 '>
                                <FaPhoneAlt />

                            </a>
                            <a href="" className='border-x px-2 py-1 flex items-center gap-x-3 '>
                                <FiShare2 />

                            </a>
                        </div>

                        <h1 className='text-3xl font-bold text-gray-700'>$ 40000</h1>
                    </div>
                </div>

                {/* img */}
                <div className='grid grid-cols-12 gap-4 relative'>
                    <div className='col-span-8'>
                        <div className='flex gap-4'>
                            <img className='w-[60%] object-cover' src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className='flex flex-col h-full justify-between'>
                                <img className='h-full mb-2' src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <img className='h-full' src="https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className='flex justify-between text-gray-700'>
                                <p className='flex justify-center items-center gap-1 border w-full'><LiaBedSolid /> 2 Bedroom</p>
                                <p className='flex justify-center items-center gap-1 border w-full'>
                                    <SlSizeFullscreen />
                                    200ft</p>
                                <p className='flex justify-center items-center gap-1 border w-full'><GiBathtub />5
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Agent */}
                    <div className='col-span-4 h-screen relative'>
                        <div className=' sticky top-0'>
                            <div className="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
                                <div className="container sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
                                    <div className=" h-32 overflow-hidden" >
                                        <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                                    </div>
                                    <div className="flex justify-center px-5  -mt-12">
                                        <img className="h-32 w-32 bg-white p-2 rounded-full   " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />

                                    </div>
                                    <div className=" ">
                                        <div className="text-center px-14">
                                            <h2 className="text-gray-800 text-3xl font-bold">Mohit Dhiman</h2>
                                            <a className="text-gray-400 mt-2 hover:text-blue-500" href="https://www.instagram.com/immohitdhiman/" target="BLANK()">@immohitdhiman</a>
                                            <p className="mt-2 text-gray-500 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                        </div>
                                        <hr className="mt-6" />
                                        <div className="flex  bg-gray-50 ">
                                            <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                                <p><span className="font-semibold">2.5 k </span> Followers</p>
                                            </div>
                                            <div className="border"></div>
                                            <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                                <p> <span className="font-semibold">2.0 k </span> Following</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></div>
                </div>

            </Container >
        </section>

    );
};

export default page;