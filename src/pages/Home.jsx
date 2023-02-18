import { LatestEpisodes, Trending, AnimeCard } from "../components";
import {Slider} from '../components';


const Home = () =>{

    
    return(
        <div className="w-full flex flex-col"> 
            <div className="w-full">
                <Slider/>
            </div>
            <div className="w-full flex-col justify-start items-center mt-8">
                <div className=' flex items-center'>
                    <h3 className="font-semibold text-xl md:text-3xl text-green text-left">Trending</h3> 
                </div>
                <Trending/>
            </div>
            <div className="flex md:flex-row flex-col">
                <div className="md:basis-2/3">
                    <LatestEpisodes/>
                </div>
                <div className="my-8 mx-4 md:basis-1/3 bg-white">
                </div>
            </div>
            
        </div>
    )
};

export default Home;