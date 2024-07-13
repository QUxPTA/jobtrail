'use client';
import React from 'react';

const ApplicationItem = ({ application, onEdit, onDelete }) => {
  return (
    <div className='border p-4 rounded-lg mb-4 shadow-md'>
      <h3 className='text-xl font-bold'>{application.jobTitle}</h3>
      <p className='text-sm text-gray-600'>{application.company}</p>
      <p className='text-sm text-gray-600'>
        {new Date(application.applicationDate).toLocaleDateString()}
      </p>
      <p className='text-sm text-gray-600'>{application.status}</p>
      <p className='text-sm text-gray-600'>{application.notes}</p>
      <div className='flex space-x-2 mt-2'>
        <button
          className='bg-yellow-500 py-1 px-2 rounded-lg hover:bg-yellow-600'
          onClick={() => onEdit(application)}
        >
          Edit
        </button>
        <button
          className='bg-red-500 py-1 px-2 rounded-lg hover:bg-red-600'
          onClick={() => onDelete(application.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ApplicationItem;
