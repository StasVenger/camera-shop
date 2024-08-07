import BasketCard from '@components/basket-card/basket-card';
import { CameraInfo } from '@type/camera-info';

type TBasketCardListProps = {
  cameras: CameraInfo[];
  onDeleteClick: (camera: CameraInfo) => void;
}

function BasketCardList({ cameras, onDeleteClick }: TBasketCardListProps): JSX.Element {
  return (
    <ul className="basket__list">
      {cameras.map((camera) => <BasketCard key={camera.id} camera={camera} onDeleteClick={onDeleteClick}/>)}
    </ul>
  );
}

export default BasketCardList;
