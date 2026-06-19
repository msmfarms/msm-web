import Header from "./components/Header";
import Hero from "./components/Hero";
import Founder from "./components/Founder";
import Vision from "./components/Vision";
import Services from "./components/Services";
import Innovations from "./components/Innovations";
import Roadmap from "./components/Roadmap";
import CTABanner from "./components/CTABanner";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Founder />
        <Vision />
        <Services />
        <Innovations />
        <Roadmap />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
