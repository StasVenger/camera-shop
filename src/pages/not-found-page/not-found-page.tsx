import { Link } from 'react-router-dom';
import { AppRoute } from '@constants';
import HelmetComponent from '@components/helmet-component/helmet-component';
import './not-found-page.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="not-found-page">
      <HelmetComponent title="Страница не найдена - Camera Shop" />
      <h2>404 Not Found</h2>
      <Link to={AppRoute.Root}>Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundPage;
