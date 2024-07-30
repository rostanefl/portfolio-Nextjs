import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Header from './Header';

const Layout = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const hideHeaderAndFooterRoutes = ['/login', '/register'];

  return (
    <div>
      {isAuthenticated && !hideHeaderAndFooterRoutes.includes(router.pathname) && <Header />}
      <main>{children}</main>
      {isAuthenticated && !hideHeaderAndFooterRoutes.includes(router.pathname) && (
        <footer>
          {/* Your footer code */}
        </footer>
      )}
    </div>
  );
};

export default Layout;
