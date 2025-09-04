import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const ref = useRef(null);
  const form = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message should be at least 10 characters";
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Map EmailJS field names to state properties
    const stateFieldMap = {
      'from_name': 'name',
      'from_email': 'email',
      'subject': 'subject',
      'message': 'message'
    };
    
    const fieldName = stateFieldMap[name] || name;
    setFormData(prev => ({ ...prev, [fieldName]: value }));
    
    // Clear error when user starts typing - use the mapped field name for errors
    if (errors[fieldName]) {
      setErrors(prev => ({ ...prev, [fieldName]: null }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Send email using EmailJS
      emailjs.sendForm(
        'service_6swuin8', // Replace with your EmailJS service ID
        'template_r1fmazt', // Replace with your EmailJS template ID
        form.current,
        'AzPSJ8IEBXKnqT3xV' // Replace with your EmailJS user ID
      )
        .then((result) => {
          console.log('Email successfully sent!', result.text);
          setIsSubmitting(false);
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          
          // Reset status after 5 seconds
          setTimeout(() => {
            setSubmitStatus(null);
          }, 5000);
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
          setIsSubmitting(false);
          setSubmitStatus('error');
          
          // Reset status after 5 seconds
          setTimeout(() => {
            setSubmitStatus(null);
          }, 5000);
        });
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div ref={ref} className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Have a question or want to work together? Feel free to contact me!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="lg:col-span-2 space-y-8"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8">
              Fill up the form or contact me directly using the information below.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex items-start space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
              <FaEnvelope className="text-blue-500 text-xl" />
            </div>
            <div>
              <h4 className="text-lg font-medium">Email</h4>
              <a href="mailto:anushthambi@gmail.com" className="text-gray-400 hover:text-blue-400 transition">
                anushthambi@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex items-start space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
              <FaPhone className="text-purple-500 text-xl" />
            </div>
            <div>
              <h4 className="text-lg font-medium">Phone</h4>
              <a href="tel:+94 74 351 4678" className="text-gray-400 hover:text-purple-400 transition">
                +94 74 351 4678
              </a>
            </div>
          </motion.div>

        
          
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="lg:col-span-3 bg-gray-800 rounded-lg p-8 shadow-xl"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-semibold mb-6"
          >
            Send Me a Message
          </motion.h3>

          <form ref={form} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject" // EmailJS template parameter
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-700 border ${errors.subject ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Overview"
              />
              {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message" // EmailJS template parameter
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-3 bg-gray-700 border ${errors.message ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Hello, I'd like to talk about..."
              ></textarea>
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-900/50 text-green-300 rounded-md"
                >
                  Your message has been sent successfully to anushthambi@gmail.com! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-red-900/50 text-red-300 rounded-md"
                >
                  Something went wrong! Please try again later.
                </motion.div>
              )}
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
