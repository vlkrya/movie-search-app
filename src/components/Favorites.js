import React from 'react';
import { List, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const Favorites = ({ favourites, removeFromFavourites }) => (
  <div>
    <h2>Favourites</h2>
    <List
      dataSource={favourites}
      renderItem={movie => (
        <List.Item key={movie.id}>
          {movie.title}
          <Button 
            type="link" 
            onClick={() => removeFromFavourites(movie)}
            icon={<DeleteOutlined />}
          >
            Remove
          </Button>
        </List.Item>
      )}
    />
  </div>
);

export default Favorites;

