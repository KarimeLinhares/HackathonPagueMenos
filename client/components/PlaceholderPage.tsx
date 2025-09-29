import { LucideIcon } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function PlaceholderPage({
  title,
  description,
  icon: Icon
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-content flex items-center justify-center">
      <div className="text-center">
        <div className="w-24 h-24 bg-gradient-logo rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_20px_rgba(37,77,132,0.6),0_0_40px_rgba(37,77,132,0.4),0_0_60px_rgba(37,77,132,0.2)]">
          <Icon className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-text bg-clip-text text-transparent mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
          {title}
        </h1>
        <p className="text-clinical-text-secondary text-xl max-w-md mb-8">
          {description}
        </p>
        <div className="bg-gradient-card border border-clinical-blue-primary/10 rounded-xl p-6 max-w-lg mx-auto shadow-[0_10px_40px_rgba(37,77,132,0.1),0_4px_20px_rgba(34,0,186,0.05),inset_0_1px_0_rgba(255,255,255,0.2)]">
          <p className="text-clinical-text-primary text-lg leading-relaxed">
            Esta página está em desenvolvimento. Continue conversando comigo para que eu possa implementar o conteúdo desta seção do sistema.
          </p>
        </div>
      </div>
    </div>
  );
}
