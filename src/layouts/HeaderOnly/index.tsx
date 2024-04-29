import React from 'react';
import Header from '../components/Header';

interface Props {
  children: React.ReactNode;
}

const HeaderOnlyLayout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default HeaderOnlyLayout;
