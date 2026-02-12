const API_BASE_URL = import.meta.env.VITE_API_URL;

class LeadApiService {
  // Helper method for handling responses
  async handleResponse(response) {
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || 'API request failed');
    }
    return response.json();
  }

  // GET all leads
  async fetchLeads() {
    try {
      const response = await fetch(`${API_BASE_URL}/leads`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await this.handleResponse(response);
      return data.leads || data;
    } catch (error) {
      console.error('Fetch leads error:', error);
      throw error;
    }
  }

  // POST new lead
  async createLead(leadData) {
    try {
      const response = await fetch(`${API_BASE_URL}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });
      const data = await this.handleResponse(response);
      return data.lead || data;
    } catch (error) {
      console.error('Create lead error:', error);
      throw error;
    }
  }

  // GET single lead by ID
  async fetchLeadById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/leads/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return this.handleResponse(response);
    } catch (error) {
      console.error('Fetch lead by ID error:', error);
      throw error;
    }
  }
}

export default new LeadApiService();