'use client';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { ModeToggle } from '../ui/ModeToggle';
import { Button } from '../ui/button';
import { UserCheck } from 'lucide-react';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='h-16 w-full justify-between rounded-xl border bg-gradient-to-b from-cyan-500 to-zinc-500'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link
          href='/'
          className='text-2xl font-semibold flex items-center cursor-pointer'
        >
          <Image src='/logo.svg' alt='Jobtrail logo' width={50} height={50} />
          <span className='ml-2 hidden sm:block'>JobTrail</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center '>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {/* Icon for the mobile menu button */}
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links (hidden on small screens) */}
        <div className='hidden md:flex space-x-4 text-xl'>
          <Link href='/feed' className='font-semibold'>
            <Button variant='ghost' className=' rounded-xl'>
              <span className='text-lg p-2'>Job-Feed</span>
            </Button>
          </Link>
          <Link href='/dashboard' className='font-semibold'>
            <Button variant='ghost' className=' rounded-xl'>
              <span className='text-lg p-2'>Dashboard</span>
            </Button>
          </Link>{' '}
          <Link href='#leaderboard' className='font-semibold'>
            <Button variant='ghost' className=' rounded-xl'>
              <span className='text-lg p-2'>Leaderboard</span>
            </Button>
          </Link>{' '}
          <Link href='/#about' className='font-semibold'>
            <Button variant='ghost' className=' rounded-xl'>
              <span className='text-lg p-2'>About</span>
            </Button>
          </Link>
        </div>

        {/* Sign In/Sign Up and Toggle Theme (always visible) */}
        <div className='flex space-x-4 items-center'>
          <Link href='/login'>
            <Button variant='ghost' className=' rounded-xl'>
              <UserCheck />
              <span className=' font-bold p-2'>Sign In</span>
            </Button>
          </Link>

          {/* Toggle Theme */}
          <ModeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={dropdownRef}
          className='md:hidden mt-4 absolute left-0 right-0 mx-auto bg-background border border-b-zinc-500 rounded-lg shadow-md py-2 w-48 z-50 '
        >
          <Link href='/feed' className='block px-4 py-2'>
            Feed
          </Link>
          <Link href='/dashboard' className='block px-4 py-2'>
            Dashboard
          </Link>
          <Link href='/leaderboard' className='block px-4 py-2'>
            Leaderboard
          </Link>
          <Link href='/about' className='block px-4 py-2'>
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
