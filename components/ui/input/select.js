import { useField } from 'formik';

const Select = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  /**
   * sets class based on if field is touched/has error
   */
  const className = `select w-full rounded-lg p-2 h-12 focus:border-secondary text-black text-lg border-2 bg-white ${
    meta.touched && meta.error ? 'border-red-500' : 'border-black'
  }`;

  return (
    <div className="form-control">
      {label && (
        <label className="label">
          <span className="label-text text-black">{label}</span>
        </label>
      )}
      <select className={className} {...field} {...props}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
