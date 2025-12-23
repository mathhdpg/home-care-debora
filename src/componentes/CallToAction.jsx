import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button.jsx';
import { useToast } from './ui/use-toast';

const CallToAction = () => {
  const { toast } = useToast();

  const handleContact = () => {
    toast({
      title: "📱 Entre em contato",
      description: "Em breve você será redirecionado para o WhatsApp!",
    });
    // In production, this would open WhatsApp
    // window.open('https://wa.me/554599584096', '_blank');
  };

  return (
    <section className="py-20 bg-white" id="contato">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left side - CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 lg:p-16 flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Pronto para transformar sua qualidade de vida?
              </h2>
              <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
                Agende sua primeira consulta e descubra como a fisioterapia domiciliar pode fazer a diferença na sua recuperação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleContact}
                  size="lg"
                  className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Agendar Agora
                </Button>
                {/* Email button removed as requested */}
              </div>
            </motion.div>

            {/* Right side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-8 md:p-12 lg:p-16 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-cyan-100 text-sm mb-1">Telefone / WhatsApp</div>
                    <div className="text-white font-semibold text-lg">55 45 9958-4096</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-cyan-100 text-sm mb-1">Área de Atendimento</div>
                    <div className="text-white font-semibold text-lg">Cascavel/PR</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-cyan-100 text-sm mb-1">Horário de Atendimento</div>
                    <div className="text-white font-semibold text-lg">Segunda a Sexta: 8h - 18h</div>
                    <div className="text-cyan-100 text-sm mt-1">Sábado: 8h - 12h</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;