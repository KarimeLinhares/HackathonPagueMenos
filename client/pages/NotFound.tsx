import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center">
      <div className="text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-clinical-red to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_20px_rgba(235,65,97,0.6),0_0_40px_rgba(235,65,97,0.4),0_0_60px_rgba(235,65,97,0.2)]">
          <AlertTriangle className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
          404
        </h1>
        <p className="text-blue-200 text-xl max-w-md mb-8 mx-auto">
          Página não encontrada. A página que você está procurando não existe ou foi movida.
        </p>
        <Link 
          to="/"
          className="inline-block bg-gradient-button border border-white/20 rounded-xl px-8 py-4 text-white text-lg font-bold leading-6 transition-all duration-200 hover:shadow-lg hover:scale-105"
        >
          Voltar ao Dashboard
        </Link>
      </div>
    </div>
  );
}
