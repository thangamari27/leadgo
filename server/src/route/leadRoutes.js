const express = require('express');
const { leadValidation, idValidation } = require('../utils/validator')
const leadController = require('../controller/leadController');

const router = express.Router();

// Routes
router.post('/', leadValidation, leadController.createLead);
router.get('/', leadController.getAllLeads);
router.get('/:id', idValidation, leadController.getLeadById);

module.exports = router;