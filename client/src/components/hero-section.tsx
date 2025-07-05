import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { getTranslation } from "@/lib/translations";
import { Link } from "wouter";

export function HeroSection() {
  const { language } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/Prabesh007.png"
              alt="Prabesh Dhakal Profile Picture"
              className="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl border-4 border-white"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {getTranslation("portfolioWelcome", language)}
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            {getTranslation("businessAnalyst", language)}
          </p>
          <div className="flex justify-center space-x-4 flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="shadow-lg"
            >
              {getTranslation("contactMe", language)}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("skills")}
              className="shadow-lg"
            >
              {getTranslation("viewSkills", language)}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
