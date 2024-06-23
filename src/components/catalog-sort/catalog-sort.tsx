import React from 'react';

type TCatalogSortProps = {
  sortType: string;
  sortDirection: string;
  onSortChange: (type: string, direction: string) => void;
};

const CatalogSort = ({ sortType, sortDirection, onSortChange }: TCatalogSortProps): JSX.Element => {
  const handleSortTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSortChange(e.target.id === 'sortPrice' ? 'price' : 'popularity', sortDirection);
  };

  const handleSortDirectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSortChange(sortType, e.target.id === 'up' ? 'asc' : 'desc');
  };

  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div className="catalog-sort__btn-text">
              <input
                type="radio"
                id="sortPrice"
                name="sort"
                checked={sortType === 'price'}
                onChange={handleSortTypeChange}
              />
              <label htmlFor="sortPrice">по цене</label>
            </div>
            <div className="catalog-sort__btn-text">
              <input
                type="radio"
                id="sortPopular"
                name="sort"
                checked={sortType === 'popularity'}
                onChange={handleSortTypeChange}
              />
              <label htmlFor="sortPopular">по популярности</label>
            </div>
          </div>
          <div className="catalog-sort__order">
            <div className="catalog-sort__btn catalog-sort__btn--up">
              <input
                type="radio"
                id="up"
                name="sort-icon"
                checked={sortDirection === 'asc'}
                onChange={handleSortDirectionChange}
                aria-label="По возрастанию"
              />
              <label htmlFor="up">
                <svg width={16} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-sort" />
                </svg>
              </label>
            </div>
            <div className="catalog-sort__btn catalog-sort__btn--down">
              <input
                type="radio"
                id="down"
                name="sort-icon"
                checked={sortDirection === 'desc'}
                onChange={handleSortDirectionChange}
                aria-label="По убыванию"
              />
              <label htmlFor="down">
                <svg width={16} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-sort" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CatalogSort;
