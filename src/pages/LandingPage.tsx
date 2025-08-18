import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import SocialProof from "@/components/SocialProof";
import WaitlistSection from "@/components/WaitlistSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeatureGrid />
        <SocialProof />
        <WaitlistSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;