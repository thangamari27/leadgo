import { useState } from 'react';
import { useLeads } from '../../context/LeadContext';
import LeadRow from './LeadRow';
import LeadCard from './LeadCard';
import LeadDetail from './LeadDetail';
import Skeleton from '../ui/Skeleton';
import { ui } from '../../utils/styles/LeadStyles';

function LeadTable() {
  const { leads, loading, apiError, selectedLead, setSelectedLead } = useLeads();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewLead = (lead) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  if (loading) {
    return <LeadTableSkeleton />;
  }

  if (apiError) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <div className="text-red-500 mb-2">⚠️ Error loading leads</div>
        <p className="text-gray-600 text-sm">{apiError}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Table View */}
      <div className="hidden md:block bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads.map((lead) => (
                <LeadRow key={lead._id || lead.id} lead={lead} onView={handleViewLead} />
              ))}
            </tbody>
          </table>
        </div>
        {leads.length === 0 && <EmptyState />}
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {leads.map((lead) => (
          <LeadCard key={lead._id || lead.id} lead={lead} onView={handleViewLead} />
        ))}
        {leads.length === 0 && <EmptyState />}
      </div>

      <LeadDetail 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lead={selectedLead}
      />
    </>
  )
}

const LeadTableSkeleton = () => (
  <div className="bg-white rounded-lg shadow-sm p-4">
    {[1, 2, 3].map((i) => (
      <div key={i} className="flex space-x-4 mb-4">
        <Skeleton styles={ui.Skeleton} className="h-12 w-12" />
        <div className="flex-1 space-y-2">
          <Skeleton styles={ui.Skeleton} className="h-4 w-1/4" />
          <Skeleton styles={ui.Skeleton} className="h-4 w-1/3" />
        </div>
      </div>
    ))}
  </div>
);

const EmptyState = () => (
  <div className="text-center py-12">
    <p className="text-gray-500">No leads yet. Create your first lead!</p>
  </div>
);

export default LeadTable;