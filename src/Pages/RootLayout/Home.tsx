import { useState } from 'react';
import { LogInCard } from '../../Components/Organisms/LogInCard';
import { Footer } from '../../Fixtures/Footer';

export const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <>
      <Footer onLoginClick={() => setIsLoginOpen(true)} />
      <LogInCard open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};
