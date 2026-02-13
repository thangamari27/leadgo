import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import leadApi from '../api/leadApi';

const LeadContext = createContext();

export const useLeads = () => {
  const context = useContext(LeadContext);
  if (!context) throw new Error('useLeads must be used within LeadProvider');
  return context;
};

export const LeadProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState(null);
  const [apiError, setApiError] = useState(null);

  const loadLeads = useCallback(async () => {
    setLoading(true);
    setApiError(null);
    try {
      const data = await leadApi.fetchLeads();
      setLeads(data);
    } catch (error) {
      setApiError(error.message);
      console.error('Failed to load leads:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadLeads();
  }, [loadLeads]);

  const addLead = async (leadData) => {
    try {
      const newLead = await leadApi.createLead(leadData);
      setLeads(prev => [newLead, ...prev]);
      return newLead;
    } catch (error) {
      console.error('Failed to add lead:', error);
      throw error;
    }
  };

  const getLeadById = async (id) => {
    try {
      const lead = await leadApi.fetchLeadById(id);
      return lead;
    } catch (error) {
      console.error('Failed to fetch lead:', error);
      throw error;
    }
  };

  const value = {
    leads,
    loading,
    apiError,
    selectedLead,
    setSelectedLead,
    addLead,
    getLeadById,
    refreshLeads: loadLeads
  };

  return <LeadContext.Provider value={value}>{children}</LeadContext.Provider>;
};