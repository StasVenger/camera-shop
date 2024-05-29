import { AppRoute } from '@constants';
import { Link } from 'react-router-dom';

function Logo(): JSX.Element {
  return (
    <Link className="header__logo" to={AppRoute.Root} aria-label="Переход на главную" data-testid="logo">
      <svg width={100} height={36} aria-hidden="true">
        <use xlinkHref="#icon-logo" />
      </svg>
    </Link>
  );
}

export default Logo;
