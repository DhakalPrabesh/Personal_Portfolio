import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { getTranslation } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function ContactSection() {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically send the form data to a server
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            {getTranslation("contactMe", language)}
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {getTranslation("contactInformation", language)}
                </h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center">
                    <Mail className="text-primary mr-3" size={20} />
                    <span className="text-slate-600">ek.prabeshdhakal@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-primary mr-3" size={20} />
                    <span className="text-slate-600">+81-70-8348-4042</span>
                  </div>
                  <div className="flex items-center">
                    <FaGithub className="text-primary mr-3" size={20} />
                    <span className="text-slate-600">github.com/dhakalprabesh</span>
                  </div>
                  <div className="flex items-center">
                    <FaLinkedin className="text-primary mr-3" size={20} />
                    <span className="text-slate-600">www.linkedin.com/in/prabesh-dhakal-34017626a</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-primary mr-3" size={20} />
                    <span className="text-slate-600">
                      {getTranslation("tokyoJapan", language)}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {getTranslation("sendMessage", language)}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder={getTranslation("yourName", language)}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder={getTranslation("yourEmail", language)}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Textarea
                    placeholder={getTranslation("yourMessage", language)}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                  <Button type="submit" className="w-full">
                    {getTranslation("sendBtn", language)}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
