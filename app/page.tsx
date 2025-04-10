import HeroSection from "@/app/components/ui/hero/HeroSection";
import About from "@/app/components/ui/about/About";
import Activities from "@/app/components/ui/activities/Activities";

export default function Home() {
  return (
    <div data-theme="flowersHomepage">
      <HeroSection />
      <About />
      <Activities />
    </div>
  );
}
