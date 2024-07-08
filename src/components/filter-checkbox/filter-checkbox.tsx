type TFilterCheckboxProps = {
  name: string;
  checked: boolean;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

function FilterCheckbox({ name, checked, label, onChange, disabled }: TFilterCheckboxProps): JSX.Element {
  return (
    <div className="custom-checkbox catalog-filter__item" data-testid='filter-checkbox'>
      <label>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <span className="custom-checkbox__icon" />
        <span className="custom-checkbox__label">{label}</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
