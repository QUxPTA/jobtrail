import React from 'react';

const ShareButton = () => {
  const handleShare = () => {
    // Share functionality goes here
    alert('Shared!');
  };

  return (
    <button onClick={handleShare} className='text-cyan-500 hover:text-cyan-600'>
      Share
    </button>
  );
};

export default ShareButton;
