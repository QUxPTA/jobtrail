'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Perform sign-up logic
    if (formData.password === formData.confirmPassword) {
      // Simulate sign-up logic
      console.log('Sign-up successful:', formData);
      router.push('/dashboard'); // Redirect to dashboard after sign-up
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold mb-4 text-center text-cyan-500'>
          Sign Up
        </h1>
        <p className='text-lg mb-8 text-center'>
          Create an account to get started.
        </p>
        <form
          className='max-w-screen-sm mx-auto bg-gradient-to-b from-cyan-500 to-zinc-600 rounded-2xl p-8 shadow-lg'
          onSubmit={handleSignUp}
        >
          <div className='mb-4'>
            <label htmlFor='name' className='block text-lg font-medium'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 rounded-md'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-lg font-medium'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 rounded-md'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-lg font-medium'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 rounded-md'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='confirmPassword'
              className='block text-lg font-medium'
            >
              Confirm Password
            </label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 rounded-md'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-cyan-500 hover:bg-cyan-600 py-2 px-4 rounded-md shadow-md transition duration-300'
          >
            Sign Up
          </button>
        </form>
        <p className='mt-4 text-center'>
          Already have an account?{' '}
          <Link href='/login' className='text-cyan-500 hover:underline'>
            Sign In here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
