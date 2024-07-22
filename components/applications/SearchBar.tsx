'use client';
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className='mb-4'>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search applications...'
        className='w-full px-3 py-2 border rounded-lg'
      />
      <button
        className='mt-2 w-full bg-cyan-500 py-2 px-4 rounded-lg hover:bg-cyan-800'
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
