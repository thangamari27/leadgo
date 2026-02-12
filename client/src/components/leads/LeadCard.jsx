import React from 'react';
import Button from '../ui/Button';
import { ui } from '../../utils/styles/LeadStyles';

function LeadCard({ lead, onView }) {
  const formattedDate = lead.createdDate ? new Date(lead.createdDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }) : 'N/A';

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold text-gray-900">{lead.name}</h3>
          <p className="text-sm text-gray-600">{lead.company}</p>
        </div>
        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
          {lead.source}
        </span>
      </div>
      
      <div className="space-y-1 mb-3">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Email:</span> {lead.email}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Created:</span> {formattedDate}
        </p>
      </div>
      
      <Button
        variant="success"
        onClick={() => onView(lead)}
        styles={ui.Button}
      >
        View Details
      </Button>
    </div>
  )
}

export default LeadCard