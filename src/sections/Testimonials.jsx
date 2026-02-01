import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import siteData from '../data/siteData';

const Testimonials = () => {
  const { testimonials } = siteData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-400 rounded-full blur-3xl"
        />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Depoimentos
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            O que as famílias dizem sobre nós
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            A confiança de quem já escolheu o melhor para seus filhos
          </p>
        </motion.div>

        {/* Slider */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main card */}
            <div className="glass-card rounded-3xl p-8 md:p-12 backdrop-blur-xl bg-white/10 border-white/20 relative overflow-hidden">
              <Quote className="absolute top-8 right-8 w-16 h-16 text-white/10" />
              
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div>
                  <div className="font-display font-bold text-white text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-white/70">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/20">
                <button
                  onClick={prev}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-white w-8'
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                      aria-label={`Ir para depoimento ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
