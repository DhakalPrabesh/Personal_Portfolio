import { useLanguage } from "@/hooks/use-language";
import { getTranslation } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";
import { HeroSection } from "@/components/hero-section";
import { SelfIntroduction } from "@/components/self-introduction";
import { EducationSection } from "@/components/education-section";
import { WorkExperience } from "@/components/work-experience";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { Link } from "wouter";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-slate-800">
              {language === "ja" ? "プラベス ダカル" : "Prabesh Dhakal"}
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/resume">
                <Button className="bg-primary text-white hover:bg-blue-700">
                  {getTranslation("viewResume", language)}
                </Button>
              </Link>
              <LanguageToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <SelfIntroduction />
        <EducationSection />
        <WorkExperience />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            {getTranslation("copyright", language)}
          </p>
        </div>
      </footer>
    </div>
  );
}
