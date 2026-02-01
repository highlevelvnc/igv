import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import siteData from '../data/siteData';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl border border-gray-200 overflow-hidden"
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 md:px-8 md:py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-display font-bold text-gray-900 text-base md:text-lg flex-1">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary-100 text-primary-600"
        >
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 md:px-8 md:pb-6 pt-0">
              <p className="text-gray-600 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const { faq } = siteData;
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <span className="bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Perguntas Frequentes
          </span>
          
          <h2 className="section-title mb-4">
            Tire suas dúvidas
          </h2>
          
          <p className="section-subtitle mx-auto">
            Reunimos as principais perguntas de pais e responsáveis
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faq.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="#contato"
            className="btn-primary inline-block"
          >
            Entre em contato conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
