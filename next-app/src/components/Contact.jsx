"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("✅ Thanks for your message!");
        e.target.reset();
      } else {
        setStatus("❌ Oops! Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Oops! Something went wrong.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(""), 5000); // Clear message after 5 seconds
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-title">
          <h3 className="main-title">Contact Me</h3>
        </div>

        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:aman.soni2024@nst.rishihood.edu.in">
              aman.soni2024@nst.rishihood.edu.in
            </a>
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+917770889004">+91 7770889004</a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Replace with your actual Web3Forms Access Key */}
          <input
            type="hidden"
            name="access_key"
            value="07320a75-3c19-43e1-88a8-e17dcbd6764a"
          />

          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button type="submit" className="send-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              style={{
                marginTop: "10px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
