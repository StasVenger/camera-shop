type TFilterPriceInputProps = {
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
};

function FilterPriceInput({ name, value, placeholder, onChange, onBlur }: TFilterPriceInputProps): JSX.Element {
  return (
    <div className="custom-input">
      <label>
        <input
          type="number"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
}

export default FilterPriceInput;
