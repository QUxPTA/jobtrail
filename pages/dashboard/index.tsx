import React, { useEffect } from 'react';
import Sidebar from '@/components/ui/Sidebar';
import { getSession } from '@/lib/getSession';
import { useRouter } from 'next/router';

const Dashboard = ({ session }) => {
  const user = session?.user;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);
  return (
    <Sidebar title='Dashboard'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='p-6 rounded-lg shadow-2xl border border-b-cyan-500'>
          <h2 className='text-xl font-bold mb-4'>Statistics</h2>
          <p>Here you can see your job application statistics.</p>
        </div>
        <div className='p-6 rounded-lg shadow-2xl border border-b-cyan-500'>
          <h2 className='text-xl font-bold mb-4'>Recent Activity</h2>
          <p>Your recent job application activities will be displayed here.</p>
        </div>
        <div className='p-6 rounded-lg shadow-2xl border border-b-cyan-500'>
          <h2 className='text-xl font-bold mb-4'>Notifications</h2>
          <p>Latest notifications and alerts will appear here.</p>
        </div>
      </div>
    </Sidebar>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context.req, context.res);
  return {
    props: {
      session,
    },
  };
};

export default Dashboard;
