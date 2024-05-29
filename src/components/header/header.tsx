import HeaderNavigation from '@components/header-navigation/header-navigation';
import Logo from '@components/logo/logo';

function Header(): JSX.Element {
  return (
    <header className="header" id="header" data-testid="header">
      <div className="container">
        <Logo />
        <HeaderNavigation />
      </div>
    </header>
  );
}

export default Header;
