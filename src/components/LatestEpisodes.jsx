import { useGetRecentEpisodesQuery } from "../redux/services/gogoanimeApi";
import {AnimeCard} from "../components";
import {Link} from 'react-router-dom';
const LatestEpisodes = ()=>{

    const {data} = useGetRecentEpisodesQuery();
    return(
            <div className = 'max:w-full flex flex-col mt-4'>
                <div className=' flex items-center'>
                    <div className="flex w-full">
                        <h3 className="font-semibold text-xl md:text-3xl text-green text-left">Latest Episodes</h3> 
                    </div>  
                </div>  
                
                <div className=" mt-8 flex flex-1 flex-wrap justify-start md:gap-6 gap-3">
                    {data?.map((anime, i) => (
                        <AnimeCard
                        key={`${anime.animeId}-${anime.animeTitle}`}
                        anime={anime}
                        data={data}
                        i={i}
                        />
                    ))}
                </div>
            </div>
    )
}

export default LatestEpisodes;