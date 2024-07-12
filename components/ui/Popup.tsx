import React from 'react';
import Link from 'next/link';

const Popup = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-8 rounded-md shadow-md text-center'>
        <h2 className='text-2xl font-semibold mb-4'>Sign Up to Continue</h2>
        <p className='mb-6'>
          You&apos;ve reached the interaction limit. Sign up to unlock full
          features!
        </p>
        <Link
          href='/signup'
          className='bg-cyan-500 text-white px-4 py-2 rounded-md'
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Popup;
