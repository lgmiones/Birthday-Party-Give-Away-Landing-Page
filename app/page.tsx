import AnnouncementBanner from "@/components/AnnouncementBanner";
import HeroSection from "@/components/HeroSection";
import EntryForm from "@/components/EntryForm";
import PrizeSection from "@/components/PrizeSection";
import AboutBolderSection from "@/components/AboutBolderSection";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

// Kai's requested flow, single page, no click-through, no separate route:
// main headline, sub headline, video, button, form, more about Bolder,
// social proof. The prize breakdown sits right after the form for anyone
// who scrolls past it wanting more detail.
export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <main>
        {/* Main headline, sub headline, video, button */}
        <HeroSection />
        {/* Form — embedded directly on the page, the button above scrolls
            straight to it, no separate page in between */}
        <EntryForm />
        {/* What you'd actually win, for anyone scrolling past the form */}
        <PrizeSection />
        {/* More about Bolder */}
        <AboutBolderSection />
        {/* Social proof */}
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}
