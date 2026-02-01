import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Award, BookOpen, CheckCircle, Users } from 'lucide-react';
import siteData from '../data/siteData';

const iconMap = {
  'award': Award,
  'book-open': BookOpen,
  'check-circle': CheckCircle,
  'users': Users,
};

const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const isInfinity = end === '∞';
    if (isInfinity) {
      setCount(end);
      return;
    }

    const numericEnd = parseInt(end.replace(/\D/g, ''));
    const steps = 60;
    const increment = numericEnd / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericEnd) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current) + suffix);
      }
    }, (duration * 1000) / steps);

    return () => clearInterval(timer);
  }, [isInView, end, duration, suffix]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  const { stats } = siteData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-600 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="glass-card rounded-2xl p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </motion.div>
                  
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold gradient-text mb-2">
                    <AnimatedCounter end={stat.number} />
                  </div>
                  
                  <div className="text-sm lg:text-base text-gray-600 font-medium">
                    {stat.label}
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

export default Stats;
