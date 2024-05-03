import React from 'react';

const About = () => {
    return (
        <div className='my-32 w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-14'>
            <img className='w-full rounded' src="https://img.freepik.com/free-photo/medium-shot-couple-talking-real-estate-agent_23-2150322073.jpg?w=1060&t=st=1714746133~exp=1714746733~hmac=6c8fdf2d3944ffe718d4df886d043cda56163d3bf27d749953219cb12c5253c3" alt="" />
            <div className='md:my-4'>

                <h1 className='mt-5 mb-1 text-gray-500 font-semibold text-sm'>Who We Are!</h1>
                <h1 className='text-4xl font-semibold text-gray-800'>We Helps People to Buy and Sell Therer Property since 1033</h1>
                <p className='text-sm my-4 text-justify text-gray-500'>Choose a Prebuilt Design and Start Creating Your Website
                    Themeforest Version
                    Professionally designed prebuilt real estate websites exclusively for the awesome Elementor Page Builder, all easily imported with our Theme Setup Wizard.and the potensial consumer get from google and the one of the biggest marketplace amazon
                    Professionally designed prebuilt real estate websites exclusively for the awesome Elementor Page Builder, all easily imported with our Theme Setup Wizard.</p>
                <button className='bg-[rgb(0,174,255)] text-white rounded px-6 py-2 font-bold'>See More --</button>
            </div>
        </div >
    );
};

export default About;