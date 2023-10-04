import React from 'react'
import { BsFillHouseCheckFill, BsFillHouseDownFill, BsFillBootstrapFill, BsList } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Services() {
    return (
        <div>


            {/* <div className="w-full h-900 md:h-600   flex items-center bg-gradient-to-b from-kalar-0 to-kalar-1"> */}
            {/* <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Here are some of our clients.
                    </p>
                </div> */}

<div id='Services' className='flex justify-around items-center'>
                        <div className='text-start'>
                            <h2 className="text-4xl font-bold text-kalar-1 mb-3">Our <span className="text-kalar-2">service</span></h2>
                            <p className="text-lg text-kalar-2 mb-8">
                                Here are some of our service we have:
                            </p>
                        </div>
                        <div className=''>
                        <Link to='/Services'> 
                            <button className="  px-6 py-3 bg-kalar-2 text-white rounded-full shadow-lg hover:bg-kalar-1 ">
                                Click to see more
                            </button>
                            </Link>
                        </div>
                    </div>


            <div className="w-full  h-950 md:h-900 p-2 flex items-center bg-gradient-to-b from-white to-gray">


                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:mr-7 gap-8">


                    <div className=' bg-kalar-1 py-8 px-6 rounded-md w-[300px] mt-5  ml-24 md:ml-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:bg-kalar-2 '>

                        <BsFillHouseCheckFill className='text-4xl text-kalar-0 ' />

                        <div className='text-lg font-bold mt-3 text-kalar-0'>Guri kiraynta</div>

                        <p className='max-w-[480px] mt-3 mb-8 text-kalar-0'>
                            Powerful, self-serve product and growth analytics to help you
                            convert, engage, and retain more.

                        </p>

                    </div>

                    <div className=' bg-kalar-1 py-8 px-6 rounded-md w-[300px] mt-5 ml-24 md:ml-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:bg-kalar-2 '>

                        <BsFillHouseCheckFill className='text-4xl text-kalar-0 ' />

                        <div className='text-lg font-bold mt-3 text-kalar-0'>Guri kiraynta</div>

                        <p className='max-w-[480px] mb-8 mt-3 text-kalar-0'>
                            Powerful, self-serve product and growth analytics to help you
                            convert, engage, and retain more.


                        </p>

                    </div>

                    <div className=' bg-kalar-1 py-8 px-6 rounded-md w-[300px] mt-5 ml-24 md:ml-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:bg-kalar-2 '>

                        <BsFillHouseCheckFill className='text-4xl text-kalar-0 ' />

                        <div className='text-lg font-bold mt-3 text-kalar-0'>Guri kiraynta</div>

                        <p className='max-w-[480px] mb-8 mt-3 text-kalar-0'>
                            Powerful, self-serve product and growth analytics to help you
                            convert, engage, and retain more.


                        </p>

                    </div>

                    <div className=' bg-kalar-1 py-8 px-6 rounded-md w-[300px] mt-5 ml-24 md:ml-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:bg-kalar-2'>

                        <BsFillHouseCheckFill className='text-4xl text-kalar-0 ' />

                        <div className='text-lg font-bold mt-3 text-kalar-0'>Guri kiraynta</div>

                        <p className='max-w-[480px] mb-8 mt-3 text-kalar-0'>
                            Powerful, self-serve product and growth analytics to help you
                            convert, engage, and retain more.


                        </p>

                    </div>



                </div>

            </div>


        </div>
    )
}
