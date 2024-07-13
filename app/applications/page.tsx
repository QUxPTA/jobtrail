'use client';
import React, { useState } from 'react';
import Sidebar from '../../components/ui/Sidebar';
import SearchBar from '../../components/applications/SearchBar';
import FilterOptions from '../../components/applications/FilterOptions';
import SidebarSort from '../../components/applications/SidebarSort';
import ApplicationList from '../../components/applications/ApplicationList';
import ApplicationForm from '../../components/applications/ApplicationForm';

const ApplicationsPage = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [sortKey, setSortKey] = useState('');

  const handleAddApplication = (application) => {
    setApplications([...applications, application]);
  };

  const handleEditApplication = (updatedApplication) => {
    setApplications(
      applications.map((app) =>
        app.id === updatedApplication.id ? updatedApplication : app
      )
    );
  };

  const handleDeleteApplication = (id) => {
    setApplications(applications.filter((app) => app.id !== id));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilter = (status) => {
    setFilterStatus(status);
  };

  const handleSort = (key) => {
    setSortKey(key);
  };

  const filteredApplications = applications
    .filter(
      (app) =>
        app.jobTitle.includes(searchQuery) || app.company.includes(searchQuery)
    )
    .filter((app) => (filterStatus ? app.status === filterStatus : true))
    .sort((a, b) => {
      if (sortKey === 'date') {
        return new Date(b.applicationDate) - new Date(a.applicationDate);
      } else if (sortKey === 'company') {
        return a.company.localeCompare(b.company);
      } else if (sortKey === 'status') {
        return a.status.localeCompare(b.status);
      }
      return 0;
    });

  return (
    <Sidebar title='Applications'>
      <div className='max-w-5xl mx-auto p-4'>
        <h2 className='text-2xl font-bold mb-4'>My Applications</h2>
        <SearchBar onSearch={handleSearch} />
        <FilterOptions onFilter={handleFilter} />
        <SidebarSort onSort={handleSort} />
        <ApplicationList
          applications={filteredApplications}
          onEdit={setSelectedApplication}
          onDelete={handleDeleteApplication}
        />
        {isFormOpen && (
          <ApplicationForm
            application={selectedApplication}
            onAdd={handleAddApplication}
            onEdit={handleEditApplication}
            onClose={() => setIsFormOpen(false)}
          />
        )}
        <button
          className='mt-4 w-full bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600'
          onClick={() => {
            setSelectedApplication(null);
            setIsFormOpen(true);
          }}
        >
          Add Application
        </button>
      </div>
    </Sidebar>
  );
};

export default ApplicationsPage;
