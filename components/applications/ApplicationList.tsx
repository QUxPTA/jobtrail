'use client';
import React from 'react';
import ApplicationItem from './ApplicationItem';

const ApplicationList = ({ applications, onEdit, onDelete }) => {
  if (!applications.length) {
    return <p className='text-center'>No applications found.</p>;
  }

  return (
    <div>
      {applications.map((application) => (
        <ApplicationItem
          key={application.id}
          application={application}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ApplicationList;
