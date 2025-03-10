
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28">
        <section className="container px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
            <p className="text-muted-foreground mb-8">Last updated: June 15, 2023</p>
            
            <div className="prose prose-slate max-w-none">
              <p>
                Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the SchoolRider website or mobile application (the "Service") operated by SchoolRider, Inc. ("SchoolRider", "us", "we", or "our").
              </p>
              
              <p>
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
              
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>
              
              <h2 className="text-2xl font-bold my-6">1. Use of Service</h2>
              
              <p>
                SchoolRider provides a school dismissal management platform that helps schools, parents, and caregivers coordinate the safe and efficient pickup of students. The Service includes web and mobile applications that facilitate communication, coordination, and management of the dismissal process.
              </p>
              
              <h2 className="text-2xl font-bold my-6">2. Account Registration</h2>
              
              <p>
                To use certain features of the Service, you must register for an account. When you register, you agree to provide accurate, current, and complete information about yourself. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to immediately notify SchoolRider of any unauthorized use of your account.
              </p>
              
              <p>
                Schools and districts are responsible for managing staff accounts and ensuring that access to student information is limited to authorized personnel in accordance with applicable educational privacy laws.
              </p>
              
              <h2 className="text-2xl font-bold my-6">3. User Responsibilities</h2>
              
              <h3 className="text-xl font-semibold my-4">3.1 General Responsibilities</h3>
              
              <p>
                You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
              </p>
              
              <ul className="list-disc ml-8 my-4 space-y-2">
                <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
                <li>To impersonate or attempt to impersonate SchoolRider, a SchoolRider employee, another user, or any other person or entity.</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which may harm SchoolRider or users of the Service.</li>
                <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service or any server, computer, or database connected to the Service.</li>
              </ul>
              
              <h3 className="text-xl font-semibold my-4">3.2 School Administrator Responsibilities</h3>
              
              <p>
                If you are using the Service as a school administrator, you represent that you have the authority to enter into these Terms on behalf of your school or district. You are responsible for:
              </p>
              
              <ul className="list-disc ml-8 my-4 space-y-2">
                <li>Obtaining necessary consent from parents/guardians for student participation in the Service in accordance with your school's policies and applicable laws.</li>
                <li>Managing staff access to the system and ensuring staff members understand their responsibilities regarding student data privacy.</li>
                <li>Maintaining accurate student and parent information in the system.</li>
                <li>Establishing and communicating dismissal procedures to parents, staff, and students.</li>
              </ul>
              
              <h2 className="text-2xl font-bold my-6">4. Intellectual Property</h2>
              
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of SchoolRider and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of SchoolRider.
              </p>
              
              <h2 className="text-2xl font-bold my-6">5. Privacy</h2>
              
              <p>
                Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding personal information. By using the Service, you acknowledge that you have read and understood our Privacy Policy and consent to the collection, use, and disclosure of your information as described therein.
              </p>
              
              <p>
                We are committed to protecting student privacy and complying with all applicable laws regarding student data, including the Family Educational Rights and Privacy Act (FERPA) and state student privacy laws.
              </p>
              
              <h2 className="text-2xl font-bold my-6">6. Termination</h2>
              
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              
              <p>
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
              </p>
              
              <h2 className="text-2xl font-bold my-6">7. Limitation of Liability</h2>
              
              <p>
                In no event shall SchoolRider, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              
              <ul className="list-disc ml-8 my-4 space-y-2">
                <li>Your access to or use of or inability to access or use the Service;</li>
                <li>Any conduct or content of any third party on the Service;</li>
                <li>Any content obtained from the Service; and</li>
                <li>Unauthorized access, use or alteration of your transmissions or content.</li>
              </ul>
              
              <h2 className="text-2xl font-bold my-6">8. Changes to Terms</h2>
              
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any material changes to these Terms by posting the new Terms on this page and updating the "Last updated" date at the top of these Terms.
              </p>
              
              <p>
                Your continued use of the Service after any such changes constitutes your acceptance of the new Terms. Please review these Terms regularly to ensure you are aware of any changes.
              </p>
              
              <h2 className="text-2xl font-bold my-6">9. Contact Us</h2>
              
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              
              <p className="my-4">
                <strong>SchoolRider, Inc.</strong><br />
                123 Education Lane<br />
                Suite 400<br />
                San Francisco, CA 94107<br />
                Email: legal@schoolrider.com<br />
                Phone: (555) 123-4567
              </p>
              
              <p>
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
            </div>
            
            <div className="mt-12 border-t pt-8">
              <p className="text-muted-foreground">
                By using the SchoolRider platform, you acknowledge that you have read these Terms and Conditions and agree to be bound by them.
              </p>
              <p className="mt-4">
                <Link to="/privacy" className="text-primary hover:underline">View our Privacy Policy</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
