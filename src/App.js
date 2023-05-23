import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Spin, Space, message } from 'antd';
import WatchLater from './components/WatchLater';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Favorites from './components/Favorites';


const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favourites, setFavourites] = useState(() => JSON.parse(localStorage.getItem('favourites')) || []);
  const [watchLater, setWatchLater] = useState(() => JSON.parse(localStorage.getItem('watchLater')) || []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
    localStorage.setItem('watchLater', JSON.stringify(watchLater));
  }, [favourites, watchLater]);

  const searchMovies = async () => {
    if (!query) return;

    setLoading(true);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=75c6e18e1b8b56bbd59516aa79031695&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch(err) {
      console.error(err);
    }
    setLoading(false);
  }

  const addToFavourites = (movie) => {
    if (favourites.some(favMovie => favMovie.id === movie.id)) {
      message.warning('This movie is in your favourites!');
      return;
    }

    setFavourites((prevFavourites) => [...prevFavourites, movie]);
  }

  const addToWatchLater = (movie) => {
    if (watchLater.some(watchLaterMovie => watchLaterMovie.id === movie.id)) {
      message.warning('This movie is in your watch later list!');
      return;
    }

    setWatchLater((prevWatchLater) => [...prevWatchLater, movie]);
  }

  const removeFromFavourites = (movie) => {
    setFavourites((prevFavourites) => prevFavourites.filter((favMovie) => favMovie.id !== movie.id));
  }

  const removeFromWatchLater = (movie) => {
    setWatchLater((prevWatchLater) => prevWatchLater.filter((watchLaterMovie) => watchLaterMovie.id !== movie.id));
  }

  return (
    <div style={{padding: '40px'}}>
      <Space direction="vertical" style={{width: '100%'}}>
        <SearchBar 
          query={query}
          setQuery={setQuery}
          searchMovies={searchMovies}
        />
        {loading 
          ? <Spin size="small" /> 
          : <MovieList 
              movies={movies} 
              addToFavourites={addToFavourites} 
              addToWatchLater={addToWatchLater}
            />
        }
        <Favorites favourites={favourites} removeFromFavourites={removeFromFavourites} />
        <WatchLater watchLater={watchLater} removeFromWatchLater={removeFromWatchLater} />
      </Space>
    </div>
  )
}

export default App;



