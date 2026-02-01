import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Calendar, Info, Clock, Users, Award } from 'lucide-react';
import siteData from '../data/siteData';

const iconMap = {
  'message-circle': MessageCircle,
  'calendar': Calendar,
  'info': Info,
};

const Enrollment = () => {
  const { enrollment } = siteData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleCTA = (type) => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5522999999999';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre matrículas no Instituto Genária Viana.');
    
    if (type === 'whatsapp') {
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    } else if (type === 'visit') {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de agendar uma visita presencial ao Instituto Genária Viana.')}`, '_blank');
    } else {
      const formSection = document.querySelector('#contato');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="matricula" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 -right-1/4 w-full h-full bg-primary-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-1/2 -left-1/4 w-3/4 h-3/4 bg-secondary-600 rounded-full blur-3xl"
        />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <div className="max-w-5xl mx-auto">
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold text-sm md:text-base shadow-lg">
              <Clock className="w-5 h-5" />
              {enrollment.urgency}
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {enrollment.title}
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {enrollment.description}
            </p>
          </motion.div>

          {/* Benefits grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: Users, text: 'Turmas reduzidas' },
              { icon: Award, text: 'Metodologia SAS' },
              { icon: Clock, text: 'Suporte integral' }
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card backdrop-blur-xl bg-white/10 border-white/20 rounded-2xl p-6 text-center"
              >
                <item.icon className="w-8 h-8 text-white mx-auto mb-3" />
                <p className="text-white font-semibold">{item.text}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-4 md:gap-6"
          >
            {enrollment.ctas.map((cta, index) => {
              const Icon = iconMap[cta.icon];
              return (
                <motion.button
                  key={index}
                  onClick={() => handleCTA(cta.type)}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    index === 0
                      ? 'bg-green-500 hover:bg-green-600 shadow-green-500/50'
                      : 'bg-white hover:bg-gray-50'
                  } ${
                    index === 0 ? 'text-white' : 'text-gray-900'
                  } rounded-2xl p-6 md:p-8 shadow-xl transition-all duration-300 group`}
                >
                  <Icon className={`w-8 h-8 md:w-10 md:h-10 mx-auto mb-4 ${
                    index === 0 ? 'text-white' : 'text-primary-600'
                  }`} />
                  <div className="font-bold text-base md:text-lg mb-2">
                    {cta.text}
                  </div>
                  {index === 0 && (
                    <div className="text-sm text-white/80">
                      Resposta em minutos
                    </div>
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 text-center"
          >
            <p className="text-white/70 text-sm md:text-base">
              🔒 Seus dados estão seguros | ⭐ Atendimento humanizado | 📞 Tire todas as suas dúvidas
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Enrollment;
