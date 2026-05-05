import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Package details mapping
const packageDetails: Record<string, { name: string; description: string }> = {
  malaysia: { 
    name: "Malaysia Tour Package", 
    description: "Experience the perfect blend of modern cities, cultural heritage, and tropical beaches." 
  },
  thailand: { 
    name: "Thailand Tour Package", 
    description: "Discover stunning temples, vibrant street life, and pristine beaches." 
  },
  dubai: { 
    name: "Dubai Tour Package", 
    description: "Experience luxury, futuristic architecture, and desert adventures." 
  },
  myanmar: { 
    name: "Myanmar Tour Package", 
    description: "Ancient temples, royal capitals, and sacred landscapes await." 
  },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      name,
      email,
      phone,
      departureDate,
      returnDate,
      numberOfTravelers,
      specialRequests,
      packageSlug,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !departureDate || !returnDate || !numberOfTravelers || !packageSlug) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const packageInfo = packageDetails[packageSlug as keyof typeof packageDetails];
    if (!packageInfo) {
      return NextResponse.json(
        { success: false, error: "Invalid package" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Calculate trip duration
    const duration = Math.ceil(
      (new Date(returnDate).getTime() - new Date(departureDate).getTime()) / (1000 * 60 * 60 * 24)
    );

    // ────────────────────────────────────────────────────────────────────────
    // EMAIL 1: Confirmation to Customer
    // ────────────────────────────────────────────────────────────────────────
    const customerEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Booking Confirmed - ${packageInfo.name} | Lunarway Travels`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #C9A96E 0%, #B8A073 100%); color: white; padding: 40px 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .section { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; border-left: 4px solid #C9A96E; }
            .section h2 { margin-top: 0; color: #1A1A18; font-size: 18px; }
            .field { margin-bottom: 12px; }
            .field strong { color: #1A1A18; display: inline-block; width: 150px; }
            .checkmark { color: #4CAF50; font-size: 48px; margin-bottom: 10px; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #777; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="checkmark">✓</div>
              <h1 style="margin: 0; font-size: 28px;">Booking Confirmed!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for choosing Lunarway Travels</p>
            </div>
            
            <div class="content">
              <p style="margin-top: 0;">Dear ${name},</p>
              <p>
                We're thrilled to confirm your booking for <strong>${packageInfo.name}</strong>! 
                Your journey is officially reserved, and we can't wait to help you create unforgettable memories.
              </p>

              <div class="section">
                <h2>📋 Booking Summary</h2>
                <div class="field"><strong>Package:</strong> ${packageInfo.name}</div>
                <div class="field"><strong>Travelers:</strong> ${numberOfTravelers} ${parseInt(numberOfTravelers) === 1 ? 'person' : 'people'}</div>
                <div class="field"><strong>Departure:</strong> ${new Date(departureDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <div class="field"><strong>Return:</strong> ${new Date(returnDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <div class="field"><strong>Duration:</strong> ${duration} days</div>
              </div>

              ${specialRequests ? `
              <div class="section">
                <h2>📝 Your Special Requests</h2>
                <p style="margin: 0; white-space: pre-wrap;">${specialRequests}</p>
              </div>
              ` : ''}

              <div class="section" style="background: #f0f8ff; border-left-color: #4CAF50;">
                <h2>✅ What Happens Next?</h2>
                <ol style="margin: 0; padding-left: 20px;">
                  <li>Our travel coordinator will review your booking within 24 hours</li>
                  <li>You'll receive a detailed itinerary via email</li>
                  <li>We'll send payment instructions and booking confirmation</li>
                  <li>Feel free to contact us anytime for questions or changes</li>
                </ol>
              </div>

              <div class="section">
                <h2>📞 Need Assistance?</h2>
                <p style="margin: 0;">
                  <strong>Phone:</strong> <a href="tel:+94771234567" style="color: #C9A96E;">+94 77 123 4567</a><br>
                  <strong>Email:</strong> <a href="mailto:info@lunarway.com" style="color: #C9A96E;">info@lunarway.com</a>
                </p>
              </div>

              <p style="margin-bottom: 0;">
                Thank you for trusting Lunarway Travels with your journey. We're committed to making 
                this an extraordinary experience!
              </p>
              <p style="margin-top: 20px; margin-bottom: 0;">
                <strong>Warm regards,</strong><br>
                The Lunarway Travels Team
              </p>

              <div class="footer">
                <p>Booking confirmed on ${new Date().toLocaleString('en-US', { 
                  timeZone: 'Asia/Colombo',
                  dateStyle: 'full',
                  timeStyle: 'short'
                })}</p>
                <p>Lunarway Travels - Your Gateway to Unforgettable Journeys</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // ────────────────────────────────────────────────────────────────────────
    // EMAIL 2: Notification to Company
    // ────────────────────────────────────────────────────────────────────────
    const companyEmail = {
      from: process.env.EMAIL_USER,
      to: "lunarwaytravels00@gmail.com",
      subject: `New Booking - ${packageInfo.name} by ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1A1A18 0%, #2A2A28 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
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
              <h1 style="margin: 0; font-size: 24px;">🎉 New Package Booking Received!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Lunarway Travels</p>
            </div>
            
            <div class="content">
              <div class="section">
                <h2>👤 Customer Information</h2>
                <div class="field"><strong>Name:</strong> ${name}</div>
                <div class="field"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></div>
                <div class="field"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></div>
                <div class="field"><strong>Number of Travelers:</strong> ${numberOfTravelers}</div>
              </div>

              <div class="section">
                <h2>✈️ Booking Details</h2>
                <div class="field"><strong>Package:</strong> ${packageInfo.name}</div>
                <div class="field"><strong>Departure Date:</strong> ${new Date(departureDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <div class="field"><strong>Return Date:</strong> ${new Date(returnDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <div class="field"><strong>Duration:</strong> ${duration} days</div>
              </div>

              ${specialRequests ? `
              <div class="section">
                <h2>📝 Special Requests</h2>
                <p style="margin: 0; white-space: pre-wrap;">${specialRequests}</p>
              </div>
              ` : ''}

              <div class="section" style="background: #f0f8ff; border-left-color: #4CAF50;">
                <h2>⏰ Quick Actions</h2>
                <p style="margin: 0;">
                  <a href="mailto:${email}" style="display: inline-block; background: #C9A96E; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">Reply to Customer</a>
                  <a href="tel:${phone}" style="display: inline-block; background: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Call Customer</a>
                </p>
              </div>

              <div class="footer">
                <p>Booking received on ${new Date().toLocaleString('en-US', { 
                  timeZone: 'Asia/Colombo',
                  dateStyle: 'full',
                  timeStyle: 'long'
                })}</p>
                <p>Lunarway Travels - Booking Management System</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(customerEmail),
      transporter.sendMail(companyEmail),
    ]);

    // Log success
    console.log(`Booking confirmed for ${packageInfo.name} by ${name} (${email})`);
    console.log(`Confirmation emails sent to customer and company`);

    return NextResponse.json({
      success: true,
      message: "Booking confirmed and emails sent successfully",
    });

  } catch (error) {
    console.error(" Booking error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process booking. Please try again." },
      { status: 500 }
    );
  }
}