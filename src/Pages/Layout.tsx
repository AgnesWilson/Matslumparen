import { Outlet } from 'react-router';
import { HeaderLogo } from '../Fixtures/HeaderLogo';

export const Layout = () => {
  return (
    <>
      <header>
        <HeaderLogo />
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
};
