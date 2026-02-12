import React from 'react';
import Modal from '../ui/Modal';
import { ui } from '../../utils/styles/LeadStyles';

function LeadDetail({ content, isOpen, onClose, lead, styles }) {
  if (!lead) return null;

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const DetailRow = ({ label, value }) => (
    <div className="mb-3">
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900 break-words">{value || 'N/A'}</dd>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Lead Details" styles={ui.Modal}>
      <div className="space-y-4">
        <dl className="divide-y divide-gray-100">
          <DetailRow label="Full Name" value={lead.name} />
          <DetailRow label="Email" value={lead.email} />
          <DetailRow label="Phone" value={lead.phone} />
          <DetailRow label="Company" value={lead.company} />
          <DetailRow label="Source" value={lead.source} />
          <DetailRow label="Message" value={lead.message} />
          <DetailRow label="Created Date" value={formatDate(lead.createdDate)} />
        </dl>
      </div>
    </Modal>
  )
}

export default LeadDetail