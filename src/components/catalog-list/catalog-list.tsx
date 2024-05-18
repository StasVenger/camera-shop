import CatalogCard from '@components/catalog-card/catalog-card';
import { CameraInfo } from '@type/camera-info';

type TCatalogListProps = {
  cameras: CameraInfo[];
}

function CatalogList({ cameras }: TCatalogListProps): JSX.Element {
  return (
    <div className="cards catalog__cards">
      {cameras.map((camera) => <CatalogCard key={camera.id} camera={camera}/>)}
    </div>
  );
}

export default CatalogList;
