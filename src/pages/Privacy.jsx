import React from 'react';

const Privacy = () => {
    return (
        <div className="p-4 md:p-10 font-sans max-w-7xl mx-auto">
            {/* Hero Section - Responsive text size */}
            <h1 className="text-4xl md:text-7xl font-black my-3 md:my-5 py-8 md:py-12 bg-cover bg-no-repeat text-[#211C6A] text-center">
                Privacy Policy
            </h1>

            {/* Privacy Policy Content - Adjusted margins and padding */}
            <div className='mx-2 md:mx-12 text-base md:text-xl'>
                <p className='font-bold mb-4 md:mb-5'>
                    KS Associates (referred to as "we," "us," or "our") is committed to safeguarding the privacy and personal information of our users. This policy explains how we collect, use, share, and protect your information when you use our website or services. By using our website, you agree to the terms outlined here.
                </p>

                <div className="space-y-6 md:space-y-8">
                    {/* Section 1 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>1. Information We Collect</h3>
                        <p className='mb-2'>We may collect the following types of personal information:</p>
                        <ul className='list-disc ml-6 md:ml-10 space-y-2'>
                            <li><span className='font-bold'>Personal Details: </span>Name, contact information (email, phone number, address), and identification details.</li>
                            <li><span className='font-bold'>Financial Information: </span>Bank account details or payment information for service-related transactions.</li>
                            <li><span className='font-bold'>Usage Data: </span>Information on how you use our website, such as IP addresses and browsing behavior, to improve user experience.</li>
                            <li><span className='font-bold'>Correspondence: </span>Any feedback, inquiries, or complaints you send us.</li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>2. Use of Personal Information</h3>
                        <p className='mb-2'>We use your personal information to:</p>
                        <ul className='list-disc ml-6 md:ml-10 space-y-2'>
                            <li>Communicate with you regarding services or inquiries.</li>
                            <li>Process payments and manage recovery-related services.</li>
                            <li>Ensure website security and troubleshoot technical issues.</li>
                            <li>Improve our services and provide personalized user experiences.</li>
                            <li>Comply with legal obligations or government requests.</li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>3. Sharing Your Information</h3>
                        <p className='mb-2'>We may share your personal information with:</p>
                        <ul className='list-disc ml-6 md:ml-10 space-y-2'>
                            <li><span className='font-bold'>Business Partners: </span>Involved in delivering our services.</li>
                            <li><span className='font-bold'>Legal Authorities: </span>If required by law or for legal processes.</li>
                            <li><span className='font-bold'>Service Providers: </span>For payment processing or website management.</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>4. Data Security</h3>
                        <p className=''>
                            We implement appropriate security measures to protect your information from unauthorized access, alteration, or loss. However, no method of transmission over the Internet is completely secure. You are responsible for keeping your login credentials confidential.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>5. Cookies Policy</h3>
                        <p className=''>
                            We use cookies to enhance your browsing experience. You can control or disable cookies through your browser settings. Disabling cookies may affect website functionality.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>6. Payment Information</h3>
                        <p className=''>
                            We ensure secure payment processes through trusted gateways. We do not store your card or banking information unless necessary for billing.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>7. Access and Correction of Information</h3>
                        <p className=''>
                            You have the right to access or correct your personal information. To make a request, contact us with proof of identity. We aim to respond within a reasonable time.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>8. Links to Other Websites</h3>
                        <p className=''>
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
                        </p>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>9. Changes to this Policy</h3>
                        <p className=''>
                            We may update this policy from time to time. We encourage you to review it periodically. Continued use of the website constitutes acceptance of the updated policy.
                        </p>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>10. Grievance Redressal</h3>
                        <p className=''>
                            If you have concerns or complaints about how your data is handled, please contact our Grievance Officer at:
                            <br />
                            <span className='font-bold block mt-2'>Email: ksassociates.solutions@gmail.com</span>
                        </p>
                    </section>

                    <p className='mt-8 text-sm md:text-base italic'>This Privacy Policy was last updated on 1st Nov 2024.</p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;