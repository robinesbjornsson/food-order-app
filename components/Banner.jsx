import React from 'react'
import Image from 'next/image'
import BannerImage from '../assets/bannerImage2.jpeg'
const Banner = () => {
    return (
        <div className="relative h-[200px] sm:h-[200px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px]">
           <Image
           src={BannerImage}
           layout="fill"
           objectFit="cover"
           />
           <div className="absolute top-1/2 w-full text-center font-bold">
               <p className="text-sm sm:text-lg"> Not sure where to go? Perfect.</p>

               <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm Flexible</button>
           </div>
        </div>
    )
}

export default Banner
