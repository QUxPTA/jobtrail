import React from 'react';
import Navbar from './Navbar';

type Props = {};

const NavbarContainer = (props: Props) => {
  return (
    <div className='w-full h-full flex justify-center items-center sticky top-0 z-20'>
      <Navbar />
    </div>
  );
};

export default NavbarContainer;
