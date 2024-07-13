'use client';
import React from 'react';

const FilterOptions = ({ onFilter }) => {
  const handleFilter = (status) => {
    onFilter(status);
  };

  return (
    <div className='mb-4'>
      <select
        onChange={(e) => handleFilter(e.target.value)}
        className='w-full px-3 py-2 border rounded-lg'
      >
        <option value=''>All Statuses</option>
        <option value='applied'>Applied</option>
        <option value='interview'>Interview</option>
        <option value='offer'>Offer</option>
        <option value='rejected'>Rejected</option>
      </select>
    </div>
  );
};

export default FilterOptions;
