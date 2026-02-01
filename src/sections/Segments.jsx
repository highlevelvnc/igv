import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Baby, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import siteData from '../data/siteData';

const iconMap = {
  'baby': Baby,
  'book-open': BookOpen,
  'graduation-cap': GraduationCap,
};

const Segments = () => {
  const { segments } = siteData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="segmentos" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <span className="bg-secondary-100 text-secondary-600 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Segmentos de Ensino
          </span>
          
          <h2 className="section-title mb-4">
            Educação completa do Infantil ao Ensino Médio
          </h2>
          
          <p className="section-subtitle mx-auto">
            Acompanhamos toda a jornada educacional do seu filho com excelência e dedicação
          </p>
        </motion.div>

        {/* Segments Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {segments.map((segment, index) => {
            const Icon = iconMap[segment.icon];
            return (
              <motion.div
                key={segment.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="glass-card rounded-3xl overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Header with gradient */}
                  <div className={`${segment.color} p-8 text-white relative overflow-hidden`}>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.2, 0.3]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute inset-0 bg-white/10"
                    />
                    
                    <div className="relative z-10">
                      <Icon className="w-12 h-12 mb-4" />
                      <h3 className="text-2xl font-display font-bold mb-2">
                        {segment.title}
                      </h3>
                      <p className="text-sm text-white/90 font-medium">
                        {segment.ageRange}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {segment.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3 mb-6">
                      {segment.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all"
                    >
                      Quero saber mais
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Segments;
