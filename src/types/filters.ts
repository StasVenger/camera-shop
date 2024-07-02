
export enum Category {
  Photocamera = 'Фотоаппарат',
  Videocamera = 'Видеокамера',
}

export enum CameraType {
  Digital = 'Цифровая',
  Film = 'Плёночная',
  Snapshot = 'Моментальная',
  Collection = 'Коллекционная',
}

export enum Level {
  Zero = 'Нулевой',
  NonProfessional = 'Любительский',
  Professional = 'Профессиональный',
}

export type Filters = {
  maxPrice: number;
  minPrice: number;
  priceFrom: string;
  priceTo: string;
  category: Category | null;
  types: {
    [CameraType.Digital]: boolean;
    [CameraType.Film]: boolean;
    [CameraType.Snapshot]: boolean;
    [CameraType.Collection]: boolean;
  };
  levels: {
    [Level.Zero]: boolean;
    [Level.NonProfessional]: boolean;
    [Level.Professional]: boolean;
  };
}
