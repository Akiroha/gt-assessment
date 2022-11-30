import { useField, FieldInputProps } from 'formik';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props extends FieldInputProps<''> {
  label?: string;
  setFieldValue: Function;
  minDate?: Date | null | undefined;
  maxDate?: Date | null | undefined;
}

const DatePicker: React.FC<Props> = ({
  label,
  setFieldValue,
  minDate,
  maxDate,
  ...props
}) => {
  const [field, meta] = useField(props);

  /**
   * dynamically set date view class based on whether or not its been touched/error exists
   */
  const className = `input w-full rounded-lg p-2 focus:border-secondary text-black text-lg border-2 bg-white ${
    meta.touched && meta.error ? 'border-red-500' : 'border-black'
  }`;

  return (
    <div className="form-control">
      {label && (
        <label className="label">
          <span className="label-text text-black">{label}</span>
        </label>
      )}
      <DateView
        id={field.name}
        {...field}
        selected={meta.value}
        onChange={(val) => setFieldValue(field.name, val)}
        minDate={minDate ?? null}
        maxDate={maxDate ?? null}
        className={className}
        dateFormat="MMM d, yyyy"
        closeOnScroll
      />
    </div>
  );
};

export default DatePicker;
