import React from 'react';
import Container from './Container';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { BsYoutube } from 'react-icons/bs';
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
import logo from '../../../../public/assests/haven.png'


const Navbar = () => {
    return (
        <div className='bg-[#00396B]'>
            <Container>
                <div className='flex justify-between text-[#fafafaf4]'>
                    <div className='flex gap-x-4'>
                        <a href="" className=' border-x-[1px] px-2 py-1'> <FaFacebookF />
                        </a>
                        <a href="" className=' border-x-[1px] px-2 py-1'> <FaLinkedinIn />
                        </a>
                        <a href="" className=' border-x-[1px] px-2 py-1'> <FaInstagram />

                        </a>
                        <a href="" className=' border-x-[1px] px-2 py-1'> <FaPinterestP />
                        </a>
                        <a href="" className=' border-x-[1px] px-2 py-1'> <BsYoutube />
                        </a>
                        <a href="" className=' border-x-[1px] px-2 py-1'> <FaXTwitter />
                        </a>
                    </div>
                    <div className="text-sm flex gap-x-2">
                        <p className='border-x-[0.3px] px-2 py-1'>fahimasdf07@gmail.com</p>
                        <p className='border-x-[1px] px-2 py-1'>-19482300</p>
                        <p className='border-x-[1px] px-2 py-1'>saved</p>
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