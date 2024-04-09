import React from 'react';
import bgimage from '../../../../public/assests/banner.jpg';

const Banner = () => {
    return (
        <div className="bg-cover bg-center h-[70vh] " style={{ backgroundImage: `url(${bgimage.src})` }}>
            <div className='h-[70vh] w-screen flex items-center justify-center ' style={{ background: '#002e51', opacity: ".7", mixBlendMode: "unset" }}>
                <h1 className='text-white text-6xl z-10'>Welcome to the Haven</h1>
            </div>
        </div>
    );
};

export default Banner;
