import React from 'react'
import Navbar from '../shared/Navbar'

export default function Ourclients() {
    return (
        <div>
            <Navbar />
            <div className="w-full min-h-screen p-2 flex items-center bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 md:gap-40 ml-40">

                    <div className="justify-center">
                        <img
                            className="w-24 h-24 object-cover rounded-full"
                            src="https://blog.hubspot.com/hubfs/image8-2.jpg"
                            alt=""
                        />
                         <div className="z-10 bg-kalar-2 p-8 rounded-lg shadow-md">
                            <h1 className="text-3xl font-bold text-kalar-0 mb-4">
                                google.com
                            </h1>
                        </div>
                    </div>
                    <div className="justify-center">
                        <img
                            className="w-24 h-24 object-cover rounded-full"
                            src="https://blog.hubspot.com/hubfs/image8-2.jpg"
                            alt=""
                        />
                          <div className="z-10 bg-kalar-2 p-8 rounded-lg shadow-md">
                            <h1 className="text-3xl font-bold text-kalar-0 mb-4">
                                google.com
                            </h1>
                        </div>
                    </div>
                    <div className="justify-center">
                        <img
                            className="w-24 h-24 object-cover rounded-full"
                            src="https://blog.hubspot.com/hubfs/image8-2.jpg"
                            alt=""
                        />
                         <div className="z-10 bg-kalar-2 p-8 rounded-lg shadow-md">
                            <h1 className="text-3xl font-bold text-kalar-0 mb-4">
                                google.com
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
