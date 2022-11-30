import { useDispatch } from 'react-redux';
import { snackActions } from '../store/snack-slice';

const useSnack = () => {
  const dispatch = useDispatch();

  class Snack {
    addSnack(status: string, message: string) {
      dispatch(
        snackActions.addSnack({
          timestamp: Date.now().toString(),
          status: status,
          message: message,
        })
      );
    }

    removeSnack(timestamp: string) {
      dispatch(snackActions.removeSnack(timestamp));
    }
  }

  return new Snack();
};

export default useSnack;
