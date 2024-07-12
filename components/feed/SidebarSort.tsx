import React, { useState } from 'react';

const SidebarSort = () => {
  const [selectedSort, setSelectedSort] = useState('date');

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSort(e.target.value);
  };

  return (
    <div className='w-1/4 p-4 rounded-lg shadow-lg border border-b-cyan-500 sticky top-0 h-full'>
      <h2 className='text-xl font-semibold mb-4'>Sort Posts</h2>
      <select
        value={selectedSort}
        onChange={handleSortChange}
        className='w-full px-3 py-2 rounded-lg'
      >
        <option value='date'>By Date</option>
        <option value='tags'>By Tags</option>
      </select>
    </div>
  );
};

export default SidebarSort;
