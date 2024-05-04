import Container from '@/app/components/Shared/Container';
import React from 'react';
import { FaPhoneAlt, FaRegHeart } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { GiBathtub, GiHomeGarage, GiPoolDive } from 'react-icons/gi';
import { LiaBedSolid } from 'react-icons/lia';
import { MdLocationOn } from 'react-icons/md';
import { SlCalender, SlSizeFullscreen } from 'react-icons/sl';

const page = ({ params }: { params: {} }) => {

    return (
        <section className='py-10 bg-slate-50'>
            <Container>
                <div className='md:flex justify-between my-7'>
                    <div className=''>
                        <h1 className='text-3xl  text-gray-600'>  The Pro Controller Party</h1>
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
                        {/* Main Image  */}


                        <div className='flex bg-white p-2 gap-4'>
                            <img className='w-[60%] object-cover' src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className='flex flex-col h-full justify-between'>
                                <img className='h-full mb-2' src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <img className='h-full' src="https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                        </div>


                        {/* Overview Section */}
                        <div className='flex bg-white my-10 justify-between text-gray-700 px-4 py-3'>

                            <div className='text-gray-500'>
                                <p className='flex items-center gap-2 text-xl text-gray-600'><LiaBedSolid />
                                    <span className='text-base'>
                                        3
                                    </span>


                                </p>
                                <p>Bedrooms</p>
                            </div>

                            <div className='text-gray-500'>
                                <p className='flex items-center gap-2 text-xl text-gray-600'><GiBathtub />   <span className='text-base'>
                                    2
                                </span></p>
                                <p>Bathroom</p>
                            </div>

                            <div className='text-gray-500'>
                                <p className='flex items-center gap-2 text-xl text-gray-600'><GiHomeGarage />
                                    <span className='text-base'>
                                        1
                                    </span></p>
                                <p>Garage</p>
                            </div>
                            <div className='text-gray-500'>
                                <p className='flex items-center gap-2 text-xl text-gray-600'><GiPoolDive />
                                    <span className='text-base'>
                                        1</span></p>
                                <p>                                        Swiming Pool
                                </p>
                            </div>
                            <div className='text-gray-500'>
                                <p className='flex items-center gap-2 text-xl text-gray-600'><SlSizeFullscreen /> <span className='text-base'>
                                    300
                                </span></p>
                                <p>Sq Fit</p>
                            </div>
                            <div className='text-gray-500'>
                                <p className='flex items-center gap-2 text-xl text-gray-600'><SlCalender />
                                    <span className='text-base'>
                                        2023
                                    </span></p>
                                <p>Build In</p>
                            </div>

                        </div>



                        {/* Description */}
                        <div className=' bg-white my-10  px-4 py-3'>
                            <h1 className='text-3xl text-gray-700 mb-3'>Description</h1>
                            <hr />
                            <p className='text-justify text-sm py-3 text-gray-500'>
                                Discover urban luxury at its finest in this stylish downtown apartment, where modern design meets convenience. Nestled in the heart of the vibrant cityscape, this spacious one-bedroom retreat boasts an open-concept layout, sleek kitchen with stainless steel appliances, a luxurious bedroom with ample storage, and a pristine designer bathroom. Enjoy breathtaking city views from your private balcony or unwind on the rooftop deck, while amenities like a fitness center and 24/7 concierge elevate your living experience. With easy access to dining, shopping, and transportation, this pet-friendly community offers the perfect blend of comfort and sophistication for urban dwellers seeking the ultimate in city living. Schedule your tour today and make this urban oasis your new home.

                                <br />




                                With easy access to dining, shopping, and transportation, this pet-friendly community offers the perfect blend of comfort and sophistication for urban dwellers seeking the ultimate in city living. Schedule your tour today and make this urban oasis your new home.


                            </p>
                        </div>

                        {/* Location */}
                        <div className=' bg-white my-10  px-4 py-3'>
                            <h1 className='text-3xl text-gray-700 mb-3'>Location</h1>
                            <hr />

                            <div className='grid grid-cols-6 gap-3
                            gap-x-20  py-3'>
                                <div className='flex justify-between items-center col-span-3'>

                                    <p className='text-xs font-bold'>City  :</p>
                                    <p className='text-sm'>Dhaka,</p>


                                </div>
                                <div className='flex justify-between items-center col-span-3'>

                                    <p className='text-xs font-bold'>Country  :</p>
                                    <p className='text-sm'>Spain</p>


                                </div>
                                <div className='flex justify-between items-center col-span-3'>

                                    <p className='text-xs font-bold'>Post  :</p>
                                    <p className='text-sm'>3028,</p>


                                </div>
                                <div className='flex justify-between items-center col-span-3'>

                                    <p className='text-xs font-bold'>Road No  :</p>
                                    <p className='text-sm'>299 mention 2</p>


                                </div>

                            </div>

                        </div>


                    </div>

                    {/* The Agent */}
                    <div className='col-span-4 h-screen   sticky top-0'>
                        <div className=''>
                            <div className="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
                                <div className="container sm:w-full md:w-4/5  shadow-lg    transform   duration-200 easy-in-out">
                                    <div className=" overflow-hidden" >
                                        <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                                    </div>
                                    <div className="flex justify-center px-5  -mt-12">
                                        <img className="h-32 w-32 p-2 rounded-full   " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />

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