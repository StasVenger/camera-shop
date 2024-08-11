import BasketCard from '@components/basket-card/basket-card';
import { Basket } from '@type/basket';

type TBasketCardListProps = {
  cameras: Basket[];
  onDeleteClick: (camera: Basket) => void;
}

function BasketCardList({ cameras, onDeleteClick }: TBasketCardListProps): JSX.Element {
  return (
    <ul className="basket__list">
      {cameras.map((camera) => <BasketCard key={camera.id} camera={camera} onDeleteClick={onDeleteClick}/>)}
    </ul>
  );
}

export default BasketCardList;
