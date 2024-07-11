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
    <nav className='w-full px-4 py-2 rounded-2xl justify-between border border-b-cyan-500 m-10'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link
          href='/'
          className='text-xl font-semibold flex items-center cursor-pointer'
        >
          <Image src='/logo.svg' alt='Jobtrail logo' width={30} height={30} />
          <span className='ml-2 text-cyan-500'>Jobtrail</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center text-cyan-500'>
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
        <div className='hidden md:flex space-x-4'>
          <Link
            href='/dashboard'
            className='font-semibold text-cyan-500 hover:text-cyan-700'
          >
            Dashboard
          </Link>
          <Link
            href='/leaderboard'
            className='font-semibold text-cyan-500 hover:text-cyan-700'
          >
            Leaderboard
          </Link>
          <Link
            href='/about'
            className='font-semibold text-cyan-500 hover:text-cyan-700'
          >
            About
          </Link>
        </div>

        {/* Sign In/Sign Up and Toggle Theme (always visible) */}
        <div className='flex space-x-4 items-center'>
          <Link href='/signin'>
            <Button
              variant='ghost'
              className='border-b-cyan-500 rounded-xl text-cyan-500'
            >
              <UserCheck />
              <span className='text-cyan-500 font-bold p-2'>Sign In</span>
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
          className='md:hidden mt-4 absolute left-0 right-0 mx-auto border border-b-zinc-500 rounded-lg shadow-md py-2 w-48 z-50 text-cyan-500'
        >
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
