
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const faqCategories = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What is SchoolRider?",
        answer: "SchoolRider is a comprehensive school dismissal management system designed to streamline the student pickup process, enhance safety protocols, and reduce congestion during dismissal times. It provides real-time tracking, digital check-in/out processes, and communication tools for schools, parents, and transportation providers."
      },
      {
        question: "How does SchoolRider benefit schools?",
        answer: "SchoolRider helps schools by automating the dismissal process, reducing administrative workload, minimizing traffic congestion, enhancing student safety, improving communication with parents, and providing data analytics for optimizing dismissal operations."
      },
      {
        question: "Is SchoolRider suitable for schools of all sizes?",
        answer: "Yes, SchoolRider is designed to be scalable and adaptable to schools of all sizes - from small private schools to large public school districts. The system can be customized to meet the specific needs and circumstances of each institution."
      },
      {
        question: "Do parents need to download an app to use SchoolRider?",
        answer: "Yes, parents can download the SchoolRider mobile app (available for both iOS and Android) to access all features, including real-time notifications, student status updates, and digital check-in capabilities. However, schools can also provide alternative access methods for parents without smartphones."
      }
    ]
  },
  {
    category: "Implementation & Setup",
    questions: [
      {
        question: "How long does it take to implement SchoolRider at my school?",
        answer: "The typical implementation timeline is 2-4 weeks, depending on the size of your school and specific requirements. Our team works closely with school administrators to ensure a smooth transition and provides comprehensive training for staff."
      },
      {
        question: "What equipment or hardware does my school need to use SchoolRider?",
        answer: "The basic requirements include a reliable internet connection, a computer or tablet for the main administrative dashboard, and optional tablets for staff members who will be managing curbside pickup areas. SchoolRider is designed to work with existing technology infrastructure whenever possible."
      },
      {
        question: "Does SchoolRider integrate with our existing school management system?",
        answer: "Yes, SchoolRider is designed to integrate with most popular school management systems including PowerSchool, Skyward, and Infinite Campus. Our team can work with your IT department to establish secure data connections with your existing systems."
      }
    ]
  },
  {
    category: "Using the System",
    questions: [
      {
        question: "How do parents notify the school when they've arrived for pickup?",
        answer: "Parents can check in using the mobile app when they arrive at the school. The system offers multiple check-in options including geofencing (automatic check-in when within school proximity), QR code scanning, or manual check-in buttons. Schools can choose which methods work best for their community."
      },
      {
        question: "What happens if a different person needs to pick up my child?",
        answer: "Parents can add authorized pickup persons to their child's profile in the app. These authorized individuals will have their own credentials to check in. For unexpected changes, parents can update authorized pickup persons in real-time or contact the school directly if needed."
      },
      {
        question: "Can SchoolRider handle different dismissal scenarios (bus riders, walkers, car riders)?",
        answer: "Yes, SchoolRider is designed to manage all dismissal types. Students can be categorized by their transportation method, and the system can handle different workflows for each category. This includes bus management, walker check-out, and car rider coordination."
      },
      {
        question: "What happens during inclement weather or emergency dismissals?",
        answer: "SchoolRider includes emergency protocols that can be activated during special circumstances. Administrators can instantly send notifications to all parents, modify dismissal procedures temporarily, and ensure students are safely accounted for during unusual dismissal situations."
      }
    ]
  },
  {
    category: "Security & Privacy",
    questions: [
      {
        question: "How secure is student information in the SchoolRider system?",
        answer: "SchoolRider takes data security extremely seriously. All data is encrypted both in transit and at rest. We comply with FERPA regulations and implement industry-standard security protocols to protect student and family information. Our systems undergo regular security audits and penetration testing."
      },
      {
        question: "Who has access to the data in SchoolRider?",
        answer: "Access to data is role-based and strictly controlled. School administrators determine which staff members have access to specific information. Parents can only access information about their own children. All system access is logged and monitored for security purposes."
      },
      {
        question: "Does SchoolRider sell or share user data with third parties?",
        answer: "No, SchoolRider does not sell user data. Any data sharing is strictly limited to what is necessary for the operation of the service and is always in compliance with our privacy policy and applicable education data privacy laws."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28">
        <section className="container px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about SchoolRider's dismissal management system
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`item-${index}-${i}`}>
                      <AccordionTrigger className="text-lg font-medium text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-accent rounded-xl p-8 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you with any questions or concerns you may have about SchoolRider.
            </p>
            <Button size="lg" className="gap-2">
              <MessageCircle className="h-5 w-5" />
              Contact Support
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
