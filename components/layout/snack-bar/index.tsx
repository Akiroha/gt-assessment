import { useSelector } from 'react-redux';
import { StateType } from '../../../store';
import SnackBarItem from './snack-bar-item';

const SnackBar = () => {
  // get snacks from redux store
  const snacks = useSelector((state: StateType) => state.snack);

  return (
    <div className="absolute left-5 bottom-0 lg:bottom-5 pb-10 h-auto flex flex-col gap-1">
      {snacks.map((snack) => {
        return (
          <SnackBarItem
            key={snack.timestamp}
            timestamp={snack.timestamp}
            status={snack.status}
            message={snack.message}
          />
        );
      })}
    </div>
  );
};
export default SnackBar;
