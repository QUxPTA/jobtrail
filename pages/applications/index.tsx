'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/ui/Sidebar';
import ApplicationItem from '@/components/applications/ApplicationItem';
import ApplicationForm from '@/components/applications/ApplicationForm';
import SearchBar from '@/components/applications/SearchBar';
import SidebarSort from '@/components/applications/SidebarSort';
import { getSession } from '@/lib/getSession';
import { GetServerSideProps } from 'next';

interface Application {
  _id: string;
  userId: string;
  companyName: string;
  position: string;
  status: string;
  emailResponse: string;
  manualResponse?: string;
  appliedDate: string;
  notes: string;
}

interface ApplicationsPageProps {
  userId: string | null;
}

const ApplicationsPage: React.FC<ApplicationsPageProps> = ({ userId }) => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!userId) {
      setShowPopup(true);
      setTimeout(() => {
        router.push('/'); // Redirect after showing the popup ( if not logged in )
      }, 3000);
    } else {
      const fetchApplications = async () => {
        try {
          const response = await fetch(`/api/applications?userId=${userId}`);
          const data: Application[] = await response.json();
          setApplications(data);
        } catch (error) {
          console.error('Error fetching applications:', error);
        }
      };
      fetchApplications();
    }
  }, [userId, router]);

  const handleAddApplication = (application: Application) => {
    setApplications((prevApplications) => [...prevApplications, application]);
    setIsFormOpen(false);
  };

  const handleEditApplication = (updatedApplication: Application) => {
    setApplications((prevApplications) =>
      prevApplications.map((app) =>
        app._id === updatedApplication._id ? updatedApplication : app
      )
    );
    setIsFormOpen(false);
  };

  const handleDeleteApplication = async (id: string) => {
    try {
      const response = await fetch(`/api/applications/delete?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setApplications((prevApplications) =>
          prevApplications.filter((application) => application._id !== id)
        );
        alert('Application deleted successfully!');
      } else {
        const errorData = await response.json();
        console.error(errorData.message);
      }
    } catch (error) {
      console.error('Error deleting application:', error);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (status: string) => {
    setFilterStatus(status);
  };

  const handleSort = (key: string) => {
    setSortKey(key);
  };

  const filteredApplications = applications
    .filter((app) => {
      if (!app.position || !app.companyName) return false;
      return (
        app.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.companyName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .filter((app) => (filterStatus ? app.status === filterStatus : true))
    .sort((a, b) => {
      if (sortKey === 'date') {
        return (
          new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime()
        );
      } else if (sortKey === 'company') {
        return a.companyName.localeCompare(b.companyName);
      } else if (sortKey === 'status') {
        return a.status.localeCompare(b.status);
      }
      return 0;
    });

  return (
    <>
      {showPopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-gradient-to-t from-cyan-500 to-zinc-600 bg-opacity-70'>
          <div className='p-4 font-extrabold rounded-lg'>
            <p>You need to be signed in to view this page.</p>
          </div>
        </div>
      )}
      <Sidebar title='Applications'>
        <div className='max-w-5xl mx-auto p-4'>
          <h2 className='text-2xl text-center font-bold mb-4'>
            My Applications
          </h2>
          <button
            className='mt-4 mb-4 w-full bg-cyan-500 py-2 px-4 rounded-lg hover:bg-cyan-700'
            onClick={() => {
              setSelectedApplication(null);
              setIsFormOpen(true);
            }}
          >
            Add Application
          </button>
          <SearchBar onSearch={handleSearch} />
          <SidebarSort onSort={handleSort} onFilter={handleFilter} />
          <div className='flex flex-wrap -mx-2'>
            {filteredApplications.length === 0 ? (
              <p className='w-full text-center text-lg text-gray-500'>
                No Applications Found
              </p>
            ) : (
              filteredApplications.map((application) => (
                <div
                  key={application._id}
                  className='w-full md:w-1/3 px-2 mb-4'
                >
                  <ApplicationItem
                    application={application}
                    onEdit={(application) => {
                      setSelectedApplication(application);
                      setIsFormOpen(true);
                    }}
                    onDelete={handleDeleteApplication}
                  />
                </div>
              ))
            )}
          </div>
          {isFormOpen && (
            <ApplicationForm
              application={selectedApplication}
              onAdd={handleAddApplication}
              onEdit={handleEditApplication}
              onClose={() => setIsFormOpen(false)}
              userId={userId}
            />
          )}
        </div>
      </Sidebar>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context.req, context.res);

  if (!session || !session.user || !session.user.id) {
    return {
      props: {
        userId: null, // Set userId to null if it's undefined
      },
    };
  }

  return {
    props: {
      userId: session.user.id,
    },
  };
};

export default ApplicationsPage;
