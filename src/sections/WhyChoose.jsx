import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpenCheck, ShieldCheck, Users, Zap, Heart } from 'lucide-react';
import siteData from '../data/siteData';

const iconMap = {
  'graduation-cap': GraduationCap,
  'book-open-check': BookOpenCheck,
  'shield-check': ShieldCheck,
  'users': Users,
  'zap': Zap,
  'heart': Heart,
};

const WhyChoose = () => {
  const { whyChoose } = siteData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold">
              Por que nos escolher?
            </span>
          </motion.div>
          
          <h2 className="section-title mb-4">
            {whyChoose.title}
          </h2>
          
          <p className="section-subtitle mx-auto">
            {whyChoose.subtitle}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyChoose.reasons.map((reason, index) => {
            const Icon = iconMap[reason.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-6 lg:p-8 h-full hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Decorative element */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '3rem' }}
                    transition={{ duration: 0.3 }}
                    className="h-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mt-6"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#matricula"
            className="btn-primary inline-block"
          >
            Quero fazer parte dessa história
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
