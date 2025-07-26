"use client";

import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

interface ContactDetailProps {
  icon: React.ReactNode;
  label: string;
}

const fields: Array<keyof FormDataType> = ["name", "email", "phone"];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/mnnzdwno", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-24 px-6 bg-gradient-to-br from-blue-50 via-yellow-50 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl font-extrabold mb-6 text-yellow-600">
            Contact Eco Venture
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Have a query, business idea, or need a quote? We are always ready to help.
          </p>

          <div className="space-y-6 text-gray-700">
          <ContactDetail
              icon={<FaPhone className="text-blue-600 text-xl" />}
              label="+91 70221 67815"
            />
            <ContactDetail
              icon={<FaEnvelope className="text-blue-600 text-xl" />}
              label="ecoventure2025@gmail.com"
            />
            <ContactDetail
              icon={<FaMapMarkerAlt className="text-blue-600 text-xl" />}
              label="No.110, Kanaka Road, Bharath Nagar, Bengaluru - 560091"
            />
          </div>
        </div>

        {/* Form */}
        <div className="relative rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {fields.map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field === "name"
                    ? "Your Name"
                    : field === "email"
                    ? "Email Address"
                    : "Phone Number"}
                </label>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-yellow-300 cursor-not-allowed" : "bg-yellow-400 hover:bg-yellow-300"
              } text-gray-900 font-semibold py-2 px-4 rounded-lg transition`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({ icon, label }: ContactDetailProps) {
  return (
    <div className="flex items-start gap-4">
      <div>{icon}</div>
      <p className="text-base">{label}</p>
    </div>
  );
}
