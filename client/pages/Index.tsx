import {
  AlertTriangle,
  FileText,
  TrendingUp,
  Users
} from "lucide-react";

export default function Index() {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const metrics = [
    {
      title: "PACIENTES ATENDIDOS HOJE",
      value: "24",
      change: "+12%",
      changeText: "vs ontem",
      positive: true,
      icon: Users,
      action: "Relatório de Atendimentos"
    },
    {
      title: "CONSULTAS REALIZADAS",
      value: "18", 
      change: "+8%",
      changeText: "vs ontem",
      positive: true,
      icon: FileText,
      action: "Relatório de Consultas"
    },
    {
      title: "ALERTAS DE INTERAÇÃO",
      value: "3",
      change: "-25%", 
      changeText: "vs ontem",
      positive: false,
      icon: AlertTriangle,
      action: "Relatório de Alertas"
    },
    {
      title: "SATISFAÇÃO DO CLIENTE",
      value: "96%",
      change: "+2%",
      changeText: "vs ontem", 
      positive: true,
      icon: TrendingUp,
      action: "Relatório de Satisfação"
    }
  ];

  const activities = [
    {
      patient: "Maria Silva",
      description: "Consulta farmacêutica realizada",
      medication: "Enalapril 10mg",
      time: "14:30"
    },
    {
      patient: "João Santos", 
      description: "Alerta de interação identificado",
      medication: "Warfarina + Aspirina",
      time: "13:45"
    },
    {
      patient: "Ana Costa",
      description: "Seguimento farmacoterap��utico", 
      medication: "Metformina 850mg",
      time: "12:20"
    }
  ];

  const alerts = [
    {
      text: "3 interações medicamentosas detectadas",
      color: "bg-orange-500",
      textColor: "text-orange-900"
    },
    {
      text: "5 pacientes aguardam seguimento",
      color: "bg-gradient-logo",
      textColor: "text-clinical-blue-primary"
    },
    {
      text: "Meta mensal 85% concluída",
      color: "bg-green-500", 
      textColor: "text-green-900"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-gradient-header border-b border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="bg-white/15 border border-white/20 rounded-xl px-4 py-2">
            <span className="text-blue-200 text-sm font-bold leading-5">
              {currentDate}
            </span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-gradient-content px-48 py-8">
          <div className="space-y-8">
            {/* Title Section */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-10 bg-gradient-text bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
                Dashboard - Atendimento Clínico
              </h1>
              <p className="text-clinical-text-secondary text-xl font-bold leading-7">
                Acompanhe os indicadores de atendimento da sua farmácia Pague Menos
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-gradient-card border border-clinical-blue-primary/10 rounded-xl shadow-[0_10px_40px_rgba(37,77,132,0.1),0_4px_20px_rgba(34,0,186,0.05),inset_0_1px_0_rgba(255,255,255,0.2)]"
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 px-6 py-6 flex items-center justify-between">
                    <h3 className="text-clinical-text-primary text-sm font-bold leading-5 tracking-wider uppercase">
                      {metric.title}
                    </h3>
                    <div className="w-14 h-14 bg-gradient-logo rounded-2xl flex items-center justify-center">
                      <metric.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="text-clinical-text-primary text-4xl font-black leading-10 tracking-tight">
                      {metric.value}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-lg font-bold leading-7 ${
                        metric.positive ? "text-green-600" : "text-red-500"
                      }`}>
                        {metric.change}
                      </span>
                      <span className="text-clinical-text-muted text-sm font-bold leading-5">
                        {metric.changeText}
                      </span>
                    </div>
                    <button className="w-full bg-gradient-button border border-white/20 rounded-xl px-6 py-3 text-white text-sm font-bold leading-5 transition-all duration-200 hover:shadow-lg">
                      {metric.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-2 gap-10">
              {/* Activities Card */}
              <div className="bg-gradient-card border border-clinical-blue-primary/10 rounded-xl shadow-[0_10px_40px_rgba(37,77,132,0.1),0_4px_20px_rgba(34,0,186,0.05),inset_0_1px_0_rgba(255,255,255,0.2)] p-1">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-50 border-b border-clinical-border/50 p-6 rounded-t-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-logo rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-black text-2xl font-bold leading-8">Atividades Recentes</h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-5 p-5 bg-gradient-to-r from-slate-50/80 to-blue-50/40 border border-clinical-border/50 rounded-2xl">
                      <div className="w-12 h-12 bg-gradient-logo rounded-2xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h3 className="text-clinical-text-primary text-lg font-bold leading-7">
                          {activity.patient}
                        </h3>
                        <p className="text-clinical-text-secondary text-sm font-bold leading-5">
                          {activity.description}
                        </p>
                        <span className="inline-block bg-clinical-blue-primary/10 text-clinical-blue-primary text-xs font-bold leading-4 px-3 py-1 rounded-full">
                          {activity.medication}
                        </span>
                      </div>
                      <div className="bg-white/80 border border-clinical-border rounded-xl px-4 py-2 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)]">
                        <span className="text-clinical-text-primary text-sm font-bold leading-5">
                          {activity.time}
                        </span>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-clinical-border/50">
                    <button className="w-full bg-gradient-button border border-white/20 rounded-xl px-6 py-3 text-white text-sm font-bold leading-5 transition-all duration-200 hover:shadow-lg">
                      Ver Agenda Completa
                    </button>
                  </div>
                </div>
              </div>

              {/* Alerts Card */}
              <div className="bg-gradient-card border border-clinical-blue-primary/10 rounded-xl shadow-[0_10px_40px_rgba(37,77,132,0.1),0_4px_20px_rgba(34,0,186,0.05),inset_0_1px_0_rgba(255,255,255,0.2)] p-1">
                {/* Header */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-b border-clinical-border/50 p-6 rounded-t-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-clinical-red to-red-600 rounded-xl flex items-center justify-center shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-black text-2xl font-bold leading-8">Alertas e Lembretes</h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {alerts.map((alert, index) => (
                    <div key={index} className="p-6 rounded-2xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 ${alert.color} rounded-xl flex items-center justify-center shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]`}>
                          <AlertTriangle className="w-6 h-6 text-white" />
                        </div>
                        <span className={`text-lg font-bold leading-7 ${alert.textColor}`}>
                          {alert.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
