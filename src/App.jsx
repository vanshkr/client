import { Route, Routes } from 'react-router-dom';
import {AnimeDetails,Home, AnimeMovies, Genres, MostPopular, TopAiring, Search} from './pages';
import {Navbar} from './components';

const App = () => {
  return (
    <div className="flex flex-col bg-black">
      <div className='block bg-black'>
        <Navbar/>
      </div>
      <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col">
        <div className="flex-1 h-fit pb-40">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime-details/:animeTitle" element={<AnimeDetails />} />
            <Route path="/anime-movies/:aphKey" element={<AnimeMovies />} />
            <Route path="/genre/:genreTerm" element={<Genres />} />
            <Route path="/popular" element={<MostPopular />} />
            <Route path="/top-airing" element={<TopAiring />} />
            <Route path="/search/:searchTerm" element={<Search />} />
          </Routes> 
        </div>
      </div>
    </div>
    

  );
};

export default App;

