import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Users, Target, ArrowRight } from 'lucide-react';
import siteData from '../data/siteData';

const iconMap = {
  'book-open': BookOpen,
  'users': Users,
  'target': Target,
};

const SASPartnership = () => {
  const { sasBenefits } = siteData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="metodologia" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-white" />
      
      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-secondary-100 text-secondary-600 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
              Metodologia de Excelência
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              {sasBenefits.title}
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {sasBenefits.subtitle}
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              {sasBenefits.description}
            </p>

            <motion.a
              href="#matricula"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              Conhecer nossa metodologia
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {sasBenefits.benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="glass-card rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Logo placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 glass-card rounded-2xl px-8 py-6 border border-gray-200">
            <div className="text-4xl font-bold bg-gradient-to-r from-secondary-600 to-secondary-800 bg-clip-text text-transparent">
              SAS
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="text-left">
              <div className="font-display font-bold text-gray-900">Sistema de Ensino</div>
              <div className="text-sm text-gray-600">Parceiro oficial</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SASPartnership;
