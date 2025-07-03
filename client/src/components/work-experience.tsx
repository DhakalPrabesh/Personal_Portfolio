import { useLanguage } from "@/hooks/use-language";
import { getTranslation } from "@/lib/translations";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award } from "lucide-react";

export function WorkExperience() {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            {getTranslation("workExperience", language)}
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800">
                  {getTranslation("ikebanaSolutions", language)}
                </h3>
                <p className="text-lg text-slate-600">
                  {getTranslation("fullTimeEmployee", language)}
                </p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <Badge variant="default" className="bg-primary text-white text-sm px-4 py-2">
                  {getTranslation("march2023Present", language)}
                </Badge>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                  <Briefcase className="text-primary mr-2" size={20} />
                  {getTranslation("mainResponsibilities", language)}
                </h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>{getTranslation("reqDefDoc", language)}</li>
                  <li>{getTranslation("projectMgmt", language)}</li>
                  <li>{getTranslation("qualityAssurance", language)}</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                  <Award className="text-primary mr-2" size={20} />
                  {getTranslation("achievements", language)}
                </h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>{getTranslation("multiculturalTeam", language)}</li>
                  <li>{getTranslation("clientSatisfaction", language)}</li>
                  <li>{getTranslation("projectSuccess", language)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
