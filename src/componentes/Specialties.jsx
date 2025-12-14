import React from 'react';
import { motion } from 'framer-motion';
import { Bone, Heart, Baby, ArrowRight } from 'lucide-react';
import { useToast } from './ui/use-toast';
import { openWhatsApp } from '../lib/utils';

const Specialties = () => {
  const { toast } = useToast();

  const specialties = [
    {
      icon: Bone,
      title: 'Osteopatia',
      description: 'Tratamento manual que visa restaurar o equilíbrio e a harmonia do corpo através de técnicas específicas.',
      features: [
        'Alívio de dores crônicas',
        'Melhora da mobilidade',
        'Tratamento holístico',
        'Técnicas manuais avançadas'
      ],
      color: 'emerald'
    },
    {
      icon: Heart,
      title: 'Ortopedia',
      description: 'Reabilitação especializada para lesões musculoesqueléticas, pós-operatório e condições ortopédicas.',
      features: [
        'Recuperação pós-cirúrgica',
        'Tratamento de lesões',
        'Fortalecimento muscular',
        'Prevenção de recidivas'
      ],
      color: 'green'
    },
    {
      icon: Baby,
      title: 'Pediatria',
      description: 'Cuidado especializado para bebês e crianças, promovendo desenvolvimento motor saudável.',
      features: [
        'Desenvolvimento motor',
        'Tratamento de atrasos',
        'Estimulação precoce',
        'Acompanhamento individualizado'
      ],
      color: 'teal'
    }
  ];

  const handleLearnMore = (specialty) => {
    // toast({
    //   title: `Saiba mais sobre ${specialty}`,
    //   description: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Você pode solicitá-la no próximo prompt! 🚀",
    // });
    const message = `Olá! Gostaria de saber mais sobre a especialidade de ${specialty} oferecida pela Débora Pietraczk. Poderia me fornecer mais informações?`;
    openWhatsApp(message);
  };

  return (
    <section className="py-20 bg-white" id="especialidades">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossas Especialidades
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Atendimento especializado e personalizado para cada necessidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100 "
              >
                <div className={`w-16 h-16 bg-${specialty.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 text-${specialty.color}-600`} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 ">
                  {specialty.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {specialty.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {specialty.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleLearnMore(specialty.title)}
                  className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className={`absolute top-0 right-0 w-32 h-32 bg-${specialty.color}-200 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specialties;