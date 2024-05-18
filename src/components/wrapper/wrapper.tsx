import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import { ReactNode } from 'react';

type TWrapperProps = {
  children: ReactNode;
}

function Wrapper({ children }: TWrapperProps): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Wrapper;
