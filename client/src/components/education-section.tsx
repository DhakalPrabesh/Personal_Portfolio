import { useLanguage } from "@/hooks/use-language";
import { getTranslation } from "@/lib/translations";
import { Badge } from "@/components/ui/badge";

export function EducationSection() {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            {getTranslation("education", language)}
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-primary">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {getTranslation("chuoInfoCollege", language)}
                  </h3>
                  <p className="text-slate-600">
                    {getTranslation("itDepartment", language)}
                  </p>
                </div>
                <div className="text-right">
                  <Badge variant="default" className="bg-primary text-white">
                    2023
                  </Badge>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-emerald-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {getTranslation("saitamaJapaneseSchool", language)}
                  </h3>
                  <p className="text-slate-600">
                    {getTranslation("japaneseLanguage", language)}
                  </p>
                </div>
                <div className="text-right">
                  <Badge variant="default" className="bg-emerald-500 text-white">
                    2021
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
