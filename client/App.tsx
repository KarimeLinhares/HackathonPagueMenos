import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import Index from "./pages/Index";
import Pacientes from "./pages/Pacientes";
import Agenda from "./pages/Agenda";
import Relatorios from "./pages/Relatorios";
import Medicamentos from "./pages/Medicamentos";
import Configuracoes from "./pages/Configuracoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout><Index /></DashboardLayout>} />
          <Route path="/pacientes" element={<DashboardLayout><Pacientes /></DashboardLayout>} />
          <Route path="/agenda" element={<DashboardLayout><Agenda /></DashboardLayout>} />
          <Route path="/relatorios" element={<DashboardLayout><Relatorios /></DashboardLayout>} />
          <Route path="/medicamentos" element={<DashboardLayout><Medicamentos /></DashboardLayout>} />
          <Route path="/configuracoes" element={<DashboardLayout><Configuracoes /></DashboardLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
