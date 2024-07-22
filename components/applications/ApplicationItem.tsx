'use client';
import React from 'react';

interface Application {
  _id: string;
  userId: string;
  companyName: string;
  position: string;
  status: string;
  emailResponse: string;
  manualResponse?: string;
  appliedDate: string;
  notes: string;
}

interface ApplicationItemProps {
  application: Application;
  onEdit: (application: Application) => void;
  onDelete: (id: string) => void;
}

const ApplicationItem: React.FC<ApplicationItemProps> = ({
  application,
  onEdit,
  onDelete,
}) => {
  return (
    <div className='flex flex-col border p-4 rounded-lg border-b-cyan-500 mb-4 shadow-lg min-h-[250px]'>
      <h3 className='text-xl font-bold mb-2'>{application.position}</h3>
      <p className='text-sm mb-1'>
        <strong>Company:</strong> {application.companyName}
      </p>
      <p className='text-sm mb-1'>
        <strong>Application Date:</strong>{' '}
        {new Date(application.appliedDate).toLocaleDateString()}
      </p>
      <p className='text-sm mb-1'>
        <strong>Status:</strong> {application.status}
      </p>
      <p className='text-sm mb-1'>
        <strong>Email Response:</strong> {application.emailResponse}
      </p>
      {application.manualResponse && (
        <p className='text-sm mb-1'>
          <strong>Tone:</strong> {application.manualResponse}
        </p>
      )}
      <p className='text-sm mb-2'>
        <strong>Notes:</strong> {application.notes}
      </p>
      <div className='flex space-x-2 mt-auto'>
        <button
          className='bg-amber-500 py-1 px-2 rounded-lg hover:bg-amber-600'
          onClick={() => onEdit(application)}
        >
          Edit
        </button>
        <button
          className='bg-red-500 py-1 px-2 rounded-lg hover:bg-red-600'
          onClick={() => onDelete(application._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ApplicationItem;
