"use client";

import { useState } from "react";
import Link from "next/link";

const CustomPackage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    packageType: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    numberOfTravelers: "",
    budget: "",
    specialRequests: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/custom-package", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          packageType: "",
          destination: "",
          departureDate: "",
          returnDate: "",
          numberOfTravelers: "",
          budget: "",
          specialRequests: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <section
        className="relative py-32 px-6 md:px-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A1A18 0%, #2A2A28 100%)" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8 transition-colors"
          >
            ← Back to Home
          </Link>

          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#7A7A72" }}
          >
            Custom Package
          </p>
          <h1
            className="text-5xl md:text-6xl font-light leading-tight text-white mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Build Your <br />
            <em className="italic" style={{ color: "#C9A96E" }}>Dream Journey</em>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Tell us about your travel dreams and we'll craft a personalized package
            tailored exactly to your preferences, budget, and schedule.
          </p>
        </div>

        {/* Decorative elements */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)",
            transform: "translate(40%, -40%)",
          }}
        />
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 md:px-16" style={{ background: "#FAFAF7" }}>
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          {submitStatus === "success" && (
            <div
              className="mb-8 p-6 rounded-xl text-center"
              style={{ background: "#4CAF50", color: "white" }}
            >
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p>Your custom package request has been submitted successfully. We'll contact you within 24 hours.</p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div
              className="mb-8 p-6 rounded-xl text-center"
              style={{ background: "#f44336", color: "white" }}
            >
              <h3 className="text-xl font-semibold mb-2">Oops!</h3>
              <p>Something went wrong. Please try again or contact us directly.</p>
            </div>
          )}

          <div className="bg-white rounded-2xl p-8 md:p-12" style={{ border: "1px solid #EDE8DE" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3
                  className="text-2xl font-semibold mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#1A1A18",
                  }}
                >
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A18" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                      style={{ borderColor: "#EDE8DE", focusRing: "#C9A96E" }}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A18" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                      style={{ borderColor: "#EDE8DE" }}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A18" }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                      style={{ borderColor: "#EDE8DE" }}
                      placeholder="+94 77 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A18" }}>
                      Number of Travelers *
                    </label>
                    <input
                      type="number"
                      name="numberOfTravelers"
                      value={formData.numberOfTravelers}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                      style={{ borderColor: "#EDE8DE" }}
                      placeholder="2"
                    />
                  </div>
                </div>
              </div>

              {/* Travel Details */}
              <div>
                <h3
                  className="text-2xl font-semibold mb-6 pt-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#1A1A18",
                    borderTop: "1px solid #EDE8DE",
                    paddingTop: "24px",
                  }}
                >
                  Travel Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A18" }}>
                      Package Type *
                    </label>
                    <select
                      name="packageType"
                      value={formData.packageType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                      style={{ borderColor: "#EDE8DE" }}
                    >
                      <option value="">Select package type</option>
                      <option value="inbound">Inbound (Sri Lanka)</option>
                      <option value="outbound">Outbound (International)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A18" }}>
                      Destination / Country *
                    </label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                      style={{ borderColor: "#EDE8DE" }}
                      placeholder="e.g., Maldives, Thailand, Kandy"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A18" }}>
                      Departure Date *
                    </label>
                    <input
                      type="date"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                      style={{ borderColor: "#EDE8DE" }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A18" }}>
                      Return Date *
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                      style={{ borderColor: "#EDE8DE" }}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A18" }}>
                      Budget Range (Optional)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                      style={{ borderColor: "#EDE8DE" }}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under LKR 50,000</option>
                      <option value="50k-100k">LKR 50,000 - 100,000</option>
                      <option value="100k-200k">LKR 100,000 - 200,000</option>
                      <option value="200k-500k">LKR 200,000 - 500,000</option>
                      <option value="above-500k">Above LKR 500,000</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#1A1A18" }}>
                      Special Requests or Preferences
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                      style={{ borderColor: "#EDE8DE" }}
                      placeholder="Tell us about any special requirements, dietary preferences, activities you'd like to include, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: "#C9A96E",
                    color: "white",
                  }}
                >
                  {submitting ? "Submitting..." : "Submit Package Request"}
                </button>
                <p className="text-sm text-center mt-4" style={{ color: "#7A7A72" }}>
                  We'll review your request and get back to you within 24 hours with a customized quote.
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-sm mb-2" style={{ color: "#7A7A72" }}>
              Need help or have questions?
            </p>
            <p className="text-sm font-semibold" style={{ color: "#1A1A18" }}>
              Call us at{" "}
              <a href="tel:+94771234567" style={{ color: "#C9A96E" }}>
                +94 77 123 4567
              </a>{" "}
              or email{" "}
              <a href="mailto:info@lunarway.com" style={{ color: "#C9A96E" }}>
                info@lunarway.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CustomPackage;
