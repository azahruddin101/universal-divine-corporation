import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const services = [
    "IT Services & Software Solutions",
    "Digital Marketing & Lead Generation",
    "Architectural & Construction Services",
    "Media Production Services",
    "Event Management & Training"
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '6453d7b0-66b4-4e40-a35d-2f0456e69d1a',
          ...data
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-20 lg:mt-10">
        <p className='text-2xl font-bold mb-4'>Fill the form below to get in touch with us:</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#2D907C] focus:border-[#2D907C] ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#2D907C] focus:border-[#2D907C] ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Address Field */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <textarea
            id="address"
            {...register('address', { required: 'Address is required' })}
            rows="3"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#2D907C] focus:border-[#2D907C] ${
              errors.address ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
          )}
        </div>

        {/* Services Dropdown */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Services Needed
          </label>
          <select
            id="service"
            {...register('service', { required: 'Please select a service' })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#2D907C] focus:border-[#2D907C] ${
              errors.service ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#2D907C] text-white py-2 px-6 rounded-lg font-medium 
            hover:bg-opacity-90 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <p className="text-green-600 text-center">
            Thank you for your message. We'll get back to you soon!
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-600 text-center">
            There was an error submitting your message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;