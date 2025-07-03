import { useLanguage } from "@/hooks/use-language";
import { Switch } from "@/components/ui/switch";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-muted-foreground">EN</span>
      <Switch
        checked={language === "ja"}
        onCheckedChange={(checked) => setLanguage(checked ? "ja" : "en")}
      />
      <span className="text-sm text-muted-foreground">JP</span>
    </div>
  );
}
