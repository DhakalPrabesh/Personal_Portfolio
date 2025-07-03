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
    // Create a link to download the PDF
    const link = document.createElement("a");
    link.href = "/resume.pdf";
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
                    src="https://dhakalprabesh.github.io/IMG_5696%202.jpg"
                    alt="Prabesh Dhakal"
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <CardTitle className="text-3xl font-bold text-slate-800">
                  {language === "ja" ? "プラベッシュ ダカール" : "Prabesh Dhakal"}
                </CardTitle>
                <p className="text-slate-600 mt-2">
                  {language === "ja" ? "ビジネスアナリスト" : "Business Analyst"}
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Education */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b pb-2">
                      {getTranslation("education", language)}
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-slate-800">
                          {getTranslation("chuoInfoCollege", language)}
                        </h4>
                        <p className="text-slate-600 text-sm">
                          {getTranslation("itDepartment", language)} (2023)
                        </p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-slate-800">
                          {getTranslation("saitamaJapaneseSchool", language)}
                        </h4>
                        <p className="text-slate-600 text-sm">
                          {getTranslation("japaneseLanguage", language)} (2020)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Work Experience */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b pb-2">
                      {getTranslation("workExperience", language)}
                    </h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-800">
                        {getTranslation("ikebanaSolutions", language)}
                      </h4>
                      <p className="text-slate-600 text-sm mb-2">
                        {getTranslation("fullTimeEmployee", language)} ({getTranslation("march2023Present", language)})
                      </p>
                      <p className="text-xs text-slate-600">
                        {language === "ja" 
                          ? "ビジネスアナリストとして、クライアントと開発チーム間の調整、要件定義、UAT管理を担当"
                          : "As a Business Analyst, responsible for coordination between clients and development teams, requirements definition, and UAT management."
                        }
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b pb-2">
                      {getTranslation("skills", language)}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">
                          {getTranslation("businessSkills", language)}
                        </h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• {getTranslation("requirementsDefinition", language)}</li>
                          <li>• {getTranslation("uatManagement", language)}</li>
                          <li>• {getTranslation("taskCoordination", language)}</li>
                          <li>• {getTranslation("crossCulturalManagement", language)}</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">
                          {getTranslation("technicalSkills", language)}
                        </h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• HTML/CSS/JavaScript</li>
                          <li>• UiPath (RPA)</li>
                          <li>• Excel VBA</li>
                          <li>• GitHub</li>
                          <li>• {getTranslation("languageSkillsDesc", language)}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b pb-2">
                      {getTranslation("contactInformation", language)}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                      <div>
                        <p><strong>Email:</strong> prabesh@example.com</p>
                        <p><strong>Phone:</strong> +81-XXX-XXXX-XXXX</p>
                      </div>
                      <div>
                        <p><strong>GitHub:</strong> github.com/dhakalprabesh</p>
                        <p><strong>Location:</strong> {getTranslation("tokyoJapan", language)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
