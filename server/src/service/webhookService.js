class WebhookService {
  constructor() {
    this.webhookUrl = process.env.WEBHOOK_SITE_URL;
    this.timeout = parseInt(process.env.WEBHOOK_TIMEOUT) || 5000;
  }

  async sendLeadToWebhook(leadData) {
    // Skip if no URL configured
    if (!this.webhookUrl) {
      return {
        success: false,
        status: 'not_configured',
        message: 'Webhook URL not configured'
      };
    }

    const payload = {
      name: leadData.name,
      email: leadData.email,
      source: leadData.source,
      created_at: leadData.createdDate || new Date().toISOString(),
      company: leadData.company,
      phone: leadData.phone,
      message: leadData.message
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      return {
        success: response.ok,
        status: response.status,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      clearTimeout(timeoutId);
      
      return {
        success: false,
        status: error.name === 'AbortError' ? 'timeout' : 'error',
        message: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }
}

module.exports = new WebhookService();