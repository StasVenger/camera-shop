import CatalogCard from '@components/catalog-card/catalog-card';
import { CameraInfo } from '@type/camera-info';

type TCatalogListProps = {
  cameras: CameraInfo[];
  onBuyClick: (camera: CameraInfo) => void;
}

function CatalogList({ cameras, onBuyClick }: TCatalogListProps): JSX.Element {
  return (
    <div className="cards catalog__cards" data-testid="catalog-list">
      {cameras.map((camera) => <CatalogCard key={camera.id} camera={camera} onBuyClick={() => onBuyClick(camera)} />)}
    </div>
  );
}

export default CatalogList;
