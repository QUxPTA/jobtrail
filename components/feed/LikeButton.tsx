import React from 'react';

const LikeButton = () => {
  const handleLike = () => {
    // Like functionality goes here
    alert('Liked!');
  };

  return (
    <button onClick={handleLike} className='text-cyan-500 hover:text-cyan-600'>
      Like
    </button>
  );
};

export default LikeButton;
