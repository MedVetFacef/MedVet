import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";

import TutoresList from "./pages/Tutores/TutoresList";
import NovoTutor from "./pages/Tutores/NovoTutor";
import AnimaisList from "./pages/Animais/AnimaisList";
import NovoAnimal from "./pages/Animais/NovoAnimal";
import ConsultasList from "./pages/Consultas/ConsultasList";
import NovaConsulta from "./pages/Consultas/NovaConsulta";
import MedicosList from "./pages/Medicos/MedicosList";
import NovoMedico from "./pages/Medicos/NovoMedico";
import AgendamentosList from "./pages/Agendamentos/AgendamentosList";
import NovoAgendamento from "./pages/Agendamentos/NovoAgendamento";

import Dashboard from "./components/Dashboard";



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="router-container"></div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/tutores" element={<TutoresList />} />
          <Route path="/tutores/novo" element={<NovoTutor />} />

          <Route path="/animais" element={<AnimaisList />} />
          <Route path="/animais/novo" element={<NovoAnimal />} />

          <Route path="/consultas" element={<ConsultasList />} />
          <Route path="/consultas/nova" element={<NovaConsulta />} />

          <Route path="/medicos" element={<MedicosList />} />
          <Route path="/medicos/novo" element={<NovoMedico />} />

          <Route path="/agendamentos" element={<AgendamentosList />} />
          <Route path="/agendamentos/novo" element={<NovoAgendamento />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/vethub-ia" element={<div>Em desenvolvimento: VetHub + IA</div>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
