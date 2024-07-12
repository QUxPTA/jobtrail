import React from 'react';
import LikeButton from './LikeButton';
import ShareButton from './ShareButton';
import CommentSection from './CommentSection';
import Image from 'next/image';
import { Share2, ThumbsUp } from 'lucide-react';

const Post = ({ user }: { user: string }) => {
  return (
    <div className='p-4 rounded-lg shadow-lg border border-b-cyan-500'>
      <div className='flex items-center mb-2'>
        <Image
          src='/user.svg'
          alt={`${user} profile`}
          className='w-8 h-8 rounded-full mr-2'
          width={24}
          height={24}
        />
        <span className='font-semibold'>{user}</span>
      </div>
      <h2 className='text-xl font-semibold mb-2'>Job Opening Title</h2>
      <p className='mb-4'>
        Details about the job opening or application progress...
      </p>
      <div className='flex items-center space-x-4 mb-2'>
        {/* Example tags */}
        <span className='px-2 py-1 rounded-md'>#tag1</span>
        <span className='px-2 py-1 rounded-md'>#tag2</span>
      </div>
      <div className='flex items-center space-x-4'>
        <span className='flex flex-row'>
          <ThumbsUp />
          <LikeButton />
        </span>
        <span className='flex flex-row'>
          <Share2 /> <ShareButton />
        </span>
      </div>
      <CommentSection />
    </div>
  );
};

export default Post;
