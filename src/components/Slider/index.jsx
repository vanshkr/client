import { Swiper, SwiperSlide } from "swiper/react";
import { useGetRecentEpisodesQuery } from "../../redux/services/gogoanimeApi";
import {FaPlayCircle, FaAngleRight} from "react-icons/fa";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import './styles.css';

import {images} from '../../assets/constants';
// import required modules
import { Keyboard,Autoplay } from "swiper";
import { Pagination } from "swiper";


const Slider = ()=>{
  return (
    <>
    <div className="flex-auto md:flex-initial max-w-full flex flex-col ">
      <div className='w-full flex flex-col overflow-auto'>
        <div className='w-full flex flex-col'>        
        <Swiper slidesPerView='auto' loop={true}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          }}
          modules = {[Autoplay,Keyboard, Pagination]}>
          {images?.map((image,i)=>(
            <SwiperSlide 
            key={image.id}
            className=' animate-slideright' >
              <div className="relative  h-full  w-full">
                  <div className= {`absolute radient-gradient  inset-0`}/>
                    <div className= {`flex flex-col md:pl-8 pl-2 top-[35%] justify-center  absolute lg:w-[60%]  md:w-[50%] w-[75%]`}>
                      <div className="text-left text-green text-[12px] lg:text-[15px] mb-1 md:mb-2"><p>#{i+1} Spotlight</p></div>
                        <div className="mb-2 md:mb-4"><p className="text-left text-white font-bold text-xl md:text-3xl lg-text-4xl">{image.title}</p></div>
                        <div className=" mb-1 md:mb-4" >
                          <p className=" clamped break-all text-left text-[12px] md:text-[16px] text-white drop-shadow-lg w-1/2 ">
                            {image.desc}
                          </p>
                        </div>
                        <div className="flex">
                          <div className="bg-green text-black py-1 px-3 rounded-full mr-1 md:mr-4">
                              <Link className="flex justify-center items-center ">
                                <FaPlayCircle className="mr-0.5" />
                                <p className="text-[12px] md:text-[14px] lg:text-base"> Watch Now </p>
                              </Link>
                          </div>
                          <div className="bg-dgrey  text-white py-1 px-3  rounded-full">
                              <Link className="flex justify-center items-center ">
                                <p className="text-[12px] md:text-[14px] lg:text-base"> Detail </p>
                                <FaAngleRight/>
                              </Link>
                          </div>
                        </div>                      
                    </div>

                    <img  src={image.url}/>
              </div>
            </SwiperSlide>
          ))}            
          <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </div>
    </>
  );
}

export default Slider;

