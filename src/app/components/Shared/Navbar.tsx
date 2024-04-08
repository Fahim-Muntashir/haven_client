import React from 'react';
import Container from './Container';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaPinterestP, FaRegHeart } from "react-icons/fa";
import { BsYoutube } from 'react-icons/bs';
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
import logo from '../../../../public/assests/haven.png'
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';



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

    return (
        <div className='bg-[#00396B] '>
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

            {/* Main Nav */}
            <div className='bg-[#003461] text-white'>


                <Container>

                    <div className='flex justify-between items-center'>

                        <Image src={logo} width={100} height={400} alt='haven'></Image>
                        <div>a</div>
                        <div>
                            Login
                        </div>
                    </div>
                </Container >
            </div>


        </div>
    );
};

export default Navbar;