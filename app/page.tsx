import HeroSection from "@/components/HeroSection";
import PrizeSection from "@/components/PrizeSection";
import AboutBolderSection from "@/components/AboutBolderSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <PrizeSection />
        <AboutBolderSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
