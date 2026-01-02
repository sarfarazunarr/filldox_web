import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Showcase } from "@/components/Showcase";
import { Roadmap } from "@/components/Roadmap";
import { Pricing } from "@/components/Pricing";
import { Download } from "@/components/Download";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Hero />
      <Features />
      <Showcase />
      <Roadmap />
      <Pricing />
      <Download />
      <Newsletter />
      <Footer />
    </main>
  );
}
