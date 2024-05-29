import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import { ReactNode } from 'react';

type TWrapperProps = {
  children: ReactNode;
  isProductPage?: boolean;
}

function Wrapper({ children, isProductPage = false }: TWrapperProps): JSX.Element {
  return (
    <div className="wrapper" data-testid="wrapper">
      <Header />
      <main>{children}</main>
      {isProductPage &&
        <a className="up-btn" href="#header">
          <svg width={12} height={18} aria-hidden="true">
            <use xlinkHref="#icon-arrow2" />
          </svg>
        </a>}
      <Footer />
    </div>
  );
}

export default Wrapper;
