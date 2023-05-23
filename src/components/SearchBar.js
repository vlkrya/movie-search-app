import React from 'react';
import { Input, Button, Form } from 'antd';

const SearchBar = ({ query, setQuery, searchMovies }) => {
    const handleFormSubmit = () => {
        searchMovies();
    }

    return (
        <Form onFinish={handleFormSubmit}>
            <Form.Item>
                <Input 
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search for a movie"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Search</Button>
            </Form.Item>
        </Form>
    )
}

export default SearchBar;


