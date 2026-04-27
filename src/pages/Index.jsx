import Navbar from "@/components/landing/Navbar.jsx";
import Hero from "@/components/landing/Hero.jsx";
import Services from "@/components/landing/Services.jsx";
import WhyUs from "@/components/landing/WhyUs.jsx";
import Portfolio from "@/components/landing/Portfolio.jsx";
import Testimonials from "@/components/landing/Testimonials.jsx";
import Pricing from "@/components/landing/Pricing.jsx";
// import FAQ from "@/components/landing/FAQ.jsx";
import ContactForm from "@/components/landing/ContactForm.jsx";
import FinalCTA from "@/components/landing/FinalCTA.jsx";
import Footer from "@/components/landing/Footer.jsx";
import FloatingActions from "@/components/landing/FloatingActions.jsx";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <Testimonials />
      <Pricing />
      {/* <FAQ /> */}
      <ContactForm />
      <FinalCTA />
      <Footer />
      <FloatingActions />
    </main>
  );
};

export default Index;
