import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import siteData from '../data/siteData';

const Contact = () => {
  const { contact } = siteData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    segment: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5522999999999';
    const message = `
*Nova solicitação de informações*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Segmento:* ${formData.segment}
*Mensagem:* ${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
              Contato
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Vamos conversar sobre o futuro do seu filho?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa equipe está pronta para atender você e esclarecer todas as suas dúvidas. Entre em contato conosco!
            </p>

            {/* Contact methods */}
            <div className="space-y-6">
              <motion.a
                href={`tel:${contact.phone.replace(/\D/g, '')}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Telefone</div>
                  <div className="text-gray-600">{contact.phone}</div>
                </div>
              </motion.a>

              <motion.a
                href={`mailto:${contact.email}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">E-mail</div>
                  <div className="text-gray-600">{contact.email}</div>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Endereço</div>
                  <div className="text-gray-600">{contact.address}</div>
                </div>
              </motion.div>
            </div>

            {/* Social media */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-4">Siga-nos nas redes sociais</p>
              <div className="flex gap-4">
                <motion.a
                  href={contact.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={contact.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-10 border border-gray-200">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Solicite informações
              </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nome do responsável *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                    placeholder="(22) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="segment" className="block text-sm font-semibold text-gray-900 mb-2">
                    Segmento de interesse *
                  </label>
                  <select
                    id="segment"
                    name="segment"
                    required
                    value={formData.segment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                  >
                    <option value="">Selecione...</option>
                    <option value="Educação Infantil">Educação Infantil</option>
                    <option value="Ensino Fundamental">Ensino Fundamental</option>
                    <option value="Ensino Médio">Ensino Médio</option>
                    <option value="Não sei ainda">Não sei ainda</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
                    placeholder="Conte-nos um pouco sobre suas necessidades..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  Enviar mensagem
                  <Send className="w-5 h-5" />
                </motion.button>

                <p className="text-xs text-gray-500 text-center">
                  Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pronta
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
