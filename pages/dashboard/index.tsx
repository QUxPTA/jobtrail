import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/ui/Sidebar';
import { getSession } from '@/lib/getSession';
import { useRouter } from 'next/router';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const Dashboard = ({ session }) => {
  const [applications, setApplications] = useState([]);
  const [timeRange, setTimeRange] = useState('week');
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/login');
    } else {
      fetchApplications(session.user.id);
    }
  }, [session, router]);

  const fetchApplications = async (userId) => {
    try {
      const response = await fetch(`/api/applications?userID=${userId}`);
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!session) {
    return null;
  }

  const statusCounts = applications.reduce((acc, app) => {
    acc[app.status] = (acc[app.status] || 0) + 1;
    return acc;
  }, {});

  const emailResponseCounts = applications.reduce((acc, app) => {
    acc[app.emailResponse] = (acc[app.emailResponse] || 0) + 1;
    return acc;
  }, {});

  const manualResponseCounts = applications.reduce((acc, app) => {
    if (app.emailResponse === 'manual') {
      acc[app.manualResponse] = (acc[app.manualResponse] || 0) + 1;
    }
    return acc;
  }, {});

  const applicationsPerDay = applications.reduce((acc, app) => {
    const date = new Date(app.appliedDate).toLocaleDateString();
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const filteredDates = Object.keys(applicationsPerDay)
    .sort((a, b) => new Date(a) - new Date(b))
    .filter((date) => {
      const now = new Date();
      const applicationDate = new Date(date);
      if (timeRange === 'week') {
        const weekAgo = new Date(now.setDate(now.getDate() - 7));
        return applicationDate >= weekAgo;
      } else if (timeRange === 'month') {
        const monthAgo = new Date(now.setMonth(now.getMonth() - 1));
        return applicationDate >= monthAgo;
      } else if (timeRange === 'year') {
        const yearAgo = new Date(now.setFullYear(now.getFullYear() - 1));
        return applicationDate >= yearAgo;
      }
      return true;
    });

  const barData = {
    labels: filteredDates,
    datasets: [
      {
        label: 'Applications Added',
        data: filteredDates.map((date) => applicationsPerDay[date]),
        backgroundColor: '#36A2EB',
      },
    ],
  };

  const statusData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#FFCD56',
        ],
      },
    ],
  };

  const emailResponseData = {
    labels: Object.keys(emailResponseCounts),
    datasets: [
      {
        data: Object.values(emailResponseCounts),
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const manualResponseData = {
    labels: Object.keys(manualResponseCounts),
    datasets: [
      {
        data: Object.values(manualResponseCounts),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <Sidebar title='Dashboard'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='p-6 rounded-lg shadow-2xl border border-b-cyan-500'>
          <h2 className='text-xl font-bold mb-4'>Statistics</h2>
          <p>Here you can see your job application statistics.</p>
          <Pie data={statusData} />
        </div>
        <div className='p-6 rounded-lg shadow-2xl border border-b-cyan-500'>
          <h2 className='text-xl font-bold mb-4'>Email Responses</h2>
          <p>Distribution of autoresponse and manual responses.</p>
          <Pie data={emailResponseData} />
        </div>
        {Object.keys(manualResponseCounts).length > 0 && (
          <div className='p-6 rounded-lg shadow-2xl border border-b-cyan-500'>
            <h2 className='text-xl font-bold mb-4'>Manual Responses</h2>
            <p>Distribution of tones in manual responses.</p>
            <Pie data={manualResponseData} />
          </div>
        )}
        <div className='p-6 rounded-lg shadow-2xl border border-b-cyan-500 md:col-span-2 lg:col-span-3'>
          <h2 className='text-xl font-bold mb-4'>
            Applications Added Over Time
          </h2>
          <div className='flex justify-between mb-4'>
            <button
              className={`py-2 px-4 rounded-lg ${
                timeRange === 'week' ? 'bg-cyan-500' : 'bg-cyan-300'
              }`}
              onClick={() => setTimeRange('week')}
            >
              Week
            </button>
            <button
              className={`py-2 px-4 rounded-lg ${
                timeRange === 'month' ? 'bg-cyan-500' : 'bg-cyan-300'
              }`}
              onClick={() => setTimeRange('month')}
            >
              Month
            </button>
            <button
              className={`py-2 px-4 rounded-lg ${
                timeRange === 'year' ? 'bg-cyan-500' : 'bg-cyan-300'
              }`}
              onClick={() => setTimeRange('year')}
            >
              Year
            </button>
          </div>
          <Bar data={barData} />
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
