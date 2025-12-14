import React from 'react';
import Hero from './componentes/Hero';
import Specialties from './componentes/Specialties';
import HowItWorks from './componentes/HowItWorks';
import CallToAction from './componentes/CallToAction';
import WhatsAppFloat from './componentes/WhatsAppFloat';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>Fisioterapia Home Care - Débora Pietraczk | Atendimento Domiciliar</title>
        <meta name="description" content="Fisioterapia especializada no conforto da sua casa. Osteopatia, Ortopedia e Pediatria com Débora Pietraczk. Transformando vidas através do movimento." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Hero />
        <Specialties />
        <HowItWorks />
        <CallToAction />
        <WhatsAppFloat />
      </div>
    </>
  );
}

export default App;