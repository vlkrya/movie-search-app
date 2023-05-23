import React from 'react';
import { List, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const WatchLater = ({ watchLater, removeFromWatchLater }) => (
  <div>
    <h2>Watch Later</h2>
    <List
      dataSource={watchLater}
      renderItem={movie => (
        <List.Item key={movie.id}>
          {movie.title}
          <Button 
            type="link" 
            onClick={() => removeFromWatchLater(movie)}
            icon={<DeleteOutlined />}
          >
            Remove
          </Button>
        </List.Item>
      )}
    />
  </div>
);

export default WatchLater;


