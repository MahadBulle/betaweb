import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Features() {
    return (
        <>

            <div id="feature" className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-kalar-1">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h2 className="text-4xl font-bold text-kalar-1 mb-3">Feature <span className="text-kalar-2">Houses we have</span></h2>
                            <p className="text-lg text-kalar-2 mb-8">
                                Here are some of our featured houses:
                            </p>
                        </div>
                        <div className=''>
                        <Link to='/HousesList'> 
                            <button className="  px-6 py-3 bg-kalar-2 text-white rounded-full shadow-lg hover:bg-kalar-1 ">
                                Click to see more
                            </button>
                            </Link>
                        </div>
                    </div>
                    {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <div className="bg-white rounded-lg shadow-lg">
                                <img src="https://images.pexels.com/photos/13693491/pexels-photo-13693491.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
                                <div className="py-6 px-4">
                                    <h3 className="text-lg font-medium text-gray-900">Guri Villo ah</h3>
                                    <p className="text-sm text-gray-500">3 qol  | 2 musqul | 1 jiko</p>
                                    <p className="text-lg font-bold text-gray-700 mt-4">$500</p>
                                    <button className="mt-6 px-4 py-2 bg-kalar-2 text-white rounded-md hover:bg-kalar-2">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <div className="bg-white rounded-lg shadow-lg">
                                <img src="https://images.pexels.com/photos/13693491/pexels-photo-13693491.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
                                <div className="py-6 px-4">
                                <h3 className="text-lg font-medium text-gray-900">Guri Villo ah</h3>
                                    <p className="text-sm text-gray-500">3 qol  | 2 musqul | 1 jiko</p>
                                    <p className="text-lg font-bold text-gray-700 mt-4">$500</p>
                                    <button className="mt-6 px-4 py-2 bg-kalar-2 text-white rounded-md hover:bg-kalar-2">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <div className="bg-white rounded-lg shadow-lg">
                                <img src="https://images.pexels.com/photos/13693491/pexels-photo-13693491.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
                                <div className="py-6 px-4">
                                <h3 className="text-lg font-medium text-gray-900">Guri Villo ah</h3>
                                    <p className="text-sm text-gray-500">3 qol  | 2 musqul | 1 jiko</p>
                                    <p className="text-lg font-bold text-gray-700 mt-4">$500</p>
                                    <button className="mt-6 px-4 py-2 bg-kalar-2 text-white rounded-md hover:bg-kalar-2">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </SwiperSlide>
                    <SwiperSlide> */}
                    <br></br>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <div className="bg-white rounded-lg shadow-lg">
                                <img src="https://images.pexels.com/photos/13693491/pexels-photo-13693491.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
                                <div className="py-6 px-4">
                                    <h3 className="text-lg font-medium text-gray-900">Guri Villo ah</h3>
                                    <p className="text-sm text-gray-500">3 qol  | 2 musqul | 1 jiko</p>
                                    <p className="text-lg font-bold text-gray-700 mt-4">$500</p>
                                    <button className="mt-6 px-4 py-2 bg-kalar-2 text-white rounded-md hover:bg-kalar-2">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <div className="bg-white rounded-lg shadow-lg">
                                <img src="https://images.pexels.com/photos/13693491/pexels-photo-13693491.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
                                <div className="py-6 px-4">
                                <h3 className="text-lg font-medium text-gray-900">Guri Villo ah</h3>
                                    <p className="text-sm text-gray-500">3 qol  | 2 musqul | 1 jiko</p>
                                    <p className="text-lg font-bold text-gray-700 mt-4">$500</p>
                                    <button className="mt-6 px-4 py-2 bg-kalar-2 text-white rounded-md hover:bg-kalar-2">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <div className="bg-white rounded-lg shadow-lg">
                                <img src="https://images.pexels.com/photos/13693491/pexels-photo-13693491.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
                                <div className="py-6 px-4">
                                <h3 className="text-lg font-medium text-gray-900">Guri Villo ah</h3>
                                    <p className="text-sm text-gray-500">3 qol  | 2 musqul | 1 jiko</p>
                                    <p className="text-lg font-bold text-gray-700 mt-4">$500</p>
                                    <button className="mt-6 px-4 py-2 bg-kalar-2 text-white rounded-md hover:bg-kalar-2">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </SwiperSlide>
                    </Swiper> */}
                </div>

            </div>


        </>
    )
}
