import React from "react";
import Logo from "../components/Logo";

const PrivacyPolicy = () => {
  return (
    <div className="my-8 md:mx-20 mx-4">
      <h1 className="md:text-[4rem] text-[2.25rem] border-b border-black">Privacy Policy</h1>

      <div className="space-y-8">
        <section className="md:text-xl mt-8">
          <p className="mt-2 text-gray-700 md:px-5 px-1">
            Welcome to the <Logo size="md:text-xl text-base" /> Privacy Policy. Your privacy is important to us, and this policy outlines how we collect, use, and protect your information.
            <span className="block mt-2">Last update: {new Date().toLocaleDateString()}</span>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <ul className="list-disc md:list-inside mt-2 text-gray-700 px-5">
            <li>Personal information such as name, email address, and account details</li>
            <li>Resume data and content created using our platform</li>
            <li>Usage data including IP address, browser type, and access times</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
          <ul className="list-disc md:list-inside mt-2 text-gray-700 px-5">
            <li>To provide and improve our services</li>
            <li>To communicate with you about your account or updates</li>
            <li>To ensure security and prevent unauthorized access</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. Data Sharing</h2>
          <ul className="list-disc md:list-inside mt-2 text-gray-700 px-5">
            <li>
              We do not sell your personal data to third parties.
            </li>
            <li>
              We may share data with trusted service providers to facilitate our services.
            </li>
            <li>
              We may disclose information if required by law or to protect our rights.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. Data Security</h2>
          <ul className="list-disc md:list-inside mt-2 text-gray-700 px-5">
            <li>We implement industry-standard measures to protect your data.</li>
            <li>However, no method of transmission over the internet is 100% secure.</li>
            <li>
              You are responsible for maintaining the confidentiality of your account credentials.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. Your Rights</h2>
          <ul className="list-disc md:list-inside mt-2 text-gray-700 px-5">
            <li>Access and update your personal data through your account settings.</li>
            <li>Request deletion of your data by contacting us.</li>
            <li>Opt-out of non-essential communications.</li>
          </ul>
        </section>

        

        <section>
          <h2 className="text-2xl font-semibold">6. Changes to this Policy</h2>
          <ul className="list-disc md:list-inside mt-2 text-gray-700 px-5">
            <li>We reserve the right to update this Privacy Policy as necessary.</li>
            <li>Significant changes will be communicated to users.</li>
            <li>
              Continued use of the Platform constitutes acceptance of the updated policy.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. Contact Us</h2>
          <p className="mt-2 text-gray-700 px-5">
            For questions or concerns about this Privacy Policy, contact us at <a
              href="mailto:reasume@.com"
              className="text-blue-600 underline"
            >
              reasume@.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;