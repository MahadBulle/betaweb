import React from "react";
import { Link } from 'react-router-dom';
import { BsFillHouseCheckFill, BsFillHouseDownFill, BsFillBootstrapFill, BsList } from 'react-icons/bs'


const Footer = () => {
    return (
        <footer className="bg-kalar-2 mt-4">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap items-center" aria-label="Footer">
                    <div>
                    <div className="px-5 py-2">
                        {/* <div className="text-xl text-white font-bold hover:text-gray-300 cursor-pointer">
              Real Estate Company
            </div> */}
                        <div className='flex gap-4 text-2xl'>
                            <BsFillHouseDownFill className='text-4xl  text-kalar-1' />
                            <span className='text-kalar-1 text-xl md:text-4xl font-extrabold'> <span className='text-kalar-0'>Beta</span>house</span></div>

                    </div>
                    </div>
                    <div className="px-5 py-2 cursor-pointer">
                        <Link to="/" className="text-white hover:text-gray-300">
                            Home
                        </Link>
                    </div>
                    <div className="px-5 py-2 cursor-pointer">
                        <Link to="/HousesList" className="text-white hover:text-gray-300">
                            HousesList
                        </Link>
                    </div>
                    <div className="px-5 py-2 cursor-pointer">
                        <Link to="Clients" className="text-white hover:text-gray-300">
                            OurClients
                        </Link>
                    </div>
                    <div className="px-5 py-2 cursor-pointer">
                        <Link to="About" className="text-white hover:text-gray-300">
                            About Us
                        </Link>
                    </div>
                    <div className="px-5 py-2 cursor-pointer">
                        <Link to="Contact" className="text-white hover:text-gray-300">
                            Contact Us
                        </Link>
                    </div>

                </nav>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="col-span-1">
                        <h3 className="text-white text-lg font-medium mb-4">About Us</h3>
                        <p className="text-white mb-4">Real Estate Company is a leading provider of real estate services, with a focus on delivering exceptional value to our clients. Our team of experts has deep industry knowledge and a proven track record of success.</p>

                    </div>
                    <div className="col-span-1">
                        <h3 className="text-white text-lg font-medium mb-4">Services</h3>
                        <ul className="text-white">
                            <li className="mb-2">Guri kirayn</li>
                            <li className="mb-2">Guri iibin</li>
                            <li className="mb-2">Hagaajinta guriyaha</li>
                            <li className="mb-2">Iibinta qalabka guriyaha</li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-white text-lg font-medium mb-4">Social links</h3>
                        <ul className="text-white">
                            <li className="mb-2">Facebook</li>
                            <li className="mb-2">Instagram</li>
                            <li className="mb-2">whatsapp</li>

                        </ul>
                    </div>
                </div>
                <div className="mt-8 flex justify-center">
                    <p className="text-base text-white">&copy; {new Date().getFullYear()} Betahouse Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;