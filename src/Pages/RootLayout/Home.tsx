import { useEffect, useRef, useState } from 'react';
import { LogInCard } from '../../Components/Organisms/LogInCard';
import { Box } from '@mui/material';
import { Hero } from '../../Components/Templates/Hero';
import { LinkButton } from '../../Components/Atoms/LinkButton';
import { InfoSegment } from '../../Components/Templates/InfoSegment';
import { Footer } from '../../Components/Fixtures/Footer';

export const Home = () => {
  const [activeSection, setActiveSection] = useState<'hero' | 'info'>('hero');
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const infoRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !infoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('info');
        } else {
          setActiveSection('hero');
        }
      },
      { root: container, threshold: 0.1 }
    );

    observer.observe(infoRef.current);

    return () => observer.disconnect();
  }, []);

  const handleScrollToggle = () => {
    if (activeSection === 'hero') {
      infoRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: { xs: 'none', md: 'y mandatory' },
        scrollBehavior: 'smooth',
        position: 'relative',
      }}
    >
      <Box id="hero" ref={heroRef} sx={{ height: '100vh', scrollSnapAlign: { xs: 'none', md: 'start' } }}>
        <Hero />
      </Box>

      <Box id="info" ref={infoRef} sx={{ minHeight: '100vh', scrollSnapAlign: { xs: 'none', md: 'start' } }}>
        <InfoSegment />
      </Box>

      <LinkButton activeSection={activeSection} onToggleScroll={handleScrollToggle} />

      <Footer onClick={() => setIsLoginOpen(true)} />
      <LogInCard open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </Box>
  );
};
