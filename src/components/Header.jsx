import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Segmentos', href: '#segmentos' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-display font-bold text-xl lg:text-2xl">IGV</span>
              </div>
              <div className="hidden sm:block">
                <div className={`font-display font-bold text-lg lg:text-xl transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Instituto Genária Viana
                </div>
                <div className={`text-xs lg:text-sm transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-white/80'
                }`}>
                  25 anos de tradição
                </div>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all hover:bg-primary-50 ${
                    isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:22999242053"
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <motion.a
                href="#matricula"
                onClick={(e) => handleNavClick(e, '#matricula')}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Matricular agora
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className={`w-7 h-7 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-7 h-7 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-30 bg-white lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-6">
              <nav className="flex-1 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block py-4 px-6 text-lg font-semibold text-gray-900 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <div className="space-y-4 pt-6 border-t border-gray-200">
                <a
                  href="tel:5522999999999"
                  className="flex items-center justify-center space-x-2 py-4 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">(22) 99924-2053</span>
                </a>
                <motion.a
                  href="#matricula"
                  onClick={(e) => handleNavClick(e, '#matricula')}
                  className="btn-primary w-full text-center block"
                  whileTap={{ scale: 0.95 }}
                >
                  Matricular agora
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
