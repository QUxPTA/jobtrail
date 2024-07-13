'use client';
import React from 'react';

const SidebarSort = ({ onSort }) => {
  const handleSort = (sortKey) => {
    onSort(sortKey);
  };

  return (
    <div className='mb-4'>
      <select
        onChange={(e) => handleSort(e.target.value)}
        className='w-full px-3 py-2 border rounded-lg'
      >
        <option value='date'>Sort by Date</option>
        <option value='company'>Sort by Company</option>
        <option value='status'>Sort by Status</option>
      </select>
    </div>
  );
};

export default SidebarSort;
