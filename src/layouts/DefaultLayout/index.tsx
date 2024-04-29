import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './style.scss';

interface Props {
  children: React.ReactNode;
  path?: string;
}

const DefaultLayout: React.FC<Props> = ({ path, children }) => {
  return (
    <main id="default-layout">
      <Header />
      <div className={`default-layout__main ${path === '/contacts' && 'default-layout__main__contacts'}`}>
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default DefaultLayout;
