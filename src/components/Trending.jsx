import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetRecentEpisodesQuery } from "../redux/services/gogoanimeApi";
import {FreeMode} from 'swiper';
import { Link } from "react-router-dom";
const Trending = () =>{
    const {data} = useGetRecentEpisodesQuery();
    return(
<>
    <div className="max-w-full flex flex-col mt-6 ">
      <div className='w-full flex flex-col justify-start items-center overflow-auto'>
        <div className=' justify-start flex flex-col'>        
        <Swiper slidesPerView='auto' loop={true}>
            {data?.map((anime,i)=>(
            <SwiperSlide   style = {{width:'20%',height:'auto'}} className='animate-slideright md:mx-2' >
            <div className="w-full h-full flex flex-col">
              
              <div className="flex md:w-[80%] w-[100%] h-full cursor-pointer ">
                <img src={anime?.animeImg} title = {anime?.animeTitle} className='w-full h-full object-cover opacity-90' />
              </div>
            </div>
            </SwiperSlide>
            ))}   
        </Swiper>
        </div>
      </div>
    </div>
    </>
    
    )
};

export default Trending;