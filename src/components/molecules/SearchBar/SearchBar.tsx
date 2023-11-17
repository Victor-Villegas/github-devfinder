import React, { useState } from 'react';
import './SearchBar.css';
import { SlMagnifier } from 'react-icons/sl';
import Icon from '../../atoms/Icon/Icon';
import Card from '../../atoms/Card/Card';
import Button from '../../atoms/Button/Button';

interface Props {
  onSearch: (username: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(username);
  };

  return (
    <Card className={'search-bar'}>
      <form onSubmit={handleSubmit} className={'form'}>
        <Icon size={2}>
          <SlMagnifier />
        </Icon>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search Github username..."
        />

        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
    </Card>
  );
};

export default SearchBar;
