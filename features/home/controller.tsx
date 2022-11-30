import { Formik, Form } from 'formik';
import moment from 'moment';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { BlackButton } from '../../components/ui/button';
import { DatePicker, Select } from '../../components/ui/input';
import { StateType } from '../../store';

const initValues = {
  date: moment().add(-1, 'd').toDate(),
  quantity: '100',
};

const yupValidation = Yup.object({
  date: Yup.date().required('Date required.'),
  quantity: Yup.string().required('Event type required.'),
});

const quantityOptions = [
  {
    label: '25',
    value: '25',
  },
  {
    label: '50',
    value: '50',
  },
  {
    label: '75',
    value: '75',
  },
  {
    label: '100',
    value: '100',
  },
  {
    label: '200',
    value: '200',
  },
];

type Props = {
  submit: Function;
  loading: boolean;
};

const Controller: React.FC<Props> = ({ submit, loading }) => {
  /**
   * sends values up to parent
   * @param {object} values values from form
   */
  const handleSubmit = (values: object) => {
    submit(values);
  };
  // get network from state
  const network = useSelector((state: StateType) => state.network);

  return (
    <Formik
      initialValues={initValues}
      validationSchema={yupValidation}
      onSubmit={(values) => {
        return handleSubmit(values);
      }}
    >
      {({ setFieldValue, isValid }) => (
        <Form>
          <div className="flex gap-1 lg:gap-5 items-end justify-center">
            <DatePicker
              label="Start Date:"
              name="date"
              setFieldValue={setFieldValue}
              maxDate={moment().add(-1, 'd').toDate()}
            />
            <Select
              label="Quantity"
              name="quantity"
              options={quantityOptions}
            />
            <BlackButton
              title="Update!"
              type="submit"
              disabled={!isValid || !network || loading}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Controller;
