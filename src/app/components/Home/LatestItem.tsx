import React from 'react';

const latestPropertiesData = [
    {
        name: 'The Best Building new WORK'
    },
    {

    },
    {

    },
]

const LatestItem = () => {
    return (
        <div className='my-20 w-4/5 mx-auto'>
            <div className='text-center'>
                <h1 className='text-3xl font-semibold'>Latest Properties</h1>
                <p>Unveiling the Newest Additions to Our Property Portfolio - Your Gateway to the Latest Listings!</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-x-14'>
                {
                    latestPropertiesData.map((property, index) => (
                        <div key={index} className='rounded shadow-lg relative'>
                            <div className='absolute top-5 left-0 z-10'><p className='bg-green-400 w-32'>Featured</p></div>
                            <img className='rounded' src="https://images.unsplash.com/photo-1551524164-687a55dd1126?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className='relative z-0 p-3'>
                                <h1 className='text-2xl font-semibold text-gray-600'>The pro Heven</h1>
                                <h3>$ 49999</h3>
                                <p>The Pro Haven is the most Featured Item In the Work</p>
                                <div>
                                    Bed 2, SqureFit 1999
                                </div>
                                <hr />
                                <div className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <img className='w-12 h-12 object-cover rounded-full' src="https://img.freepik.com/free-photo/man-isolated-showing-emotions-end-gestures_1303-30095.jpg?w=740&t=st=1714304574~exp=1714305174~hmac=3597e8b47ddfdf4183872dd5886969e7dc5ebe6bd6ebdc1570243fba323f2e9d" alt="" />
                                        <h1 className='text-lg font-semibold ms-2'>Nicolas Poran</h1>
                                    </div>
                                    <div>
                                        View And Save
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default LatestItem;