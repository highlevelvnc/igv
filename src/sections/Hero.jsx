import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import siteData from '../data/siteData';

const Hero = () => {
  const { hero } = siteData;

  const scrollToSection = (action) => {
    const sectionId = action === 'matricula' ? '#matricula' : '#contato';
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-900 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/4 w-full h-full bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/4 w-3/4 h-3/4 bg-secondary-400/10 rounded-full blur-3xl"
        />
        
        {/* Geometric shapes */}
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-white/20 rounded-lg"
        />
        <motion.div
          animate={{ y: [0, 40, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/3 w-16 h-16 border-2 border-white/20 rounded-full"
        />
      </div>

      <div className="section-container relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block mb-6"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-sm font-medium">
                ✨ 25 anos transformando futuros
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-6 leading-tight"
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/90 mb-8 lg:mb-10 leading-relaxed max-w-2xl"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {hero.ctas.map((cta, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(cta.action)}
                  className={`${
                    cta.type === 'primary'
                      ? 'bg-white text-primary-600 hover:bg-gray-50 shadow-2xl'
                      : 'bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20'
                  } px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 group`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cta.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              ))}
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-wrap gap-6 text-white/80"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-400" />
                <span className="text-sm">Matrículas abertas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-400" />
                <span className="text-sm">Parceira SAS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-yellow-400" />
                <span className="text-sm">Infraestrutura moderna</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card rounded-3xl p-8 backdrop-blur-xl bg-white/10 border-white/20"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">🎓</span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-xl">Educação de Excelência</div>
                      <div className="text-white/70">Iguaba Grande - RJ</div>
                    </div>
                  </div>
                  
                  <div className="h-px bg-white/20" />
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-white">
                      <span className="text-white/70">Educação Infantil</span>
                      <span className="font-semibold">✓</span>
                    </div>
                    <div className="flex justify-between items-center text-white">
                      <span className="text-white/70">Ensino Fundamental</span>
                      <span className="font-semibold">✓</span>
                    </div>
                    <div className="flex justify-between items-center text-white">
                      <span className="text-white/70">Ensino Médio</span>
                      <span className="font-semibold">✓</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">25+</div>
                  <div className="text-xs text-gray-600">Anos</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-secondary-500 rounded-2xl p-4 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">SAS</div>
                  <div className="text-xs text-white/80">Parceira</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
