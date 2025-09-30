import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className=" my-8 md:mx-20 mx-4">
      <h1 className="md:text-[4rem] text-[2.25rem] border-b border-black">Terms & Conditions</h1>

      <div className="space-y-8">
        <section className="md:text-xl mt-8">
          <p className="mt-2 text-gray-700 md:px-5 px-1">
            By using the <Logo size="md:text-xl text-base"/> website, you agree to comply with and be bound
            by the following terms and conditions of use. Please review these
            terms carefully. If you do not agree to these terms, you should not
            use this website.
            <span className="block mt-2">
              Last update : {new Date().toLocaleDateString()}
            </span>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">1. Service Description</h2>
          <ul className="list-disc md:list-inside mt-2 text-gray-700 px-5">
            <li>Resume creation and editing tools</li>
            <li>Template selection and customization</li>
            <li>Cloud storage for resumes</li>
            <li>Account management features</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. User Accounts</h2>
          <h3 className="text-xl font-medium mt-4">2.1 Account Creation</h3>
          <ul className="list-disc md:list-inside mt-2 text-gray-700 px-5">
            <li>
              You must provide accurate and complete information when creating
              an account.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
            <li>You must be at least 16 years old to create an account.</li>
          </ul>

          <h3 className="text-xl font-medium mt-4">2.2 Account Security</h3>
          <ul className="list-disc md:list-inside mt-2 text-gray-700 px-5">
            <li>
              You are responsible for all activities that occur under your
              account.
            </li>
            <li>
              You must notify us immediately of any unauthorized use of your
              account.
            </li>
            <li>
              We reserve the right to terminate accounts that violate these
              Terms.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. User Content</h2>
          <h3 className="text-xl font-medium mt-4">3.1 Your Content</h3>
          <ul className="list-disc md:list-inside mt-2 text-gray-700 px-5">
            <li>
              You retain all rights to the content you create using our
              Platform.
            </li>
            <li>
              You grant us a non-exclusive license to store and display your
              content for the purpose of providing our services.
            </li>
            <li>
              You are responsible for the accuracy and legality of your content.
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-4">3.2 Prohibited Content</h3>
          <p className="mt-2 text-gray-700">
            You agree not to create or upload content that:
          </p>
          <ul className="list-disc md:list-inside mt-2 text-gray-700 px-5">
            <li>Infringes on intellectual property rights</li>
            <li>Contains false or misleading information</li>
            <li>Violates any applicable laws or regulations</li>
            <li>Contains malicious code or viruses</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. Free Service Commitment</h2>
          <ul className="list-disc md:list-inside mt-2 text-gray-700 px-5">
            <li>
              All core features of <Logo size="text-base" /> are provided free
              of charge.
            </li>
            <li>
              We commit to maintaining the free status of our essential
              resume-building tools.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">
            5. Privacy and Data Protection{" "}
          </h2>
          <ul className="list-disc md:list-inside mt-2 text-gray-700 px-5">
            <li>
              We collect and process personal data as described in our{" "}
              <Link to="/privacy-policy" className="text-blue-600">
                Privacy Policy.
              </Link>
            </li>
            <li>
              We implement reasonable security measures to protect your data
            </li>
            <li>We do not sell user data to third parties</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. Changes to Terms</h2>
          <ul className="list-disc md:list-inside mt-2 text-gray-700 px-5">
            <li>We reserve the right to modify these Terms at any time.</li>
            <li>Users will be notified of significant changes</li>
            <li>
              Continued use of the Platform constitutes acceptance of modified
              Terms
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. Contact Information</h2>
          <p className="mt-2 text-gray-700">
            For questions about these Terms, contact us at <a
              href="mailto:yourcontact@example.com"
              className="text-blue-600 underline"
            >
               reasume@.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">8. Severability</h2>
          <p className="mt-2 text-gray-700">
            If any provision of these Terms is found to be unenforceable, the
            remaining provisions will remain in effect.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
