import React, { useState } from 'react'
import { BsFillXCircleFill, BsFillHouseDownFill, BsList, } from 'react-icons/bs'
import { Link } from "react-router-dom";

const menu = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'TypeofHouse', path: '/TypeHouse' },
    { name: 'HousesList', path: '/HousesList' },
    { name: 'Contact', path: '/Contact' },
    { name: 'Clients', path: '/Clients' },
    { name: 'Services', path: '/Services' },
]


export default function Navbar() {
    const [mobile, setismobile] = useState(false)
    const [misk, setismisk] = useState(true)
    return (

        <div>

            {/* <div className={` ${mobile ? 'block' : 'hidden'} w-[70%]   md:hidden bg-kalar-2 shadow-sm h-[900px]  top-0 left-0  `}>
                Sidebar menu part
                <ul className='gap-5 mt-10 text-kalar-0' >

                    {menu.map((item, index) => {
                        return <Link key={index} to={item.path}>   <li className=' text-lg text-gray-600'>{item.name}</li></Link>
                    }
                    )}
                </ul>
            </div> */}



            {misk && <div className='bg-kalar-2 text-white py-2 text-center flex justify-center items-center gap-7'>
                <div>Big discount 50% ka faaideyso</div>
                <BsFillXCircleFill onClick={() => setismisk(false)} />
            </div>}
            <div className='flex justify-between items-center border-b  p-3  py-6'>



                <div className='flex gap-4 text-2xl'>
                    <BsFillHouseDownFill className='text-3xl  text-kalar-1' />
                    <span className='text-kalar-1 text-xl md:text-2xl font-extrabold'> <span className='text-kalar-2'>Beta</span>house</span></div>
                <div className='flex items-center gap-x-6' >
                    <ul className='hidden md:flex gap-5 ' >

                        {menu.map((item, index) => {
                            return <Link key={index} to={item.path}>   <li className=' text-lg text-gray-600'>{item.name}</li></Link>
                        }
                        )}
                    </ul>
                    <button className='border hidden md:block md:border-1 text-sm   md:font-semibold text-kalar-1 border-kalar-2 rounded px-6  p-1.5'>Sign</button>

                    <button>
                        <BsList onClick={() => setismobile(!mobile)} className='text-3xl  block   md:hidden' />
                    </button>
                </div>



            </div>
         
            <div
                className={` ${mobile ? "block" : "hidden"
                    } w-[100%] relative center top-5 shadow-sm h-[900px] md:hidden p-3`}
            >
                <button className=" w-[100%] bg-gray-200 py-2 rounded-md text-gray-500">
                    Login
                </button>
                <button className=" w-[100%] bg-black p-2 rounded-md mt-5 text-white font-semibold">
                    Sing Up
                </button>

                <div className="mt-5">
                    <ul className='font-semibold text-xl text-gray-400 flex flex-col gap-3 ' >

                        {menu.map((item, index) => {
                            return <Link key={index} to={item.path}>   <li className=' text-lg text-gray-600'>{item.name}</li></Link>
                        }
                        )}
                    </ul>
                </div>
            </div>

        </div>


    )
}
