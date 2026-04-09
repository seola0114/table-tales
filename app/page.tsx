import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ShowcaseSection from "@/components/landing/ShowcaseSection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center [&>*]:w-full">
      <Header />
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <ShowcaseSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
