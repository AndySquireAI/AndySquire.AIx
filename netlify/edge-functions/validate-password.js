// Netlify Edge Function for secure password validation
// This keeps the password server-side only

export default async (request, context) => {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { password } = await request.json();
    const correctPassword = Deno.env.get('INVESTOR_PASS') || 'CHANGE_ME_IN_NETLIFY';

    // Validate password
    const isValid = password === correctPassword;

    return new Response(JSON.stringify({ valid: isValid }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const config = {
  path: '/api/validate-password'
};

