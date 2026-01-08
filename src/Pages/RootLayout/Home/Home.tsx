import { useEffect, useRef, useState } from 'react';
import { LogInCard } from '../../../Components/Organisms/LogInCard';
import { Footer } from '../../../Fixtures/Footer';
import { Box } from '@mui/material';
import { Hero } from './Hero';
import { LinkButton } from './LinkButton';
import { InfoSegment } from './InfoSegment';

export const Home = () => {
  const [activeSection, setActiveSection] = useState<'hero' | 'info'>('hero');
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('info');
        } else {
          setActiveSection('hero');
        }
      },
      { threshold: 0.5 }
    );

    if (infoRef.current) {
      observer.observe(infoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScrollToggle = () => {
    if (activeSection === 'hero') {
      infoRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Box id="hero" sx={{ scrollSnapAlign: 'start' }}>
        <Hero />
      </Box>

      <Box id="info" ref={infoRef} sx={{ scrollSnapAlign: 'start' }}>
        <InfoSegment />
      </Box>

      <LinkButton
        activeSection={activeSection}
        onToggleScroll={handleScrollToggle}
      />

      <Footer onLoginClick={() => setIsLoginOpen(true)} />
      <LogInCard open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};
