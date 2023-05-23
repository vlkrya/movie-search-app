import React from 'react';
import { Row } from 'antd';
import MovieCard from './MovieCard';

const MovieList = ({ movies, addToFavourites, addToWatchLater }) => (
  <Row gutter={[16, 16]}>
    {movies.filter(movie => movie.poster_path).map(movie => (
      <MovieCard 
        key={movie.id} 
        movie={movie} 
        addToFavourites={addToFavourites} 
        addToWatchLater={addToWatchLater} 
      />
    ))}
  </Row>
);

export default MovieList;
