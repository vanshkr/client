import {Link} from 'react-router-dom';
import {PlayPause} from '../components';
import { setActiveAnime } from "../redux/features/playerSlice";
import { useDispatch } from 'react-redux';

const AnimeCard = ({anime,data}) =>{
    const dispatch = useDispatch();
    const handlePauseClick = () =>{
      dispatch(playPause(false));
    }
  
    const handlePlayClick = () =>{
      dispatch(setActiveSong({song,data,ind}));
      dispatch(playPause(true));
    }
    return(
        <div className="flex flex-auto md:flex-initial flex-col md:w-[30%] w-[45%] h-auto bg-dgrey bg-opacity-80 backdrop-blur-sm animate-slideup ">
            <div className="relative cursor-pointer w-full md:h-60 h-48 group">
                <div className= {` top-40 bg-gradient-to-t from-dgrey absolute inset-0 bg-opacity-6`}/>
                <div className='absolute bottom-1 left-2  md:p-1 bg-white rounded-full'>
                    <p className=" px-0.5 font-bold text-sm text-black ">{anime?.subOrDub}</p>
                </div>
                <div className='absolute  bottom-1 right-2 md:p-1 bg-cyan rounded-full'>
                    <p className="px-0.5 font-bold text-sm text-black  ">Ep {anime?.episodeNum}</p>
                </div>
                <img  className=' w-[100%] h-[100%] object-fill' src = {anime?.animeImg} alt = {anime?.animeTitle}/>
            </div>
            <div className='md:m-4 m-2'>
                <h3 className=' text-md text-white truncate hover:text-green'>
                    <Link to={`/anime-details/${anime?.animeTitile}`}>
                        {anime?.animeTitle}
                    </Link>
                </h3>
            </div>
        </div>

    )
};

export default AnimeCard;
// song = {song}
//                     activeSong = {activeSong}
//                     isPlaying = {isPlaying}
//${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}       
            //    handlePlay = {handlePlayClick}
//                     handlePause = {handlePauseClick}

{/* <div className= {`bg-black absolute inset-0 
                    justify-center items-center bg-opacity-50 
                    group-hover:flex `}>
                    <PlayPause
                    />
                </div> */}