import React from 'react';
import { Card, Col } from 'antd';
import { StarOutlined, ClockCircleOutlined } from '@ant-design/icons';

const MovieCard = ({ movie, addToFavourites, addToWatchLater }) => (
  <Col key={movie.id} xs={24} sm={12} md={8} lg={6} xl={4}>
    <Card
      hoverable
      cover={<img alt={movie.title} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} />}
      actions={[
        <StarOutlined key="favourite" onClick={() => addToFavourites(movie)} />,
        <ClockCircleOutlined key="watchLater" onClick={() => addToWatchLater(movie)} />
      ]}
    >
      <Card.Meta 
        title={movie.title} 
        description={(
          <>
            <div>Release Date: {movie.release_date}</div>
            <div>Rating: {movie.vote_average}</div>
          </>
        )}
      />
    </Card>
  </Col>
);

export default MovieCard;
