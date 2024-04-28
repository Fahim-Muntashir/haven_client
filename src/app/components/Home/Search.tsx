import React from 'react';

const Search = () => {
    return (
        <div className='w-4/5 -mt-10 py-2 bg-white rounded mx-auto shadow-2xl'>

            <form action="" className='p-4 md:flex justify-between md:mx-4 lg:mx-10'>
                <input className='border-b  focus:border-blue-400 transition p-3 lg:mb-0 mb-5 sm:w-full md:w-[30%]' type="text" placeholder='Search' />


                <div className="grid md:flex gap-3">
                    <div>
                        <p className='text-xs text-gray-600 font-semibold mb-1 '>TYPE</p>
                        <select id="countries" className="border font-medium	border-gray-300 text-[#9fa2a2] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  cursor-pointer">
                            <option className='my-3 border-2' selected>All Country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>  <div>
                        <p className='text-xs text-gray-600 font-semibold mb-1 '>STATUS</p>
                        <select id="countries" className="border font-medium	border-gray-300 text-[#9fa2a2] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  cursor-pointer">
                            <option className='my-3 border-2' selected>All Country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <p className='text-xs text-gray-600 font-semibold mb-1 '>LOCATION</p>
                        <select id="countries" className="border font-medium	border-gray-300 text-[#9fa2a2] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  cursor-pointer">
                            <option className='my-3 border-2' selected>All Country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <p className='text-xs text-gray-600 font-semibold mb-1 '>BUDJET</p>
                        <select id="countries" className="border font-medium	border-gray-300 text-[#9fa2a2] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  cursor-pointer">
                            <option className='my-3 border-2' selected>MAX Price</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className='flex items-end '>
                        <button className='bg-[rgb(0,174,255)] text-white rounded px-6 py-2 font-bold'>Search</button>
                    </div>
                </div>

            </form >
        </div >
    );
};

export default Search;