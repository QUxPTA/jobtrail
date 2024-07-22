'use client';
import React from 'react';

interface SidebarSortProps {
  onSort: (key: string) => void;
  onFilter: (status: string) => void;
}

const SidebarSort: React.FC<SidebarSortProps> = ({ onSort, onFilter }) => {
  const handleSort = (sortKey: string) => {
    onSort(sortKey);
  };

  const handleFilter = (status: string) => {
    onFilter(status);
  };

  return (
    <div className='mb-4'>
      <select
        onChange={(e) => handleSort(e.target.value)}
        className='w-full px-3 py-2 border border-b-cyan-500 rounded-lg mb-2'
      >
        <option value='date'>Sort by Date</option>
        <option value='company'>Sort by Company</option>
        <option value='status'>Sort by Status</option>
      </select>
      <select
        onChange={(e) => handleFilter(e.target.value)}
        className='w-full px-3 py-2 border border-b-cyan-500 rounded-lg'
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

export default SidebarSort;
