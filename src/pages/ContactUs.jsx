import React from 'react';

const ContactUs = () => {
    return (
        <div
            className="p-4 md:p-6 text-center font-sans"
            style={{ background: 'linear-gradient(to bottom, #d1e7f9, #ffffff)' }}
        >
            {/* Header */}
            <h1 className="text-4xl md:text-7xl font-black my-6 md:my-10 py-24 md:py-36 bg-cover bg-center bg-no-repeat bg-[url('/contact.png')] text-white">
                Contact Us
            </h1>

            <div className="flex justify-center items-center px-2 md:px-4 my-10">
                <div className="bg-[#211C6A] p-6 md:p-10 text-white w-full md:w-[45%] rounded-xl shadow-lg">

                    {/* Company Intro */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Connect with KS Associates Ltd.
                    </h2>

                    <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed">
                        We at <span className="font-semibold text-white">KS Associates Ltd.</span> help you
                        claim what’s rightfully yours and ensure that it remains so.
                        Our team is committed to providing reliable, transparent, and
                        professional assistance at every step.
                    </p>

                    <p className="text-sm md:text-base text-gray-200 mb-8 leading-relaxed">
                        For inquiries, support, or consultations, feel free to reach out to us
                        via email or WhatsApp. We’ll be happy to assist you.
                        <br />
                        <span className="block mt-2 font-semibold text-white">
                            Have a great day!
                        </span>
                    </p>

                    {/* Contact Details */}
                    <div className="space-y-5 text-left">
                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <div className="bg-[#85bf4b] rounded-full p-3 w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                            <span className="break-all text-sm md:text-base">
                                <a href="mailto:ksassociates.solutions@gmail.com" className="hover:text-[#85bf4b]">
                                    ksassociates.solutions@gmail.com
                                </a>
                            </span>
                        </div>

                        {/* Website */}
                        <div className="flex items-center gap-4">
                            <div className="bg-[#85bf4b] rounded-full p-3 w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zm3.949 0h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556zm5.885 0h1.946a6.004 6.004 0 00-2.783-4.118c.454 1.147.748 2.572.837 4.118z" />
                                </svg>
                            </div>
                            <span className="text-sm md:text-base hover:text-[#85bf4b]">
                                <a href='https://theksassociates.in'>theksassociates.in</a>
                            </span>
                        </div>

                        {/* Phone / WhatsApp */}
                        <div className="flex items-center gap-4">
                            <div className="bg-[#85bf4b] rounded-full p-3 w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </div>
                            <span className="text-sm md:text-base hover:text-[#85bf4b]">
                                <a href="https://api.whatsapp.com/send/?phone=917905749502&text&type=phone_number&app_absent=0" target='blank' className="hover:text-[#85bf4b]">
                                    +91 79057 49502
                                </a>
                            </span>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;