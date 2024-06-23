import FormSearch from '@components/form-search/form-search';
import HeaderNavigation from '@components/header-navigation/header-navigation';
import Logo from '@components/logo/logo';
import { useAppSelector } from '@hooks/index';
import { selectCameras } from '@store/slices/cameras-data/selectors';

function Header(): JSX.Element {
  const cameras = useAppSelector(selectCameras);
  return (
    <header className="header" id="header" data-testid="header">
      <div className="container">
        <Logo />
        <HeaderNavigation />
        <FormSearch cameras={cameras}/>
      </div>
    </header>
  );
}

export default Header;
