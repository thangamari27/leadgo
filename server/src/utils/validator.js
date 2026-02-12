const { body, param } = require('express-validator');

// Validation rules
const leadValidation = [
  body('name').notEmpty().withMessage('Name is required').trim(),
  body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('phone').notEmpty().withMessage('Phone is required').trim(),
  body('company').notEmpty().withMessage('Company is required').trim(),
  body('message').notEmpty().withMessage('Message is required').trim(),
  body('source').isIn(['Website', 'Instagram', 'Referral', 'Other']).withMessage('Invalid source')
];

const idValidation = [
  param('id').isMongoId().withMessage('Invalid lead ID format')
];

module.exports = {
    leadValidation,
    idValidation,
}