import FilterCheckbox from '@components/filter-checkbox/filter-checkbox';
import FilterPriceInput from '@components/filter-price-input/filter-price-input';
import FilterRadioElement from '@components/filter-radio-element/filter-radio-element';
import { INITIAL_FILTERS } from '@constants';
import { CameraType, Category, Filters, Level } from '@type/filters';
import { useCallback } from 'react';

type TCatalogFilterProps = {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

function CatalogFilter({ filters, onFilterChange }: TCatalogFilterProps): JSX.Element {
  const updateFilters = useCallback((newFilters: Partial<Filters>) => {
    onFilterChange({ ...filters, ...newFilters });
  }, [filters, onFilterChange]);

  const handlePriceChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    updateFilters({
      [name]: value === '' ? '' : Number(value).toString(),
    });
  }, [updateFilters]);

  const handlePriceBlur = useCallback(() => {
    let { priceFrom, priceTo } = filters;

    if (priceFrom !== '') {
      priceFrom = Math.max(Number(priceFrom), filters.minPrice).toString();
    }

    if (priceTo !== '') {
      priceTo = Math.min(Number(priceTo), filters.maxPrice).toString();

      if (Number(priceTo) < Number(priceFrom)) {
        priceTo = priceFrom;
      }
    }

    updateFilters({ priceFrom, priceTo });
  }, [filters, updateFilters]);

  const handleInputChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>, key: keyof Filters, type: 'checkbox' | 'radio') => {
      const { name, checked, value } = evt.target;
      updateFilters({
        [key]: type === 'checkbox'
          ? { ...(filters[key] as Record<string, boolean>), [name]: checked }
          : value,
      });
    },
    [filters, updateFilters]
  );

  const handleResetClick = () => {
    onFilterChange({
      ...INITIAL_FILTERS,
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
    });
  };

  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Цена, ₽</legend>
          <div className="catalog-filter__price-range">
            <FilterPriceInput
              name="priceFrom"
              value={filters.priceFrom}
              onChange={handlePriceChange}
              onBlur={handlePriceBlur}
              placeholder={`от ${filters.minPrice}`}
            />
            <FilterPriceInput
              name="priceTo"
              value={filters.priceTo}
              onChange={handlePriceChange}
              onBlur={handlePriceBlur}
              placeholder={`до ${filters.maxPrice}`}
            />
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Категория</legend>
          {Object.values(Category).map((item) => (
            <FilterRadioElement
              key={item}
              name="category"
              value={item}
              checked={filters.category === item}
              label={item}
              onChange={(evt) => handleInputChange(evt, 'category', 'radio')}
            />
          ))}
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Тип камеры</legend>
          {Object.entries(CameraType).map(([key, type]) => (
            <FilterCheckbox
              key={key}
              name={type}
              checked={filters.types[type]}
              label={type}
              onChange={(evt) => handleInputChange(evt, 'types', 'checkbox')}
              disabled={filters.category === Category.Videocamera && (type === CameraType.Film || type === CameraType.Snapshot)}
            />
          ))}
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Уровень</legend>
          {Object.entries(Level).map(([key, level]) => (
            <FilterCheckbox
              key={key}
              name={level}
              checked={filters.levels[level]}
              label={level}
              onChange={(evt) => handleInputChange(evt, 'levels', 'checkbox')}
            />
          ))}
        </fieldset>
        <button className="btn catalog-filter__reset-btn" type="button" onClick={handleResetClick}>
          Сбросить фильтры
        </button>
      </form>
    </div>
  );
}

export default CatalogFilter;
