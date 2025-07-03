import { useLanguage } from "@/hooks/use-language";
import { getTranslation } from "@/lib/translations";
import { Users, ServerCog, CheckCircle, Globe } from "lucide-react";

export function SelfIntroduction() {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            {getTranslation("selfIntroduction", language)}
          </h2>
          <div className="bg-slate-50 rounded-2xl p-8 shadow-sm">
            <div className="prose max-w-none text-slate-700 leading-relaxed">
              <p className="text-lg mb-6">
                {getTranslation("introText", language)}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <Users className="text-primary mr-2" size={20} />
                    {getTranslation("clientRelations", language)}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {getTranslation("clientRelationsDesc", language)}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <ServerCog className="text-primary mr-2" size={20} />
                    {getTranslation("teamManagement", language)}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {getTranslation("teamManagementDesc", language)}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <CheckCircle className="text-primary mr-2" size={20} />
                    {getTranslation("uatSupport", language)}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {getTranslation("uatSupportDesc", language)}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <Globe className="text-primary mr-2" size={20} />
                    {getTranslation("internationalCollaboration", language)}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {getTranslation("internationalCollaborationDesc", language)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
