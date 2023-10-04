// import Navbar from '../shared/Navbar'
// // import Navbar from '../../../shared/Navbarcopy';
// import { useEffect, useState } from 'react';
// import { getAll } from '../shared/apiCRUD'
// import { Link } from 'react-router-dom';
// export default function HeroSection() {

//     const [HeroTitle, setHeroTitle] = useState('');
//     const [heroDescription, setheroDescription] = useState('');

//     useEffect(() => {

//         const GetHero = async () => {

//             try {
//                 const { data } = await getAll('homesetting')
//                 setHeroTitle(data[0]?.HeroTitle)
//                 setheroDescription(data[0]?.HeroDescription)
//                 // console.log("xogta",data)

//             } catch (error) {
//                 console.log(error.message)

//             }


//         }
//         GetHero();

//     }, [])
//     return (

//         <>

//             <div className="w-full h-900 md:h-600   flex items-center bg-gradient-to-b from-kalar-0 to-kalar-1">


//                 <div class=" h-full  py-8 px-5 md:px-16">

//                     <div className='flex flex-col lg:flex-row'>
//                         <div className='lg:ml-8 xl:ml-[10px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
//                             <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6 '>
//                                 <span className='text-kalar-0'>Rent</span> Your Dream House With
//                                 Us.
//                             </h1>
//                             <p className='max-w-[480px] mb-8 text-kalar-0'>
//                                 Powerful, self-serve product and growth analytics to help you
//                                 convert, engage, and retain more.



//                             </p>
//                         </div>
//                         <div className='hidden flex-1 lg:flex justify-end items-end'>
//                             {/* <img src={Image} alt='' /> */}
//                             <img className="w-full h-auto object-cover rounded-tl-full rounded-bl-full" src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600 alt=" />

//                         </div>
//                     </div>

//                 </div>
//             </div>


//         </>


//     );
// }


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';


import { useEffect, useState } from 'react';
import { getAll } from '../shared/apiCRUD'
import { Link } from 'react-router-dom';
export default function HeroSection() {

    const [HeroTitle, setHeroTitle] = useState('');
    const [heroDescription, setheroDescription] = useState('');

    useEffect(() => {

        const GetHero = async () => {

            try {
                const { data } = await getAll('homesetting')
                setHeroTitle(data[0]?.HeroTitle)
                setheroDescription(data[0]?.HeroDescription)
                // console.log("xogta",data)

            } catch (error) {
                console.log(error.message)

            }


        }
        GetHero();

    }, [])
    return (

        <>

            <div className="w-full h-900 md:h-600   flex items-center bg-gradient-to-b from-kalar-0 to-kalar-1">

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    <div class=" h-full  py-8 px-5 md:px-16">

                        <SwiperSlide>
                            <div className='flex flex-col lg:flex-row'>
                                <div className='lg:ml-8 xl:ml-[10px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                                    <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6 '>
                                        <span className='text-kalar-0'>Rent</span> Your Dream House With
                                        Us.
                                    </h1>
                                    <p className='max-w-[480px] mb-8 text-kalar-0'>
                                        Powerful, self-serve product and growth analytics to help you
                                        convert, engage, and retain more.



                                    </p>
                                </div>
                                <div className='hidden flex-1 lg:flex justify-end items-end'>
                                    {/* <img src={Image} alt='' /> */}
                                    <img className="w-full h-auto object-cover rounded-tl-full rounded-bl-full" src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600 alt=" />

                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex flex-col lg:flex-row'>
                                <div className='lg:ml-8 xl:ml-[10px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                                    <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6 '>
                                        <span className='text-kalar-0'>Rent</span> Your Dream House With
                                        Us.
                                    </h1>
                                    <p className='max-w-[480px] mb-8 text-kalar-0'>
                                        Powerful, self-serve product and growth analytics to help you
                                        convert, engage, and retain more.



                                    </p>
                                </div>
                                <div className='hidden flex-1 lg:flex justify-end items-end'>
                                    {/* <img src={Image} alt='' /> */}
                                    <img className="w-full h-auto object-cover rounded-tl-full rounded-bl-full" src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600 alt=" />

                                </div>
                            </div>
                        </SwiperSlide>

                    </div>
                </Swiper>

            </div>


        </>


    );
}



