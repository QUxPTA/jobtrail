import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className='mt-4'>
      <h3 className='text-lg font-semibold mb-2'>Comments</h3>
      <div className='space-y-2'>
        {comments.map((comment, index) => (
          <div key={index} className=' p-2 rounded-md'>
            {comment}
          </div>
        ))}
      </div>
      <div className='mt-2 flex items-center space-x-2'>
        <input
          type='text'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className='flex-1 px-3 py-2 rounded-lg border border-b-cyan-500 border-cyan-300'
          placeholder='Add a comment...'
        />
        <button
          onClick={handleAddComment}
          className='bg-cyan-500 px-4 py-2 rounded-lg'
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
