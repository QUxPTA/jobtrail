'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import NavbarContainer from '@/components/navigation/NavbarContainer';

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const showNavbar =
    !pathname.startsWith('/dashboard') &&
    !pathname.startsWith('/feed') &&
    !pathname.startsWith('/profile');

  return (
    <>
      {showNavbar && <NavbarContainer />}
      {children}
    </>
  );
};
