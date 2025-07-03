import { useLanguage } from "@/hooks/use-language";
import { getTranslation } from "@/lib/translations";
import { 
  FileText, 
  CheckSquare, 
  ListTodo, 
  MessageSquare, 
  Globe, 
  Bug, 
  Clock, 
  Handshake,
  Code2,
  Wand2,
  Bot,
  FileSpreadsheet,
  GitBranch,
  Languages
} from "lucide-react";

export function SkillsSection() {
  const { language } = useLanguage();

  const businessSkills = [
    { icon: FileText, key: "requirementsDefinition" },
    { icon: CheckSquare, key: "uatManagement" },
    { icon: ListTodo, key: "taskCoordination" },
    { icon: MessageSquare, key: "multilingualCommunication" },
    { icon: Globe, key: "crossCulturalManagement" },
    { icon: Bug, key: "problemSolving" },
    { icon: Clock, key: "timeManagement" },
    { icon: Handshake, key: "teamCollaboration" },
  ];

  const technicalSkills = [
    { icon: Code2, key: "frontendDev", descKey: "frontendDevDesc" },
    { icon: Wand2, key: "lowcodeDev", descKey: "lowcodeDevDesc" },
    { icon: Bot, key: "rpaAutomation", descKey: "rpaAutomationDesc" },
    { icon: FileSpreadsheet, key: "excelVBA", descKey: "excelVBADesc" },
    { icon: GitBranch, key: "versionControl", descKey: "versionControlDesc" },
    { icon: Languages, key: "languageSkills", descKey: "languageSkillsDesc" },
  ];

  return (
    <section id="skills" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            {getTranslation("skills", language)}
          </h2>
          
          {/* Business Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
              {getTranslation("businessSkills", language)}
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {businessSkills.map(({ icon: Icon, key }) => (
                <div key={key} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Icon className="text-primary text-2xl mb-2" />
                  <h4 className="font-semibold text-slate-800 text-sm">
                    {getTranslation(key, language)}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
              {getTranslation("technicalSkills", language)}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map(({ icon: Icon, key, descKey }) => (
                <div key={key} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Icon className="text-primary text-2xl mr-3" />
                    <h4 className="font-semibold text-slate-800">
                      {getTranslation(key, language)}
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    {getTranslation(descKey, language)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
