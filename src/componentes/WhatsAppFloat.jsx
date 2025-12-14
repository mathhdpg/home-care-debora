import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useToast } from './ui/use-toast';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after button appears
      setTimeout(() => setShowTooltip(true), 500);
      // Hide tooltip after 5 seconds
      setTimeout(() => setShowTooltip(false), 5500);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    toast({
      title: "📱 Redirecionando para o WhatsApp",
      description: "Aguarde, a janela do WhatsApp será aberta em breve!",
    });
    window.open('https://wa.me/554599584096?&text=Olá%21+Gostaria+de+agendar+um+atendimento+de+fisioterapia+home+care+com+a+Débora+Pietraczk.+Qual+é+a+melhor+forma+de+agendar%3F', '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-full right-0 mb-4 bg-white text-gray-900 px-4 py-3 rounded-2xl shadow-xl border border-emerald-100 whitespace-nowrap"
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Precisa de ajuda?</span>
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-1">Fale conosco no WhatsApp!</p>
                {/* Arrow */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-emerald-100 transform rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center group overflow-hidden"
          >
            {/* Ripple effect */}
            <motion.div
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-emerald-400 rounded-full"
            />
            
            {/* Icon */}
            <MessageCircle className="w-8 h-8 text-white z-10" />

          </motion.button>
            {/* Notification badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 500, damping: 15 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center z-10"
            >
              <span className="text-white text-xs font-bold">1</span>
            </motion.div>

          {/* Hover text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap pointer-events-none"
          >
            Fale no WhatsApp
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloat;