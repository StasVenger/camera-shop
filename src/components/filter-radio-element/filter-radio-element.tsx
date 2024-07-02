type TFilterRadioElementProps = {
  name: string;
  value: string;
  checked: boolean;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function FilterRadioElement({ name, value, checked, label, onChange }: TFilterRadioElementProps): JSX.Element {
  return (
    <div className="custom-radio catalog-filter__item">
      <label>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span className="custom-radio__icon" />
        <span className="custom-radio__label">{label}</span>
      </label>
    </div>
  );
}

export default FilterRadioElement;
