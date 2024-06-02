import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import { ReactNode } from 'react';

type TWrapperProps = {
  children: ReactNode;
  isProductPage?: boolean;
}

function Wrapper({ children, isProductPage = false }: TWrapperProps): JSX.Element {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="wrapper" data-testid="wrapper">
      <Header />
      <main>{children}</main>
      {isProductPage &&
        <button className="up-btn" onClick={handleScrollToTop}>
          <svg width={12} height={18} aria-hidden="true">
            <use xlinkHref="#icon-arrow2" />
          </svg>
        </button>}
      <Footer />
    </div>
  );
}

export default Wrapper;
