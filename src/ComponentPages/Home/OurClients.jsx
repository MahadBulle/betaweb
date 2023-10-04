import React from 'react'

export default function OurClients() {
    return (
        <div  className="w-full min-h-screen p-2 flex items-center bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Here are some of our clients.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 md:gap-40">

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
