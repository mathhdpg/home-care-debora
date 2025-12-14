import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Home, Clipboard, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: 'Agendamento',
      description: 'Entre em contato via WhatsApp e agende sua consulta no melhor horário para você.',
      number: '01'
    },
    {
      icon: Home,
      title: 'Avaliação Domiciliar',
      description: 'Realizamos uma avaliação completa no conforto da sua casa, entendendo suas necessidades.',
      number: '02'
    },
    {
      icon: Clipboard,
      title: 'Plano Personalizado',
      description: 'Desenvolvemos um plano de tratamento exclusivo, adaptado aos seus objetivos.',
      number: '03'
    },
    {
      icon: TrendingUp,
      title: 'Acompanhamento',
      description: 'Sessões regulares com acompanhamento contínuo da sua evolução e ajustes necessários.',
      number: '04'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50" id="como-funciona">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Como Funciona o Home Care
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um processo simples e eficiente para cuidar da sua saúde
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 h-full">
                  {/* Number badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector dot */}
                {/* <div className="hidden lg:block absolute top-24 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-md z-10" /> */}
              </motion.div>
            );
          })}
        </div>

        {/* Benefits section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">Conforto</div>
              <div className="text-emerald-100">Atendimento na sua casa</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Flexibilidade</div>
              <div className="text-emerald-100">Horários adaptados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Personalização</div>
              <div className="text-emerald-100">Tratamento exclusivo</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;