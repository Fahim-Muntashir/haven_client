
'use client'
import Search from "@/app/components/Home/Search";
import Link from "next/link";
import { GiBathtub } from "react-icons/gi";
import { LiaBedSolid } from "react-icons/lia";
import { LuHeart } from "react-icons/lu";
import { MdLocationOn } from "react-icons/md";
import { SlSizeFullscreen } from "react-icons/sl";

const page = () => {
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

    return (
        <div className="">
            <div className="text-black display-2 text-center relative">
                <h1 className="mt-7"><span className='text-4xl'>The Haven House </span></h1>
                <div className="flex justify-center mx-auto mt-2 mb-3">
                    <span className="inline-block w-40 h-1 bg-blue-400 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-400 rounded-full"></span>
                </div>
                <h1 className='text-4xl font-semibold text-gray-800 lg:w-3/6 mx-auto'>Your Premier Real Estate Agency for Buying or Selling Your Dream Property.</h1>
                <div className='flex gap-4 items-center justify-center mt-4'>
                    <button className='bg-[rgb(0,174,255)] text-white rounded px-6 py-2 font-bold'>Sell Property</button>   <button className='border-[rgb(21,144,197)] border-2 hover:bg-blue-400 transition-all text-black rounded px-6 py-2 font-bold'>Buy Property</button>
                </div>

            </div>
            <br />
            <br />
            <br />
            <Search></Search>
            <div className='grid w-4/5 mx-auto md:grid-cols-2 lg:grid-cols-4 justify-between gap-x-5 gap-y-10 my-10'>
                {/* Properties Container */}
                {
                    latestPropertiesData.map((property, index) => (

                        <div className='rounded shadow-sm relative ' key={index}>

                            <div className='relative'>
                                <div className='absolute top-2 left-0 z-10'><p className='bg-green-400 w-20 text-white text-sm font-sm  text-center rounded-r-sm'>Featured</p></div>
                                <div className='absolute top-2 right-0 z-10'><p className='bg-gray-600 rounded-l-sm w-20 text-white text-sm font-sm  text-center'>For Sale</p></div>

                                <h3 className='absolute bottom-0 z-10 text-white  text-xl font-semibold m-3'>$ 40999</h3>

                                <button
                                    onClick={() => console.log("o;pve")}
                                    className='absolute bottom-0 right-0 z-10 text-white  text-xl font-semibold m-3 hover:text-red-500 z-10'><LuHeart />

                                </button>
                                <img className='rounded w-full h-60' src="https://images.unsplash.com/photo-1551524164-687a55dd1126?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                            </div>

                            <Link href="properties/23">
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
                                </div></Link>
                        </div>
                    ))
                }
            </div>
            <div>
                <div className="flex items-center justify-center gap-4 my-4">
                    <button disabled
                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            aria-hidden="true" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                        </svg>
                        Previous
                    </button>
                    <div className="flex items-center gap-2">
                        <button
                            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                1
                            </span>
                        </button>
                        <button
                            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                2
                            </span>
                        </button>
                        <button
                            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                3
                            </span>
                        </button>
                        <button
                            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                4
                            </span>
                        </button>
                        <button
                            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                5
                            </span>
                        </button>
                    </div>
                    <button
                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            aria-hidden="true" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default page;