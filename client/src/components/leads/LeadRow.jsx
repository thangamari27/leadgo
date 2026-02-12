import React from 'react'
import Button from '../ui/Button'
import { ui } from '../../utils/styles/LeadStyles';

function LeadRow({ content, lead, onView, styles }) {
   const formattedDate = lead.createdDate ? new Date(lead.createdDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }) : 'N/A';

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{lead.name}</div>
        <div className="text-sm text-gray-500">{lead.company}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{lead.email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
          {lead.source}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {formattedDate}
      </td>
      <td className="pr-6 py-4 whitespace-nowrap text-sm font-medium">
        <Button
          variant="success"
          onClick={() => onView(lead)}
          styles={ui.Button}
        >
          View
        </Button>
      </td>
    </tr>
  )
}

export default LeadRow