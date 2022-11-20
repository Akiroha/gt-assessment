import { useDispatch } from 'react-redux';
import { snackActions } from '../store/snack-slice';

const useSnack = () => {
  const dispatch = useDispatch();

  class Snack {
    addSnack(status, message) {
      dispatch(
        snackActions.addSnack({
          timestamp: Date.now().toString(),
          status: status,
          message: message,
        })
      );
    }

    removeSnack(timestamp) {
      dispatch(snackActions.removeSnack(timestamp));
    }
  }

  return new Snack();
};

export default useSnack;
