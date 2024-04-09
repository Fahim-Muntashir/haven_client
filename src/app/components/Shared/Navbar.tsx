'use client'
import React, { useState } from 'react';
import Container from './Container';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaPinterestP, FaRegHeart } from "react-icons/fa";
import { BsYoutube } from 'react-icons/bs';
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
import logo from '../../../../public/assests/haven.png'
import { MdOutlineEmail } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';



const Navbar = () => {

    const socialLink = [
        {
            link: "facebook.com",
            icon: <FaFacebookF />
        }, {
            link: "linkedin.com",
            icon: <FaLinkedinIn />,

        }, {
            link: "linkedin.com",
            icon: <FaXTwitter />,

        }, {

            link: " FaInstagram",
            icon: <FaInstagram></FaInstagram>
        },

        {
            link: "linkedin.com",
            icon: <FaLinkedinIn />,

        }, {
            link: "linkedin.com",
            icon: <BsYoutube />
        }, {
            link: "linkedin.com",
            icon: <FaPinterestP />
        }
    ]

    const contactNav = [
        {
            name: "fahimasdf07@gmail.com",
            icon: <MdOutlineEmail />

        },
        {
            name: "+44 7123 4567",
            icon: <FaPhoneAlt />

        }, {
            name: "Saved Item",
            icon: <FaRegHeart />


        }
    ]


    const [open, setOpen] = useState(false);

    return (
        <div className=''>
            <div className='bg-[#003461]'>

                <Container>
                    <div className=' justify-between text-[#fafafaf4] hidden  lg:flex'>
                        <div className='flex gap-x-4'>
                            {
                                socialLink.map((item) => (
                                    <a href="" className=' border-x-[1px] px-2 py-1 border-gray-600'> {
                                        item.icon
                                    }
                                    </a>
                                ))
                            }

                        </div>
                        <div className="text-sm flex gap-x-2">
                            {
                                contactNav.map((item) => (

                                    <a href="" className=' border-x-[1px] px-2 py-1 border-gray-600 flex items-center gap-x-3 text-sm'> <span className='text-lg'>
                                        {
                                            item.icon
                                        }
                                    </span> <span> {
                                        item.name
                                    }</span>
                                    </a>



                                ))
                            }
                        </div>

                    </div>
                </Container>
            </div>
            {/* Main Nav */}
            <div className='bg-[#00396B] text-white'>


                <Container>
                    <div className='flex justify-between items-center py-2'>
                        <Image src={logo} width={100} height={400} alt='haven'></Image>
                        <div className={`items-center justify-between hidden w-full  md:flex md:w-auto sticky `} id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                                <li>
                                    <a href="#" className="block py-2 px-3 " aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 ">About</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 ">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className='bg-[rgb(0,174,255)] px-6 py-1 font-bold'>Login</button>
                            <button onClick={() => setOpen(true)} className={`${open ? "hidden" : ""} md:hidden px-3`} > <GiHamburgerMenu />
                            </button>
                            <button onClick={() => setOpen(false)} className={`${open ? "" : "hidden"} md:hidden px-3`}><IoMdClose />
                            </button>

                        </div>
                    </div>


                </Container >



            </div >
            <div className={`${open ? 'w-[80%] ms-0 transition-all  delay-150' : ''} bg-[#003461] px-3 py-10  text-white -ms-[500px] fixed h-screen flex flex-col justify-between`}>

                <ul className="flex flex-col">
                    <li>
                        <a href="#" className="block py-2 px-3 border-b my-1 border-b-gray-600" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 border-b my-1 border-b-gray-600" >About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 border-b my-1 border-b-gray-600" >Services</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 border-b my-1 border-b-gray-600"  >Contact</a>
                    </li>
                </ul>


                <div className='flex justify-evenly mt-auto mb-10'> {
                    socialLink.map((item) => (
                        <a href="" className=' border-x-[1px] px-2 py-1 border-gray-600'> {
                            item.icon
                        }
                        </a>
                    ))
                }
                </div>

            </div >

        </div >
    );
};

export default Navbar;