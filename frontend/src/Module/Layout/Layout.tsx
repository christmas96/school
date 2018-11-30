import * as React from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.SFC<IProps> = ({ children }) => {
  return (
    <>
      <Header/>

      <main>{children}</main>

      <Footer/>
    </>
  );
};
