
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28">
        <section className="container px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: June 15, 2023</p>
            
            <div className="prose prose-slate max-w-none">
              <p>
                At SchoolRider, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our school dismissal management platform (the "Service"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Service.
              </p>
              
              <h2 className="text-2xl font-bold my-6">1. Information We Collect</h2>
              
              <p>
                We collect several types of information from and about users of our Service, including:
              </p>
              
              <h3 className="text-xl font-semibold my-4">1.1 Personal Information</h3>
              
              <p>
                When you register for an account or use our Service, we may collect personally identifiable information, such as:
              </p>
              
              <ul className="list-disc ml-8 my-4 space-y-2">
                <li>For school administrators and staff: Name, email address, phone number, job title, school affiliation.</li>
                <li>For parents/guardians: Name, email address, phone number, relationship to student(s), home address (optional), vehicle information (optional).</li>
                <li>For students: Name, grade level, homeroom teacher, student ID number, photo (if provided by school or parent), special dismissal instructions, authorized pickup persons.</li>
              </ul>
              
              <h3 className="text-xl font-semibold my-4">1.2 Usage Data</h3>
              
              <p>
                We automatically collect certain information about how you interact with our Service, including:
              </p>
              
              <ul className="list-disc ml-8 my-4 space-y-2">
                <li>Log data: IP address, browser type, pages visited, time and date of visits, time spent on pages.</li>
                <li>Device information: Device type, operating system, unique device identifiers.</li>
                <li>Location data (if permitted): General location based on IP address, precise location (only with explicit permission and only when using mobile app check-in features).</li>
              </ul>
              
              <h2 className="text-2xl font-bold my-6">2. How We Use Your Information</h2>
              
              <p>
                We use the information we collect to:
              </p>
              
              <ul className="list-disc ml-8 my-4 space-y-2">
                <li>Provide, maintain, and improve the Service, including facilitating safe and efficient school dismissal procedures.</li>
                <li>Process and complete dismissal-related transactions.</li>
                <li>Send notifications about dismissal status, including when students are ready for pickup or have been picked up.</li>
                <li>Respond to your comments, questions, and requests.</li>
                <li>Provide customer service and technical support.</li>
                <li>Monitor and analyze usage trends and preferences to improve the Service.</li>
                <li>Protect the security and integrity of the Service.</li>
                <li>Comply with legal obligations.</li>
              </ul>
              
              <h2 className="text-2xl font-bold my-6">3. How We Share Your Information</h2>
              
              <p>
                We may share your personal information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold my-4">3.1 With Schools</h3>
              
              <p>
                If you are a parent or guardian, we may share your information and your child's information with the school(s) that your child attends. Schools have access to information necessary to manage their dismissal process and communicate with parents.
              </p>
              
              <h3 className="text-xl font-semibold my-4">3.2 With Service Providers</h3>
              
              <p>
                We may share information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf. These service providers are contractually obligated to use your personal information only for the purposes of providing services to us and to maintain the confidentiality and security of your information.
              </p>
              
              <h3 className="text-xl font-semibold my-4">3.3 For Legal Reasons</h3>
              
              <p>
                We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency). We may also disclose your information to protect the rights, property, or safety of SchoolRider, our users, or others.
              </p>
              
              <h3 className="text-xl font-semibold my-4">3.4 With Your Consent</h3>
              
              <p>
                We may share your information with third parties when you have given us your consent to do so.
              </p>
              
              <h2 className="text-2xl font-bold my-6">4. Student Data Privacy</h2>
              
              <p>
                We are committed to protecting student data privacy and complying with all applicable laws regarding student data, including:
              </p>
              
              <ul className="list-disc ml-8 my-4 space-y-2">
                <li>Family Educational Rights and Privacy Act (FERPA)</li>
                <li>Children's Online Privacy Protection Act (COPPA)</li>
                <li>Student privacy pledge principles</li>
                <li>State student data privacy laws</li>
              </ul>
              
              <p>
                We do not collect, maintain, use, or share student personal information beyond what is needed for authorized educational/school purposes or as authorized by the parent/guardian. We never sell student information or use student information for targeted advertising purposes.
              </p>
              
              <h2 className="text-2xl font-bold my-6">5. Data Security</h2>
              
              <p>
                We implement appropriate technical and organizational measures to maintain the security of your personal information and protect it against unauthorized or unlawful processing, accidental loss, destruction, or damage. These measures include:
              </p>
              
              <ul className="list-disc ml-8 my-4 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Access controls and authentication requirements</li>
                <li>Regular security assessments and testing</li>
                <li>Employee training on data security best practices</li>
              </ul>
              
              <p>
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
              
              <h2 className="text-2xl font-bold my-6">6. Your Rights and Choices</h2>
              
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              
              <ul className="list-disc ml-8 my-4 space-y-2">
                <li>The right to access, update, or delete your personal information</li>
                <li>The right to rectification if your information is inaccurate or incomplete</li>
                <li>The right to object to our processing of your personal information</li>
                <li>The right to request that we restrict the processing of your personal information</li>
                <li>The right to data portability</li>
              </ul>
              
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
              
              <h3 className="text-xl font-semibold my-4">6.1 Parents/Guardians</h3>
              
              <p>
                Parents/guardians can review, update, or request deletion of their child's information through the SchoolRider app/website or by contacting their child's school. Schools may have their own procedures for handling such requests in accordance with their policies and applicable laws.
              </p>
              
              <h3 className="text-xl font-semibold my-4">6.2 School Administrators</h3>
              
              <p>
                School administrators can manage user accounts, update school information, and configure privacy settings through the administrative dashboard. They can also contact SchoolRider support for assistance with data management requests.
              </p>
              
              <h2 className="text-2xl font-bold my-6">7. Data Retention</h2>
              
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law or requested by the school. Student information is typically retained for the current school year, after which it may be archived or deleted according to school district policies and applicable laws.
              </p>
              
              <h2 className="text-2xl font-bold my-6">8. Changes to This Privacy Policy</h2>
              
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top. For significant changes, we will provide additional notice, such as sending an email notification to registered users or displaying a prominent notice within the Service.
              </p>
              
              <p>
                We encourage you to review the Privacy Policy whenever you access the Service to stay informed about our information practices and your privacy rights and choices.
              </p>
              
              <h2 className="text-2xl font-bold my-6">9. Contact Us</h2>
              
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
              </p>
              
              <p className="my-4">
                <strong>SchoolRider, Inc.</strong><br />
                123 Education Lane<br />
                Suite 400<br />
                San Francisco, CA 94107<br />
                Email: privacy@schoolrider.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
            
            <div className="mt-12 border-t pt-8">
              <p className="text-muted-foreground">
                By using the SchoolRider platform, you acknowledge that you have read this Privacy Policy and understand its contents.
              </p>
              <p className="mt-4">
                <Link to="/terms-conditions" className="text-primary hover:underline">View our Terms & Conditions</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
