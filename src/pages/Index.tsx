import ScrollyHero from "@/components/ScrollyHero";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import ArsenalSection from "@/components/ArsenalSection";
import FooterSection from "@/components/FooterSection";
import FloatingNav from "@/components/FloatingNav";

const Index = () => {
  return (
    <main className="bg-background">
      <FloatingNav />
      <ScrollyHero />
      <ProjectsSection />
      <WhatIDoSection />
      <AboutSection />
      <ArsenalSection />
      <FooterSection />
    </main>
  );
};

export default Index;
