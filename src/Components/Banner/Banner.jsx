import React from 'react';
import BannerPic from '../../assets/BannerPic.png'
const Banner = () => {
    return (
        <div className='bg-[#5137ac]'>
            <div className='mx-5 md:mx-10 lg:mx-20'>
            <div className="  ">
  <div className="min-h-screen lg:gap-16 md:gap-10 gap-5 grid md:grid-cols-2 grid-cols-1 items-center justify-center">
   
    <div>
      <h1 className="text-5xl font-bold text-white">Lighten Your Heart <br /> and Mind</h1>
      <p className="py-6 text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
      <button className="btn btn-primary bg-[#ff3c00]">Book Appointment</button>
    </div>
    <img src={BannerPic} className="max-w-sm rounded-lg " />
  </div>
</div>
            </div>
        </div>
    );
};

export default Banner;