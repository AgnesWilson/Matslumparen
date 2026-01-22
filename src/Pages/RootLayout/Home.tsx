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
      {
        root: window.innerWidth < 900 ? null : container,
        threshold: 0.1,
      }
    );

    observer.observe(infoRef.current);
    return () => observer.disconnect();
  }, []);

  const handleScrollToggle = () => {
    if (activeSection === 'hero') {
      infoRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      if (window.innerWidth < 900) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        height: { xs: 'auto', md: '100dvh' },
        overflowY: { xs: 'visible', md: 'auto' },
        scrollSnapType: { xs: 'none', md: 'y mandatory' },
        scrollBehavior: 'smooth',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box id="hero" sx={{ height: '100dvh', flexShrink: 0, scrollSnapAlign: 'start' }}>
        <Hero />
      </Box>

      <Box id="info" ref={infoRef} sx={{ minHeight: '100dvh', flexShrink: 0, scrollSnapAlign: 'start' }}>
        <InfoSegment />
      </Box>
      <Box sx={{ scrollSnapAlign: 'end' }}>
        <Footer onClick={() => setIsLoginOpen(true)} />
      </Box>

      <LinkButton activeSection={activeSection} onToggleScroll={handleScrollToggle} />
      <LogInCard open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </Box>
  );
};
