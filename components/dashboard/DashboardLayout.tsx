import React from 'react';
import Link from 'next/link';
import { FolderOpenDot, House, LayoutDashboard, UserPen } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen rounded-2xl border border-b-cyan-500'>
      {/* Sidebar */}
      <aside className='w-64 bg-gradient-to-bl from-zinc-600 to-cyan-500 flex flex-col m-2 rounded-2xl border border-b-cyan-500'>
        <div className='p-4'>
          <h2 className='text-2xl font-bold text-center'>
            <Link href='/'>
              <Button
                variant='ghost'
                className='text-xl font-bold p-2 border-b-cyan-500 rounded-xl text-cyan-500 hover:text-cyan-300'
              >
                <House />
                <span className='text-xl font-bold p-2'>JobTrail</span>
              </Button>
            </Link>
          </h2>
        </div>
        <nav className='flex-1 px-4 m-5'>
          <ul className='flex-row'>
            <li className='mb-4'>
              <Button
                variant='secondary'
                className='border-b-cyan-500 rounded-xl text-cyan-500 hover:text-cyan-300 width'
              >
                <LayoutDashboard />
                <span
                  className='text-cyan-500 font-bold p-2'
                  style={{
                    width: 100,
                  }}
                >
                  Dashboard
                </span>
              </Button>
            </li>
            <li className='mb-4'>
              <Button
                variant='secondary'
                className='border-b-cyan-500 rounded-xl text-cyan-500 hover:text-cyan-300'
              >
                <FolderOpenDot />
                <span
                  className='text-cyan-500 font-bold p-2'
                  style={{
                    width: 100,
                  }}
                >
                  Applications
                </span>
              </Button>
            </li>
            <li className='mb-4'>
              <Button
                variant='secondary'
                className='border-b-cyan-500 rounded-xl text-cyan-500 hover:text-cyan-300'
              >
                <UserPen />
                <span
                  className='text-cyan-500 font-bold p-2'
                  style={{
                    width: 100,
                  }}
                >
                  Profile
                </span>
              </Button>
            </li>
          </ul>
        </nav>
        <div className='p-4'>
          <button className='w-full bg-red-600 hover:bg-red-400 py-2 px-4 rounded-lg'>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className='flex-1 flex flex-col'>
        {/* Top Bar */}
        <header className=' shadow-md py-4 px-6 flex justify-between items-center rounded-lg border border-b-cyan-500'>
          <h1 className='text-xl font-bold'>Dashboard</h1>
          <div className='flex items-center'>
            <span className='mr-4 text-cyan-500'>Welcome, User</span>
            <Image
              src='/user.svg'
              alt='User Avatar'
              className='w-10 h-10 rounded-full'
              width={25}
              height={25}
            />
          </div>
        </header>

        {/* Main Content Area */}
        <main className='flex-1 p-6 overflow-y-auto'>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
