'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/ui/Sidebar';
import { useRouter } from 'next/navigation';
import { getSession } from '@/lib/getSession';

const ProfilePage = ({ session }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const user = session?.user;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  const handleProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePhoto(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Profile updated:', { username, email, profilePhoto });
  };

  const handleDeleteAccount = () => {
    // TODO: Handle account deletion
    console.log('Account deleted');
  };

  return (
    <Sidebar title='Profile'>
      <div className='max-w-md mx-auto p-4'>
        <h2 className='text-2xl font-bold mb-4'>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='block text-sm font-medium mb-2'
              htmlFor='username'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-2' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-sm font-medium mb-2'
              htmlFor='profilePhoto'
            >
              Profile Photo
            </label>
            <input
              type='file'
              id='profilePhoto'
              onChange={handleProfilePhotoChange}
              className='w-full px-3 py-2 border rounded-lg'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500  py-2 px-4 rounded-lg hover:bg-blue-600'
          >
            Update Profile
          </button>
        </form>
        <div className='mt-6'>
          <button
            onClick={handleDeleteAccount}
            className='w-full bg-red-500  py-2 px-4 rounded-lg hover:bg-red-600'
          >
            Delete Account
          </button>
        </div>
      </div>
    </Sidebar>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context.req, context.res);
  return {
    props: {
      session,
    },
  };
};

export default ProfilePage;
