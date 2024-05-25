import { AppRoute } from '@constants';
import { NavLink } from 'react-router-dom';

function HeaderNavigation(): JSX.Element {
  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <NavLink className="main-nav__link" to={AppRoute.Root}>Каталог</NavLink>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link" href="#">Гарантии</a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link" href="#">Доставка</a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link" href="#">О компании</a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
