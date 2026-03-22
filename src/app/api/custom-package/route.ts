import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      name,
      email,
      phone,
      packageType,
      destination,
      departureDate,
      returnDate,
      numberOfTravelers,
      budget,
      specialRequests,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !packageType || !destination || !departureDate || !returnDate || !numberOfTravelers) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter with Gmail
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "lunarwaytravels00@gmail.com",
      subject: `New Custom Package Request - ${packageType} to ${destination}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #C9A96E 0%, #B8A073 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .section { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; border-left: 4px solid #C9A96E; }
            .section h2 { margin-top: 0; color: #1A1A18; font-size: 18px; }
            .field { margin-bottom: 12px; }
            .field strong { color: #1A1A18; display: inline-block; width: 180px; }
            .footer { text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #777; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">🌍 New Custom Package Request</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Lunarway Travels</p>
            </div>
            
            <div class="content">
              <div class="section">
                <h2>👤 Personal Information</h2>
                <div class="field"><strong>Name:</strong> ${name}</div>
                <div class="field"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></div>
                <div class="field"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></div>
                <div class="field"><strong>Number of Travelers:</strong> ${numberOfTravelers}</div>
              </div>

              <div class="section">
                <h2>✈️ Travel Details</h2>
                <div class="field"><strong>Package Type:</strong> ${packageType === 'inbound' ? '🏝️ Inbound (Sri Lanka)' : '🌏 Outbound (International)'}</div>
                <div class="field"><strong>Destination:</strong> ${destination}</div>
                <div class="field"><strong>Departure Date:</strong> ${new Date(departureDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <div class="field"><strong>Return Date:</strong> ${new Date(returnDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <div class="field"><strong>Duration:</strong> ${Math.ceil((new Date(returnDate).getTime() - new Date(departureDate).getTime()) / (1000 * 60 * 60 * 24))} days</div>
                <div class="field"><strong>Budget Range:</strong> ${budget || 'Not specified'}</div>
              </div>

              ${specialRequests ? `
              <div class="section">
                <h2>📝 Special Requests</h2>
                <p style="margin: 0; white-space: pre-wrap;">${specialRequests}</p>
              </div>
              ` : ''}

             

              <div class="footer">
                <p>Submitted on ${new Date().toLocaleString('en-US', { 
                  timeZone: 'Asia/Colombo',
                  dateStyle: 'full',
                  timeStyle: 'long'
                })}</p>
                <p>Lunarway Travels - Custom Package System</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Log success
    console.log(`✅ Custom package request sent to lunarwaytravels00@gmail.com from ${email}`);
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASSWORD:", process.env.EMAIL_PASSWORD ? "SET" : "NOT SET");

    return NextResponse.json({
      success: true,
      message: "Package request submitted successfully",
    });

  } catch (error) {
    console.error("❌ Custom package submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send request. Please try again." },
      { status: 500 }
    );
  }
}