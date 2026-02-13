const { validationResult } = require('express-validator');
const leadService = require('../service/leadService');
const webhookService = require('../service/webhookService');

class LeadController {
  // POST /api/leads
  async createLead(req, res) {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const result = await leadService.createLead(req.body);
    
    if (!result.success) {
      return res.status(400).json({ message: result.error });
    }
    
    const newLead = result.data;

    // Trigger webhook asynchronously - don't await, don't block response
    webhookService.sendLeadToWebhook(newLead).catch(error => {
      console.error('Webhook failed:', error.message);
    });
    
    res.status(201).json({
      message: 'Lead created successfully',
      lead: newLead
    });
  }

  // GET /api/leads
  async getAllLeads(req, res) {
    const result = await leadService.getAllLeads();
    
    if (!result.success) {
      return res.status(500).json({ message: result.error });
    }
    
    res.status(200).json({
      count: result.data.length,
      leads: result.data
    });
  }

  // GET /api/leads/:id
  async getLeadById(req, res) {
    const result = await leadService.getLeadById(req.params.id);
    
    if (!result.success) {
      return res.status(404).json({ message: result.error });
    }
    
    res.status(200).json(result.data);
  }
}

module.exports = new LeadController();