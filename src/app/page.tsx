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
import { Shield, Wrench, Search, HelpCircle, ClipboardCheck, Phone, HardHat, CheckCircle, Clock, Users, Award, ThumbsUp, Star } from "lucide-react";

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
            description="We deliver high-end facility and maintenance solutions designed for modern business environments. Precision, reliability, and growth driven by our expert team."
            buttons={[
              { text: "Explore Solutions", href: "#services" },
              { text: "Request Consultation", href: "#contact" },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/view-modern-office_1170-1963.jpg"
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
            imageSrc="http://img.b2bpic.net/free-photo/co-workers-talking-about-annual-sales_1098-489.jpg"
            imagePosition="right"
            textboxLayout="default"
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardThree
            title="Our Core Competencies"
            description="Specialized service packages tailored to your business needs."
            features={[
              { title: "Facility Maintenance", description: "Preventative and corrective care for your physical assets.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-worker-hard-hat-large-metalworking-plant_146671-19551.jpg" },
              { title: "Operational Strategy", description: "Consulting services to refine and optimize your workflows.", imageSrc: "http://img.b2bpic.net/free-photo/creative-thinking-business-strategy-concept_53876-132164.jpg" },
              { title: "Asset Management", description: "Lifecycle tracking and performance optimization.", imageSrc: "http://img.b2bpic.net/free-photo/angry-manager-office-berating-worker-hitting-performance-targets_482257-126645.jpg" }
            ]}
            gridVariant="three-columns-all-equal-width"
            animationType="slide-up"
            textboxLayout="default"
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricCardEleven
            title="Results That Matter"
            description="Tangible growth through disciplined, professional execution."
            metrics={[
              { id: "1", value: "9.8/10", title: "Avg Satisfaction", description: "Our client feedback score remains industry leading.", imageSrc: "http://img.b2bpic.net/free-photo/dynamic-data-visualization-3d_23-2151904317.jpg" },
              { id: "2", value: "24/7", title: "Service Uptime", description: "Constant support for your mission-critical operations.", imageSrc: "http://img.b2bpic.net/free-photo/future-visions-business-technology-concept_23-2151893460.jpg" },
              { id: "3", value: "500+", title: "Projects Delivered", description: "Extensive track record of successful enterprise engagements.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-fuel-level-gauge-vehicle_23-2150163679.jpg" }
            ]}
            animationType="slide-up"
            textboxLayout="default"
          />
        </div>

        <div id="process" data-section="process">
          <FeatureCardTen
            title="Our Proven Methodology"
            description="A transparent approach that guarantees project success."
            features={[
              {
                title: "Discovery Phase",                description: "Deep audit of current operations and pain points.",                media: { imageSrc: "http://img.b2bpic.net/free-photo/flowchart-information-methodology-operation-icon_53876-133778.jpg" },
                items: [{ icon: Search, text: "Initial Assessment" }, { icon: ClipboardCheck, text: "Goal Alignment" }],
                reverse: false
              }
            ]}
            animationType="slide-up"
            textboxLayout="default"
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardOne
            title="Trusted by Leaders"
            description="Hear how partners have scaled with our support."
            testimonials={[
              { id: "1", name: "Alex Rivers", role: "Director", company: "Innovate Corp", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-posing-indoors-side-view_23-2149833740.jpg" },
              { id: "2", name: "Elena Vo", role: "Founder", company: "Global Dynamics", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/confident-businesswoman-looking-camera-with-arm-crossed_23-2148187252.jpg" }
            ]}
            gridVariant="three-columns-all-equal-width"
            animationType="slide-up"
            textboxLayout="default"
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            title="Frequently Asked Questions"
            description="Everything you need to know about partnering with 9X."
            faqs={[
              { id: "1", title: "How do we get started?", content: "Fill out the contact form and we will reach out within 24 hours." },
              { id: "2", title: "Are your services scalable?", content: "Yes, all our service packages are fully modular." }
            ]}
            faqsAnimation="slide-up"
            textboxLayout="default"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            title="Contact 9X Services"
            description="Let us know your requirements and we will build a custom plan for you."
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name" },
              { name: "email", type: "email", placeholder: "Work Email" }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/business-meeting-room-office_1170-1966.jpg"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            logoText="9X Services"
            columns={[
              { title: "Navigation", items: [{ label: "Home", href: "#" }, { label: "Contact", href: "#contact" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}