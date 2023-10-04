import React from 'react';
import { BsFillHouseCheckFill, BsFillHouseDownFill, BsFillBootstrapFill, BsList } from 'react-icons/bs'

const HeroContent = () => {
  return (
    <div className="bg-white h-full  py-8 px-5 md:px-16">

      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5  gap-x-6 gap-y-8'>
        <div className='text-center'>
          <div className=' text-kalar-1 '> 2345</div>
          <div className='text-kalar-2'>Happy Customers</div>
        </div>

        {/* rental houses  */}
        <div className='text-center'>
          <div className=' text-kalar-1 '> 2345+</div>
          <div className='text-kalar-2'>Rent property</div>
        </div>


        {/* Award wining */}

        <div className='text-center'>
          <div className='text-3xl text-kalar-1 '> 130+</div>
          <div className='text-kalar-2'>Happy Customers</div>
        </div>
      </div>
    

    </div>

  );
};

export default HeroContent;