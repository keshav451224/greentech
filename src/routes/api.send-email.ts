import { json } from '@tanstack/react-start';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  area?: string;
  requirement: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.fullName || !body.email || !body.phone || !body.requirement) {
      return json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email content for company
    const companyEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #16a34a; border-bottom: 3px solid #16a34a; padding-bottom: 10px;">
          New Consultation Request
        </h2>
        
        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #15803d; margin-top: 0;">Customer Information</h3>
          
          <p style="margin: 10px 0;">
            <strong>Name:</strong> ${escapeHtml(body.fullName)}
          </p>
          <p style="margin: 10px 0;">
            <strong>Email:</strong> <a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a>
          </p>
          <p style="margin: 10px 0;">
            <strong>Phone:</strong> <a href="tel:${escapeHtml(body.phone)}">${escapeHtml(body.phone)}</a>
          </p>
          
          ${body.area ? `
            <p style="margin: 10px 0;">
              <strong>Area (sq ft):</strong> ${escapeHtml(body.area)}
            </p>
          ` : ''}
          
          <h3 style="color: #15803d; margin-top: 20px;">Requirement</h3>
          <p style="margin: 10px 0; line-height: 1.6; white-space: pre-wrap;">
            ${escapeHtml(body.requirement)}
          </p>
        </div>

        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0; font-size: 12px;">
          <p style="margin: 0; color: #666;">
            This is an automated message from the GreenTech Solution website contact form.
            <br/>
            Please contact the customer within 24 hours.
          </p>
        </div>
      </div>
    `;

    // Email content for customer confirmation
    const customerEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #16a34a; margin: 0;">GreenTech Solution</h1>
          <p style="color: #666; margin: 5px 0;">Premium Green Wall Solutions</p>
        </div>

        <h2 style="color: #16a34a; border-bottom: 3px solid #16a34a; padding-bottom: 10px;">
          Thank You for Your Inquiry
        </h2>
        
        <p style="font-size: 16px; line-height: 1.6; margin: 20px 0;">
          Hello <strong>${escapeHtml(body.fullName)}</strong>,
        </p>

        <p style="font-size: 16px; line-height: 1.6; margin: 20px 0;">
          We've received your consultation request and appreciate your interest in GreenTech Solution's green wall services. 
          Our team will review your requirements and get back to you within 24 hours.
        </p>

        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #15803d; margin-top: 0;">Your Information:</h3>
          <p style="margin: 10px 0;"><strong>Name:</strong> ${escapeHtml(body.fullName)}</p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> ${escapeHtml(body.phone)}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${escapeHtml(body.email)}</p>
        </div>

        <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a;">
          <h3 style="color: #15803d; margin-top: 0;">What's Next?</h3>
          <ul style="margin: 10px 0; padding-left: 20px;">
            <li style="margin: 8px 0;">Our design team will analyze your requirements</li>
            <li style="margin: 8px 0;">We'll prepare a customized quote for you</li>
            <li style="margin: 8px 0;">You'll receive a call or email within 24 hours</li>
          </ul>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <h3 style="color: #15803d;">Contact Information</h3>
          <p style="margin: 8px 0;">
            <strong>Phone:</strong> <a href="tel:08043880537" style="color: #16a34a;">08043880537</a>
          </p>
          <p style="margin: 8px 0;">
            <strong>Email:</strong> <a href="mailto:hello@greentechsolution.in" style="color: #16a34a;">hello@greentechsolution.in</a>
          </p>
          <p style="margin: 8px 0;">
            <strong>Address:</strong> 12 - B, KH No-34/24, Dilip Vihar, Nilothi Extt, Delhi, West New Delhi - 110041, Delhi, India
          </p>
        </div>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #666; font-size: 12px;">
          <p style="margin: 0;">
            © 2025 GreenTech Solution Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    `;

    // Mock email sending - In production, connect to your email service
    console.log('Contact form submission:');
    console.log({
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      area: body.area,
      requirement: body.requirement,
      timestamp: new Date().toISOString()
    });

    // Return success response
    return json({
      success: true,
      message: 'Thank you! Your consultation request has been received. We will contact you within 24 hours.',
      data: {
        name: body.fullName,
        email: body.email,
        phone: body.phone
      }
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
