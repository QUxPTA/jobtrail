import React from 'react';

type LeaderboardItem = {
  id: number;
  username: string;
  jobsApplied: number;
  emailsRead: number;
  repliesReceived: number;
  interviews: number;
};

const leaderboardData: LeaderboardItem[] = [
  {
    id: 1,
    username: 'User1',
    jobsApplied: 10,
    emailsRead: 8,
    repliesReceived: 5,
    interviews: 2,
  },
  {
    id: 2,
    username: 'User2',
    jobsApplied: 8,
    emailsRead: 7,
    repliesReceived: 4,
    interviews: 1,
  },
  {
    id: 3,
    username: 'User3',
    jobsApplied: 6,
    emailsRead: 5,
    repliesReceived: 3,
    interviews: 1,
  },
  {
    id: 4,
    username: 'User4',
    jobsApplied: 4,
    emailsRead: 3,
    repliesReceived: 2,
    interviews: 0,
  },
  {
    id: 5,
    username: 'User5',
    jobsApplied: 2,
    emailsRead: 2,
    repliesReceived: 1,
    interviews: 0,
  },
];

const Leaderboard = () => {
  return (
    <section className='m-10'>
      <h2 className='text-cyan-500 text-3xl font-bold text-center mb-8'>
        Leaderboard
      </h2>
      <div className='container mx-auto px-4 py-2 md:py-4 md:px-8 rounded-2xl flex-col justify-between border border-b-cyan-500'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
          {leaderboardData.map((user) => (
            <div key={user.id} className='rounded-lg shadow-md p-4 md:p-6'>
              <h3 className='text-xl font-bold mb-4'>{user.username}</h3>
              <ul>
                <li className='flex justify-between items-center py-1'>
                  <span>Jobs Applied</span>
                  <span className='bg-green-200 text-green-800 px-2 py-1 rounded'>
                    {user.jobsApplied}
                  </span>
                </li>
                <li className='flex justify-between items-center py-1'>
                  <span>Emails Read</span>
                  <span className='bg-blue-200 text-blue-800 px-2 py-1 rounded'>
                    {user.emailsRead}
                  </span>
                </li>
                <li className='flex justify-between items-center py-1'>
                  <span>Replies Received</span>
                  <span className='bg-yellow-200 text-yellow-800 px-2 py-1 rounded'>
                    {user.repliesReceived}
                  </span>
                </li>
                <li className='flex justify-between items-center py-1'>
                  <span>Interviews</span>
                  <span className='bg-purple-200 text-purple-800 px-2 py-1 rounded'>
                    {user.interviews}
                  </span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
