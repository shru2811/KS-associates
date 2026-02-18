import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        user_city: '',
        user_message: ''
    });

    const [status, setStatus] = useState({
        message: '',
        isError: false
    });

    // ✅ Initialize EmailJS (logic update only)
    useEffect(() => {
        emailjs.init('Bw1m6Vnuzsssk9QHy'); // your public key
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus({ message: 'Sending...', isError: false });

        emailjs
            .sendForm(
                'service_ji1awnj',
                'template_r56r3pn',
                form.current
            )
            .then(
                () => {
                    setStatus({ message: 'Message sent successfully!', isError: false });
                    setFormData({
                        user_name: '',
                        user_email: '',
                        user_phone: '',
                        user_city: '',
                        user_message: ''
                    });
                },
                (error) => {
                    console.error('EmailJS Error:', error);
                    setStatus({ message: 'Failed to send message. Please try again.', isError: true });
                }
            );
    };

    return (
        <div className="p-4 md:p-6 text-center font-sans" style={{ background: 'linear-gradient(to bottom, #d1e7f9, #ffffff)' }}>
            {/* Responsive header */}
            <h1 className="text-4xl md:text-7xl font-black my-6 md:my-10 py-24 md:py-36 bg-cover bg-center bg-no-repeat bg-[url('/contact.png')] text-white">
                Contact Us
            </h1>

            <div className="flex justify-center items-center min-h-[500px] px-2 md:px-4 my-4">
                <div className="flex flex-col md:flex-row max-w-6xl w-full shadow-2xl rounded-xl">

                    {/* Left Side - Contact Info */}
                    <div className="bg-[#211C6A] p-6 md:p-8 text-white w-full md:w-[40%] rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Connect with us</h2>
                        <h3 className="text-lg md:text-xl mb-4">KS Associates Limited</h3>

                        <div className="space-y-4 md:space-y-6">
                            <div className="flex items-center gap-3 text-sm md:text-base">
                                <div className="bg-[#85bf4b] rounded-full p-2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <span className="break-all">ksassociates.solutions@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-3 text-sm md:text-base">
                                <div className="bg-[#85bf4b] rounded-full p-2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zm3.949 0h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556zm5.885 0h1.946a6.004 6.004 0 00-2.783-4.118c.454 1.147.748 2.572.837 4.118z" />
                                    </svg>
                                </div>
                                <span>www.KSAssociates.com</span>
                            </div>

                            <div className="flex items-center gap-3 text-sm md:text-base">
                                <div className="bg-[#85bf4b] rounded-full p-2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <span>7905749502</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white p-6 md:p-8 w-full md:w-[60%] rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-[#074173]">
                            Submit Your Query
                        </h2>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div className="text-left">
                                    <label className="block text-gray-600 mb-2 text-base md:text-lg font-bold">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        value={formData.user_name}
                                        onChange={handleChange}
                                        placeholder="Enter your Name"
                                        className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85bf4b]"
                                        required
                                    />
                                </div>

                                <div className="text-left">
                                    <label className="block text-gray-600 mb-2 text-base md:text-lg font-bold">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        value={formData.user_email}
                                        onChange={handleChange}
                                        placeholder="Enter your Email"
                                        className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85bf4b]"
                                        required
                                    />
                                </div>

                                <div className="text-left">
                                    <label className="block text-gray-600 mb-2 text-base md:text-lg font-bold">Phone</label>
                                    <div className="flex">
                                        <span className="inline-flex items-center px-3 text-sm md:text-base bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                                            +91
                                        </span>
                                        <input
                                            type="tel"
                                            name="user_phone"
                                            value={formData.user_phone}
                                            onChange={handleChange}
                                            placeholder="Enter your Phone"
                                            className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#85bf4b]"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="text-left">
                                    <label className="block text-gray-600 mb-2 text-base md:text-lg font-bold">City</label>
                                    <input
                                        type="text"
                                        name="user_city"
                                        value={formData.user_city}
                                        onChange={handleChange}
                                        placeholder="Enter your city"
                                        className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85bf4b]"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="text-left">
                                <label className="block text-gray-600 mb-2 text-base md:text-lg font-bold">Your Query</label>
                                <textarea
                                    name="user_message"
                                    value={formData.user_message}
                                    onChange={handleChange}
                                    placeholder="Please enter your message or query here"
                                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85bf4b] min-h-[100px] md:min-h-[120px]"
                                    required
                                />
                            </div>

                            {status.message && (
                                <div className={`p-2 rounded text-sm md:text-base ${status.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                    {status.message}
                                </div>
                            )}

                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#211C6A] py-2.5 md:py-3 rounded-xl text-lg md:text-xl text-white transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-opacity-90"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;