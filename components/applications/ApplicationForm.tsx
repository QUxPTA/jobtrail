import React, { useState, useEffect, FormEvent } from 'react';

interface Application {
  _id?: string;
  userId: string;
  companyName: string;
  position: string;
  status: string;
  emailResponse: string;
  manualResponse?: string;
  appliedDate: string;
  notes: string;
}

interface ApplicationFormProps {
  application: Application | null;
  onAdd: (application: Application) => void;
  onEdit: (application: Application) => void;
  onClose: () => void;
  userId: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  application,
  onAdd,
  onEdit,
  onClose,
  userId,
}) => {
  const [jobTitle, setJobTitle] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [applicationDate, setApplicationDate] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [emailResponse, setEmailResponse] = useState<string>('');
  const [manualResponse, setManualResponse] = useState<string>('');

  useEffect(() => {
    if (application) {
      setJobTitle(application.position);
      setCompany(application.companyName);
      setApplicationDate(
        application.appliedDate ? application.appliedDate.split('T')[0] : ''
      );
      setStatus(application.status);
      setNotes(application.notes);
      setEmailResponse(application.emailResponse || '');
      setManualResponse(application.manualResponse || '');
    }
  }, [application]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newApplication: Application = {
      userId,
      companyName: company,
      position: jobTitle,
      status,
      emailResponse,
      appliedDate: applicationDate,
      notes,
    };

    if (emailResponse === 'manual') {
      newApplication.manualResponse = manualResponse;
    }

    try {
      if (application) {
        const response = await fetch(
          `/api/applications?id=${application._id}`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newApplication),
          }
        );

        if (response.ok) {
          const updatedApplication = await response.json();
          onEdit(updatedApplication);
          alert('Application updated successfully!');
        } else {
          const errorData = await response.json();
          console.error(errorData.message);
        }
      } else {
        const response = await fetch('/api/applications/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newApplication),
        });

        if (response.ok) {
          const newApplication = await response.json();
          onAdd(newApplication);
          alert('Application added successfully!');
        } else {
          const errorData = await response.json();
          console.error(errorData.message);
        }
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Something went wrong, try again');
    }

    onClose();
  };

  return (
    <div className='fixed inset-0 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-gradient-to-b from-zinc-600 to-cyan-500 p-4 rounded-lg w-96'>
        <h2 className='text-2xl font-bold mb-4'>
          {application ? 'Edit' : 'Add'} Application
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Form fields for job title, company, date, status, notes */}
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
            />
          </div>
          {/* Email Response ( choose either manual or auto ) */}
          <div className='mb-4'>
            <label
              className='block text-sm font-medium mb-2'
              htmlFor='emailResponse'
            >
              Email Response
            </label>
            <select
              id='emailResponse'
              value={emailResponse}
              onChange={(e) => setEmailResponse(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg'
              required
            >
              <option value=''>Select Response</option>
              <option value='autoresponse'>Autoresponse</option>
              <option value='manual'>Manual</option>
            </select>
          </div>
          {/* Manual Response Selection */}
          {emailResponse === 'manual' && (
            <div className='mb-4'>
              <label
                className='block text-sm font-medium mb-2'
                htmlFor='manualResponse'
              >
                Manual Response Tone
              </label>
              <select
                id='manualResponse'
                value={manualResponse}
                onChange={(e) => setManualResponse(e.target.value)}
                className='w-full px-3 py-2 border rounded-lg fill-none'
                required
              >
                <option value=''>Select tone</option>
                <option value='waitlist'>Waitlist</option>
                <option value='affirmative'>Affirmative</option>
                <option value='dismissive'>Dismissive</option>
              </select>
            </div>
          )}
          <div className='flex justify-end'>
            <button
              type='button'
              onClick={onClose}
              className='bg-red-500 py-2 px-4 rounded-lg mr-2'
            >
              Cancel
            </button>
            <button type='submit' className='bg-blue-500 py-2 px-4 rounded-lg'>
              {application ? 'Update' : 'Add'} Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
