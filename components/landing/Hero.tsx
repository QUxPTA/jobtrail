import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { LogIn } from 'lucide-react';

const Hero = () => {
  return (
    <section className='relative h-96 md:h-screen rounded-2xl border border-b-cyan-500 m-10 bg-hero-pattern bg-cover bg-center flex flex-col justify-center items-center text-center p-4'>
      <div className='bg-zinc-900 bg-opacity-60 w-full h-full absolute top-0 left-0 rounded-xl'></div>
      <div className='relative'>
        <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-500'>
          Track Your Job Applications
        </h1>
        <p className='text-lg md:text-xl lg:text-2xl mb-8'>
          Stay organized and never miss an opportunity. Join JobTrail today!
        </p>
        <Link href='/signup'>
          <Button variant='ghost' className='text-lg font-bold bg-cyan-500'>
            <LogIn />
            <span className='p-2'>Sign Up Now</span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
