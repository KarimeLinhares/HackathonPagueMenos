import { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import { 
  Home, 
  Users, 
  Calendar, 
  BarChart3, 
  Pill, 
  Settings,
  User
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Users, label: "Pacientes", path: "/pacientes" },
    { icon: Calendar, label: "Agenda", path: "/agenda" },
    { icon: BarChart3, label: "Relatórios", path: "/relatorios" },
    { icon: Pill, label: "Medicamentos", path: "/medicamentos" },
    { icon: Settings, label: "Configurações", path: "/configuracoes" },
  ];

  return (
    <div className="min-h-screen bg-gradient-primary font-inter overflow-hidden">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-72 h-full bg-gradient-sidebar border-r border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-y-auto z-50">
        {/* Logo Section */}
        <div className="flex items-center gap-3 p-6 h-24">
          <div className="w-12 h-12 bg-gradient-logo rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(37,77,132,0.6),0_0_40px_rgba(37,77,132,0.4),0_0_60px_rgba(37,77,132,0.2)]">
            <Pill className="w-7 h-7 text-white" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-2xl font-bold leading-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
              Pague Menos
            </h1>
            <p className="text-blue-200 text-sm font-normal leading-5">
              Atendimento Clínico
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="px-4 mt-8">
          <nav className="space-y-2">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`w-full flex items-center gap-5 px-5 py-4 rounded-2xl border border-transparent transition-all duration-200 ${
                    isActive 
                      ? "text-white bg-white/5 hover:bg-white/10" 
                      : "text-blue-200 hover:bg-white/5"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-normal leading-5">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Profile Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <div className="bg-white/10 border border-white/20 rounded-3xl p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-profile rounded-3xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(235,65,97,0.6),0_0_40px_rgba(235,65,97,0.4),0_0_60px_rgba(235,65,97,0.2)]">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-lg font-bold leading-7 mb-1">Dr. Ana Silva</h3>
              <p className="text-blue-200 text-sm font-normal leading-5 mb-1">Farmacêutica</p>
              <p className="text-blue-300 text-xs font-normal leading-4">CRF-CE: 12345</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-72">
        {children}
      </div>
    </div>
  );
}
