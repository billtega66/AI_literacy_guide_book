import React, { useState } from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection } from '../components/ContentSection';
import { Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', feedback: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const breadcrumbItems = [
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/contact"
      title="Contact Us"
    >
      <ContentSection title="Send Us Your Feedback">
        <div className="max-w-2xl mx-auto">
          <p className="text-amber-800 mb-6">
            We value your input on our AI Ethics guidelines. Please share your thoughts,
            suggestions, or concerns using the form below.
          </p>

          {submitted && (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
              Thank you for your feedback! We'll review it carefully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-amber-900 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-amber-900 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="feedback" className="block text-amber-900 font-medium mb-2">
                Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                required
                value={formData.feedback}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none"
                placeholder="Share your thoughts, suggestions, or concerns..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors"
            >
              <Send size={18} className="mr-2" />
              Send Feedback
            </button>
          </form>
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default ContactPage;