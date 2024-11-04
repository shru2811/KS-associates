import React from 'react';

const Terms = () => {
    return (
        <div className="p-4 md:p-10 font-sans max-w-7xl mx-auto">
            {/* Hero Section - Responsive text size */}
            <h1 className="text-4xl md:text-7xl font-black my-3 md:my-5 py-8 md:py-12 bg-cover bg-no-repeat text-[#211C6A] text-center">
                Terms & Conditions
            </h1>

            {/* terms & conditions - Adjusted margins and padding */}
            <div className='mx-2 md:mx-12 text-base md:text-xl'>
                <p className='font-bold mb-4 md:mb-5'>
                    These Terms and Conditions govern the relationship between KS Associates and users (referred to as "Subscribers" or "Customers") availing our share recovery and asset recovery services. By using our services, you agree to these terms. If you do not agree, please refrain from using the services provided on our platform.
                </p>

                <div className="space-y-6 md:space-y-8">
                    {/* Section 1 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>1. Service Agreement</h3>
                        <ul className='list-disc ml-6 md:ml-10 space-y-2'>
                            <li>KS Associates provides free consultation and recovery assistance for lost or unclaimed shares. Service fees are payable only after the successful transfer of recovered shares into the client's demat account.</li>
                            <li>KS Associates retains the right to charge fees for additional services, which will be communicated in advance.</li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>2. User Responsibility</h3>
                        <ul className='list-disc ml-6 md:ml-10 space-y-2'>
                            <li>Subscribers are responsible for providing accurate and virus-free data when engaging with KS Associates. Uploaded or shared content should not include offensive, defamatory, or unlawful materials.</li>
                            <li>KS Associates does not verify the authenticity of the information provided by subscribers and shall not be held liable for any misinformation or losses resulting from it.</li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>3. Ownership and Access</h3>
                        <ul className='list-disc ml-6 md:ml-10 space-y-2'>
                            <li>The intellectual property of all technologies, systems, and content shared through KS Associates belongs to the company. Users are granted limited access to use these tools strictly for recovery purposes and cannot redistribute or modify them without permission.</li>
                            <li>Access to services may be restricted or terminated if the subscriber violates these terms.</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>4. Termination and Unsubscription</h3>
                        <ul className='list-disc ml-6 md:ml-10 space-y-2'>
                            <li>Users can unsubscribe from our services at any time by notifying KS Associates. It is the user's responsibility to download any data or documents prior to unsubscribing, as access will be revoked thereafter.</li>
                            <li>KS Associates reserves the right to suspend services temporarily or permanently for security or operational reasons.</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>5. Communication Consent</h3>
                        <ul className='list-disc ml-6 md:ml-10 space-y-2'>
                            <li>By engaging with KS Associates, subscribers consent to receive communications via email, phone, SMS, or other channels, including updates about regulatory changes, service developments, and special offers.</li>
                            <li>Users registered under the DND (Do Not Disturb) service agree that KS Associates can contact them for service-related matters.</li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>6. Payment and Refund Policy</h3>
                        <ul className='list-disc ml-6 md:ml-10 space-y-2'>
                            <li>Service fees will only be charged upon successful recovery of shares. No refunds will be issued for subscription or service issues caused by network disruptions or technical failures.</li>
                            <li>Payments must be made via account payee cheques or authorized digital modes in favor of "KS Associates." KS Associates is not responsible for payments made to unauthorized persons or third-party agents.</li>
                        </ul>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>7. Limitation of Liability</h3>
                        <ul className='list-disc ml-6 md:ml-10 space-y-2'>
                            <li>KS Associates shall not be held liable for any direct, indirect, or consequential losses, including loss of profits, business revenue, or data, arising from the use of its services.</li>
                            <li>Subscribers are advised to maintain backups of all shared documents. KS Associates shall not be responsible for lost data or delays caused by technical issues or system downtime.</li>
                        </ul>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>8. Service Scope and Compliance</h3>
                        <ul className='list-disc ml-6 md:ml-10 space-y-2'>
                            <li>Our recovery services rely on thorough research; however, the information provided is indicative and does not guarantee specific outcomes. Subscribers are encouraged to exercise their own judgment before taking any financial decisions.</li>
                            <li>KS Associates complies with applicable laws and regulations. Any disputes will be governed by the laws of India, with the courts in Allahabad having exclusive jurisdiction.</li>
                        </ul>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>9. Indemnity</h3>
                        <ul className='list-disc ml-6 md:ml-10 space-y-2'>
                            <li>Subscribers agree to indemnify KS Associates, its employees, and affiliates against all claims, damages, or losses arising from their use of our services or breach of these terms.</li>
                        </ul>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h3 className='font-black text-lg md:text-xl mb-2'>10. Changes to Terms and Conditions</h3>
                        <ul className='list-disc ml-6 md:ml-10 space-y-2'>
                            <li>KS Associates reserves the right to modify these terms at any time. Continued use of our services constitutes acceptance of the revised terms. Users are advised to review the latest version on our website periodically.</li>
                        </ul>
                    </section>

                    <p className='mt-8 mb-4'>These terms outline the key responsibilities and commitments between KS Associates and its clients. For questions or clarifications, please contact us at 7905749502.</p>
                </div>
            </div>
        </div>
    );
};

export default Terms;