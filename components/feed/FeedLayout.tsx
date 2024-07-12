import React, { useEffect, useState } from 'react';
import Post from './Post';
import SidebarSort from './SidebarSort';
import Popup from '../ui/Popup';
import Sidebar from '../ui/Sidebar';

const FeedLayout = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 300000); // 5 minutes timeout

    return () => clearTimeout(timer);
  }, []);

  return (
    <Sidebar title='Job-Feed'>
      <div className='container mx-auto px-4 py-8 flex'>
        <div className='flex-1 mx-8'>
          <h1 className='text-3xl font-bold mb-4 text-center text-cyan-500'>
            Job Feed
          </h1>
          <h2 className='text-center text-lg text-cyan-500'>
            Be your Brother&apos;s keeper, share a job!
          </h2>
          <div className='space-y-4'>
            {/* Example posts, temporary*/}
            <Post user='User1' />
            <Post user='User2' />
            <Post user='User3' />
          </div>
          {showPopup && <Popup />}
        </div>
        <SidebarSort />
      </div>
    </Sidebar>
  );
};

export default FeedLayout;
