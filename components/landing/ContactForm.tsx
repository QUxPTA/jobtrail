'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // TODO: Implement for submission logic
    // Reset form fields after submission
    setFormData({
      subject: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className='m-10'>
      <h2 className='text-cyan-500 text-3xl font-bold text-center mb-8'>
        Contact Us
      </h2>
      <form
        className='max-w-screen-md mx-auto bg-gradient-to-b from-cyan-500 to-zinc-600 rounded-2xl p-8 shadow-lg'
        onSubmit={handleSubmit}
      >
        <div className='mb-4'>
          <label htmlFor='name' className='block  text-lg font-medium'>
            Subject
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.subject}
            onChange={handleChange}
            className='mt-1 block w-full px-3 py-2 rounded-md'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block  text-lg font-medium'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='mt-1 block w-full px-3 py-2 rounded-md '
            required
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='message' className='block  text-lg font-medium'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className='mt-1 block w-full px-3 py-2 rounded-md resize-y'
            required
          />
        </div>
        <button
          type='submit'
          className=' bg-cyan-500 hover:bg-cyan-600 py-2 px-4 rounded-md font-medium transition duration-300'
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
