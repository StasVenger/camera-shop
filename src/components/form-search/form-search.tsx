import { AppRoute } from '@constants';
import { CameraInfo } from '@type/camera-info';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type TFormSearchProps = {
  cameras: CameraInfo[];
};

function FormSearch({ cameras }: TFormSearchProps): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [filteredCameras, setFilteredCameras] = useState<CameraInfo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputValue.length >= 3) {
      const searchResults = cameras.filter((camera) =>
        camera.name.toLowerCase().includes(inputValue.toLowerCase())
      ).slice(0, 4);
      setFilteredCameras(searchResults);
    } else {
      setFilteredCameras([]);
    }
  }, [inputValue, cameras]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleResetClick = () => {
    setInputValue('');
    setFilteredCameras([]);
  };

  const handleSelectCamera = (cameraId: string) => {
    navigate(`${AppRoute.Camera}/${cameraId}`);
  };

  return (
    <div className={classNames('form-search', {'list-opened': inputValue.length > 0})}>
      <form>
        <label>
          <svg className="form-search__icon" width={16} height={16} aria-hidden="true">
            <use xlinkHref="#icon-lens" />
          </svg>
          <input
            className="form-search__input"
            type="text"
            autoComplete="off"
            placeholder="Поиск по сайту"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
        {filteredCameras.length > 0 && (
          <ul className="form-search__select-list">
            {filteredCameras.map((camera) => (
              <li
                key={camera.id}
                className="form-search__select-item"
                tabIndex={0}
                onClick={() => handleSelectCamera(camera.id)}
              >
                {camera.name}
              </li>
            ))}
          </ul>
        )}
      </form>
      <button className="form-search__reset" type="reset" onClick={handleResetClick}>
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg><span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

export default FormSearch;
