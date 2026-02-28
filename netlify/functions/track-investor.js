// Netlify Function to track investor access
// This logs investor visits to a Google Sheet for tracking

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { email, timestamp, userAgent, action } = data;

    // TODO: Connect to Google Sheets API
    // For now, just log the data
    console.log('Investor tracking:', {
      email,
      timestamp,
      userAgent,
      action,
      ip: event.headers['x-forwarded-for'] || event.headers['client-ip']
    });

    // In production, you would:
    // 1. Use Google Sheets API with service account
    // 2. Append row to tracking spreadsheet
    // 3. Include: email, timestamp, IP, user agent, action

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error('Error tracking investor:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};

