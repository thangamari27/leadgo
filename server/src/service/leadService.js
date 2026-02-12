const Lead = require('../model/lead');

class LeadService {
  // Create new lead
  async createLead(leadData) {
    try {
      const lead = new Lead(leadData);
      await lead.save();
      return { success: true, data: lead };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Get all leads (sorted by newest first)
  async getAllLeads() {
    try {
      const leads = await Lead.find().sort({ createdDate: -1 });
      return { success: true, data: leads };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Get single lead by ID
  async getLeadById(id) {
    try {
      const lead = await Lead.findById(id);
      if (!lead) {
        return { success: false, error: 'Lead not found' };
      }
      return { success: true, data: lead };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

module.exports = new LeadService();