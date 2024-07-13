'use client';
import React, { useState, useEffect } from 'react';

const ApplicationForm = ({ application, onAdd, onEdit, onClose }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [applicationDate, setApplicationDate] = useState('');
  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (application) {
      setJobTitle(application.jobTitle);
      setCompany(application.company);
      setApplicationDate(application.applicationDate);
      setStatus(application.status);
      setNotes(application.notes);
    }
  }, [application]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplication = {
      id: application ? application.id : Date.now(),
      jobTitle,
      company,
      applicationDate,
      status,
      notes,
    };

    if (application) {
      onEdit(newApplication);
    } else {
      onAdd(newApplication);
    }

    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-gradient-to-b from-zinc-600 to-cyan-500 p-4 rounded-lg w-96'>
        <h2 className='text-2xl font-bold mb-4'>
          {application ? 'Edit' : 'Add'} Application
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='block text-sm font-medium mb-2'
              htmlFor='jobTitle'
            >
              Job Title
            </label>
            <input
              type='text'
              id='jobTitle'
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-2' htmlFor='company'>
              Company
            </label>
            <input
              type='text'
              id='company'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-sm font-medium mb-2'
              htmlFor='applicationDate'
            >
              Application Date
            </label>
            <input
              type='date'
              id='applicationDate'
              value={applicationDate}
              onChange={(e) => setApplicationDate(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-2' htmlFor='status'>
              Status
            </label>
            <select
              id='status'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg'
              required
            >
              <option value=''>Select Status</option>
              <option value='applied'>Applied</option>
              <option value='interview'>Interview</option>
              <option value='offer'>Offer</option>
              <option value='rejected'>Rejected</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-2' htmlFor='notes'>
              Notes
            </label>
            <textarea
              id='notes'
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg'
            ></textarea>
          </div>
          <div className='flex justify-end space-x-2'>
            <button
              type='button'
              onClick={onClose}
              className='bg-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
