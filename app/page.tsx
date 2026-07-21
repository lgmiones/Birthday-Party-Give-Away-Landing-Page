import HeroSection from "@/components/HeroSection";
import PrizeSection from "@/components/PrizeSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SocialProofSection from "@/components/SocialProofSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <PrizeSection />
        <BenefitsSection />
        <HowItWorksSection />
        <SocialProofSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
