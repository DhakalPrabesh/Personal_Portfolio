import { useLanguage } from "@/hooks/use-language";
import { getTranslation } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Resume() {
  const { language } = useLanguage();

  const handleDownload = () => {
    // Create a link to download the Png
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Prabesh_Dhakal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2" size={16} />
                  Back
                </Button>
              </Link>
              <div className="text-xl font-bold text-slate-800">
                {getTranslation("resume", language)}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button onClick={handleDownload} className="bg-primary text-white hover:bg-blue-700">
                <Download className="mr-2" size={16} />
                {getTranslation("download", language)}
              </Button>
              <LanguageToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="mb-4">
                  <img
                    src="prabesh007.png"
                    alt="Prabesh Dhakal"
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <CardTitle className="text-3xl font-bold text-slate-800">
                  {language === "ja" ? "プラベス ダカル" : "Prabesh Dhakal"}
                </CardTitle>
                <p className="text-slate-600 mt-2">
                  {language === "ja" ? "ビジネスアナリスト" : "Business Analyst"}
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex justify-center items-center">
                  <iframe
                    src="/Resume.pdf"
                    title="Resume PDF"
                    className="w-full h-[80vh] shadow-lg rounded-lg border"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
