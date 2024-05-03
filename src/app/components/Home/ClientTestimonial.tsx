'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const ClientTestimonialData = [
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

const ClientTestimonial = () => {

    return (
        <div className="my-20 w-4/5 mx-auto">
            <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                What clients saying
            </h1>

            <div class="flex justify-center mx-auto mt-6">
                <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    ClientTestimonialData.map((property, index) => (
                        <SwiperSlide>
                            <div className=' my-10'>
                                <p class="flex items-center text-center text-gray-500 lg:mx-8">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem officiis
                                    eos illo! Pariatur, totam alias. Beatae accusamus earum quos obcaecati minima molestias. Possimus
                                    minima dolores itaque! Esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates
                                    fugiat corrupti
                                </p>

                                <div class="flex flex-col items-center justify-center mt-8">
                                    <img class="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                    <div class="mt-4 text-center">
                                        <h1 class="font-semibold text-gray-800 dark:text-white">Mia Brown</h1>
                                        <span class="text-sm text-gray-500 dark:text-gray-400">Marketer</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>))
                }


            </Swiper>        </div >
    );
};

export default ClientTestimonial;