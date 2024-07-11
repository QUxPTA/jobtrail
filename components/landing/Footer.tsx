import React from 'react';
import { Globe, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-zinc-600 to-cyan-500 py-8 rounded-sm'>
      <div className='container mx-auto px-4 '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
          <div>
            <h3 className='text-xl font-bold mb-2'>JobTrail</h3>
            <p className='text-sm'>
              A tool created with gratitude for the ALX community and job
              seekers in general
            </p>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-2'>Links</h3>
            <ul className='text-sm space-y-2'>
              <li>
                <a
                  href='#about'
                  className='hover:text-cyan-200 transition duration-300'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#team'
                  className='hover:text-cyan-200 transition duration-300'
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='hover:text-cyan-200 transition duration-300'
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-2'>Social Media</h3>
            <div className='flex space-x-4'>
              <a
                href='https://github.com/kibuchijw'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github className='w-6 h-6 hover:text-cyan-200 transition duration-300' />
              </a>
              <a
                href='https://www.linkedin.com/in/joseph-k-25a17a78/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin className='w-6 h-6 hover:text-cyan-200 transition duration-300' />
              </a>
              <a
                href='https://twitter.com/quxpta'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Twitter className='w-6 h-6 hover:text-cyan-200 transition duration-300' />
              </a>
              <a
                href='https://quxpta.tech'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Globe className='w-6 h-6 hover:text-cyan-200 transition duration-300' />
              </a>
            </div>
          </div>
        </div>
        <div className='text-center mt-8'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} JobTrail. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
