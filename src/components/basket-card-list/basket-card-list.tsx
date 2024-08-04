import BasketCard from '@components/basket-card/basket-card';
import { CameraInfo } from '@type/camera-info';

type TBasketCardListProps = {
  cameras: CameraInfo[];
}

function BasketCardList({ cameras }: TBasketCardListProps): JSX.Element {
  return (
    <ul className="basket__list">
      {cameras.map((camera) => <BasketCard key={camera.id} camera={camera}/>)}
    </ul>
  );
}

export default BasketCardList;
