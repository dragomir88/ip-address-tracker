import React, { useState } from 'react';
import searchIcon from '../assets/icon-arrow.svg';  
import './Search.css';

interface SearchProps {
  onSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(inputValue.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="search-field">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-btn">
          <img src={searchIcon} alt="Search" />
        </button>
      </div>
    </form>
  );
};

export default Search;