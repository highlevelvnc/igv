import { motion } from 'framer-motion';
import { Heart, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import siteData from '../data/siteData';

const Footer = () => {
  const { school, contact } = siteData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white pt-16 pb-8">
      <div className="section-container">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">IGV</span>
              </div>
              <div>
                <div className="font-display font-bold text-lg">{school.name}</div>
                <div className="text-sm text-white/70">{school.years} anos de tradição</div>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Formando cidadãos preparados para os desafios do futuro com excelência, inovação e valores.
            </p>
            <div className="flex gap-3">
              <a
                href={contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={contact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '#home' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Segmentos', href: '#segmentos' },
                { label: 'Metodologia', href: '#metodologia' },
                { label: 'Depoimentos', href: '#depoimentos' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Segments */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Segmentos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#segmentos" className="text-white/70 hover:text-white transition-colors text-sm">
                  Educação Infantil
                </a>
              </li>
              <li>
                <a href="#segmentos" className="text-white/70 hover:text-white transition-colors text-sm">
                  Ensino Fundamental
                </a>
              </li>
              <li>
                <a href="#segmentos" className="text-white/70 hover:text-white transition-colors text-sm">
                  Ensino Médio
                </a>
              </li>
              <li>
                <a href="#metodologia" className="text-white/70 hover:text-white transition-colors text-sm">
                  Metodologia SAS
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\D/g, '')}`}
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-all">{contact.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{contact.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © {currentYear} {school.name}. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-2">
              Desenvolvido com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> para educação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
