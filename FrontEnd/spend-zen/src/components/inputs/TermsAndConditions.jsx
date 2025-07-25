import React from 'react'
import AuthLayout from '../layouts/AuthLayout'

const TermsAndConditions = () => {
  return (
    <AuthLayout>
         <h1 className='grid lg:grid-cols-1 sm:grid-cols-2 text-3xl text-primary font-medium mb-4'>
          SpendZen – Terms and Conditions
        </h1>
          <p className='text-sm text-gray-600 mb-6'>Effective Date: 25/03/2025</p>
      <div className='w-[45%] lg:w-[90%] sm:w-[60%]  h-[430px] overflow-y-auto p-4'>
       
      

        <p className='mb-4'>
          Welcome to SpendZen (“Application”, “we”, “our”, or “us”). These Terms and Conditions (“Terms”) govern your access to and use of the SpendZen mobile and web application, products, and services (collectively, the “Services”). By using the Services, you agree to be bound by these Terms. If you do not agree, please do not use the Services.
        </p>

        <h2 className='text-lg font-semibold mt-6 mb-2'>1. Eligibility</h2>
        <p className='mb-4'>
          You must be at least 18 years old or the age of majority in your jurisdiction to use SpendZen. By using the Services, you represent and warrant that you meet this requirement.
        </p>

        <h2 className='text-lg font-semibold mt-6 mb-2'>2. Use of the Services</h2>
        <ul className='list-disc list-inside mb-4'>
          <li>Use SpendZen only for personal finance tracking purposes.</li>
          <li>Do not use the Services for unlawful or commercial purposes.</li>
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          <li>Do not misuse or attempt to hack, copy, or reverse engineer the application.</li>
        </ul>

        <h2 className='text-lg font-semibold mt-6 mb-2'>3. Account and Data</h2>
        <ul className='list-disc list-inside mb-4'>
          <li>You are responsible for all activities under your account.</li>
          <li>SpendZen does not access your bank accounts. All manually entered or imported data is stored securely.</li>
          <li>You agree that all data you provide is accurate and not misleading.</li>
        </ul>

        <h2 className='text-lg font-semibold mt-6 mb-2'>4. Privacy</h2>
        <p className='mb-4'>
          Your privacy is important to us. Our use of your information is governed by our <strong>Privacy Policy</strong>, which you should review separately. [Insert link to privacy policy]
        </p>

        <h2 className='text-lg font-semibold mt-6 mb-2'>5. Subscription and Payment (if applicable)</h2>
        <ul className='list-disc list-inside mb-4'>
          <li>Some features may require a paid subscription.</li>
          <li>Prices, billing cycles, and refund policies will be communicated during the purchase process.</li>
        </ul>

        <h2 className='text-lg font-semibold mt-6 mb-2'>6. Intellectual Property</h2>
        <p className='mb-4'>
          The SpendZen name, logo, and all content (excluding user-generated content) are our intellectual property, protected by applicable laws. You may not reproduce or redistribute any part of SpendZen without written permission.
        </p>

        <h2 className='text-lg font-semibold mt-6 mb-2'>7. Disclaimer of Warranties</h2>
        <p className='mb-4'>
          SpendZen is provided “as is” and “as available.” We make no guarantees regarding accuracy, reliability, or availability. Use the app at your own risk.
        </p>

        <h2 className='text-lg font-semibold mt-6 mb-2'>8. Limitation of Liability</h2>
        <p className='mb-4'>
          We are not liable for any direct, indirect, incidental, or consequential damages resulting from your use of SpendZen, including but not limited to financial losses, data loss, or system failures.
        </p>

        <h2 className='text-lg font-semibold mt-6 mb-2'>9. Termination</h2>
        <p className='mb-4'>
          We reserve the right to suspend or terminate your access to the Services at any time if you violate these Terms or engage in harmful behavior.
        </p>

        <h2 className='text-lg font-semibold mt-6 mb-2'>10. Changes to Terms</h2>
        <p className='mb-4'>
          We may update these Terms periodically. We will notify you of any changes via the app or email. Continued use of the Services implies acceptance of the revised Terms.
        </p>
      </div>
    </AuthLayout>
  )
}

export default TermsAndConditions
