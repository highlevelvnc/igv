import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import Preloader from './components/Preloader';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Analytics from './components/Analytics';

// Sections
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import WhyChoose from './sections/WhyChoose';
import Segments from './sections/Segments';
import SASPartnership from './sections/SASPartnership';
import Testimonials from './sections/Testimonials';
import Enrollment from './sections/Enrollment';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <SEO />
      <Analytics />
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Header />
          <main>
            <Hero />
            <Stats />
            <WhyChoose />
            <Segments />
            <SASPartnership />
            <Testimonials />
            <Enrollment />
            <FAQ />
            <Contact />
          </main>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  );
}

export default App;
