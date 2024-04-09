import React from 'react';
import bgimage from '../../../../public/assests/banner.jpg';

const Banner = () => {
    return (
        <div className="bg-cover bg-center h-[70vh] " style={{ backgroundImage: `url(${bgimage.src})` }}>
            <div className='h-[70vh] w-screen flex items-center justify-center ' style={{ background: '#002e51', opacity: ".7", mixBlendMode: "unset" }}>
                <div className='text-white text-center'>
                    <h1 className='text-white text-6xl z-10 font-bold mb-5'>Welcome to the Haven</h1>
                    <p className='w-4/6 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cum corrupti mollitia autem placeat alias. Quasi sequi cum quis sapiente!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;