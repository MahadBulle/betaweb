import React from 'react'
import Navbar from './shared/Navbar'

export default function HousesList() {
    return (
        <div>
            <Navbar />
            {/* <div className="w-full h-900 md:h-600   flex items-center bg-gradient-to-b from-blue-100 to-blue-500"> */}
            {/* <div className="w-full h-900 md:h-600 flex items-center text-center bg-gradient-to-b from-blue-100 to-blue-500">
                <h1 className='text-8xl text-center'>Hellow</h1>
            </div> */}
            <div className='w-full min-h-screen bg-gradient-to-b from-white to-kalar-1 items-center'>
                <div className=" p-2 flex items-center ml-10 ">
                  
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

                </div>
                <div className=" p-2 flex items-center ml-10">
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
                </div>
            </div>
        </div>
    )
}
