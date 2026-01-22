import { Outlet } from 'react-router';
import { HeaderLogo } from '../../Components/Fixtures/HeaderLogo';

export const RootLayout = () => {
  return (
    <>
      <header>
        <HeaderLogo />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
