"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardTestimonial from "@/components/sections/hero/HeroBillboardTestimonial";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import MetricCardEleven from "@/components/sections/metrics/MetricCardEleven";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Shield, Wrench, Search, ClipboardCheck, Award, Users, Clock } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            brandName="9X Services"
            navItems={[
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Testimonials", id: "testimonials" },
              { name: "FAQ", id: "faq" },
              { name: "Contact", id: "contact" },
            ]}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardTestimonial
            background={{ variant: "glowing-orb" }}
            title="Excellence in Every Detail, 9X Services."
            description="We deliver high-end facility and maintenance solutions designed for modern business environments. Contact us at 1-817-271-8550. Precision, reliability, and growth driven by our expert team."
            buttons={[
              { text: "Explore Solutions", href: "#services" },
              { text: "Request Consultation", href: "#contact" },
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFJdZg6mYP5vddUOuW7tUYFi4q/uploaded-1777874530952-5e8r3785.png"
            imageAlt="Corporate facility interior"
            marqueeItems={[
              { type: "text-icon", text: "Operations Excellence", icon: Award },
              { type: "text-icon", text: "Professional Support", icon: Users },
              { type: "text-icon", text: "Certified Quality", icon: Shield },
              { type: "text-icon", text: "Efficiency Focused", icon: Clock },
            ]}
            testimonials={[
              {
                name: "Sarah Jenkins",                handle: "Operations Manager",                testimonial: "The quality provided by 9X Services is unmatched. They optimized our workflow completely.",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-businesswoman-suit-cross-arms-chest-looking-like-real-professional-smili_1258-122403.jpg"
              },
              {
                name: "Mark Sterling",                handle: "CEO, TechFlow",                testimonial: "Strategic partners that deliver consistent, high-performing results every time.",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/browneyed-stylish-brunet-bearded-man-white-shirt-checkered-jacket-smiles-looks-into-camera-orange-background_197531-29376.jpg"
              }
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <SplitAbout
            title="The Standard of Operational Quality."
            description="At 9X Services, we pride ourselves on delivering scalable infrastructure and maintenance solutions. Our philosophy is rooted in meticulous attention to detail and long-term client success."
            bulletPoints={[
              { title: "Strategic Planning", description: "Data-driven insights to power your facility operations.", icon: Search },
              { title: "Certified Standards", description: "Compliance and safety at the core of every project.", icon: Shield },
              { title: "Advanced Tech", description: "Leveraging modern tools to maximize efficiency.", icon: Wrench }
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFJdZg6mYP5vddUOuW7tUYFi4q/uploaded-1777874810270-op7o6bpe.png"
            imagePosition="right"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardThree
            title="Our Core Competencies"
            description="Specialized service packages tailored to your business needs."
            features={[
              { title: "Facility Maintenance", description: "Preventative and corrective care for your physical assets.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFJdZg6mYP5vddUOuW7tUYFi4q/uploaded-1777874914167-n0sblyb9.png" },
              { title: "Operational Strategy", description: "Consulting services to refine and optimize your workflows.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFJdZg6mYP5vddUOuW7tUYFi4q/uploaded-1777874707220-v6k7fmsh.png" },
              { title: "Asset Management", description: "Lifecycle tracking and performance optimization.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFJdZg6mYP5vddUOuW7tUYFi4q/uploaded-1777874717944-7gd761fa.png" }
            ]}
            gridVariant="three-columns-all-equal-width"
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricCardEleven
            title="Results That Matter"
            description="Tangible growth through disciplined, professional execution."
            metrics={[
              { id: "1", value: "9.8/10", title: "Avg Satisfaction", description: "Our client feedback score remains industry leading.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFJdZg6mYP5vddUOuW7tUYFi4q/uploaded-1777875263813-u3vxkab0.png" },
              { id: "2", value: "7AM-8PM", title: "Service Uptime", description: "Constant support for your mission-critical operations.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFJdZg6mYP5vddUOuW7tUYFi4q/uploaded-1777875277989-09zjx6gv.png" },
              { id: "3", value: "500+", title: "Projects Delivered", description: "Extensive track record of successful enterprise engagements.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFJdZg6mYP5vddUOuW7tUYFi4q/uploaded-1777875228786-fsa22upa.png" }
            ]}
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>

        <div id="process" data-section="process">
          <FeatureCardTen
            title="Our Proven Methodology"
            description="A transparent approach that guarantees project success."
            features={[
              {
                title: "Discovery Phase",                description: "Deep audit of current operations and pain points.",                media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFJdZg6mYP5vddUOuW7tUYFi4q/uploaded-1777875334387-e4uafdd7.png" },
                items: [{ icon: Search, text: "Initial Assessment" }, { icon: ClipboardCheck, text: "Goal Alignment" }],
                reverse: false
              }
            ]}
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardOne
            title="PHOTOS"
            description=""
            testimonials={[
              { id: "1", name: 'Lisa McEnturff-"Getting a new roof is a big thing for us"', role: "", company: "", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFJdZg6mYP5vddUOuW7tUYFi4q/uploaded-1777875435533-pqcl2ex1.png" },
              { id: "2", name: 'Brandy england-"What a great experience Truett is very easy to work with"', role: "", company: "", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFJdZg6mYP5vddUOuW7tUYFi4q/uploaded-1777875465251-2mlyn4h9.png" }
            ]}
            gridVariant="three-columns-all-equal-width"
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            title="Frequently Asked Questions"
            description="Everything you need to know about partnering with 9X. Call 1-817-271-8550 for urgent queries."
            faqs={[
              { id: "1", title: "How do we get started?", content: "Fill out the contact form and we will reach out within 24 hours." },
              { id: "2", title: "Are your services scalable?", content: "Yes, all our service packages are fully modular." }
            ]}
            faqsAnimation="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            title="Contact 9X Services"
            description="Call us directly at 1-817-271-8550 or submit the form for a custom plan."
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name" },
              { name: "email", type: "email", placeholder: "Work Email" }
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DFJdZg6mYP5vddUOuW7tUYFi4q/uploaded-1777876134066-0bq9n0mi.png"
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            logoText="9X Services                              Call (817) 271-8550"
            columns={[
              { title: "Navigation", items: [{ label: "Home", href: "#" }, { label: "Contact", href: "#contact" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
