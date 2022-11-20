import { useEffect, useState } from 'react';
import { useSnack } from '../../../hooks';

const SnackBarItem = ({ timestamp, status, message }) => {
  const snack = useSnack();
  const [clicked, setClicked] = useState(false);
  const bg =
    status === 'success'
      ? 'bg-green-500'
      : status === 'error'
      ? 'bg-red-500'
      : 'bg-yellow-500';

  /**
   * sets clicked to true and dispatches redux action to remove this snack object manually
   */
  const handleRemove = () => {
    setClicked(true);
    snack.removeSnack(timestamp);
  };

  /**
   * use effect to clear out this snack after some time
   */
  useEffect(() => {
    // timer to remove snack automatically after some time
    const timer = setTimeout(() => {
      snack.removeSnack(timestamp);
    }, 3000);

    // if clicked is true then we'll clear out the timeout
    if (clicked) {
      clearTimeout(timer);
    }

    // destruct timer
    return () => clearTimeout(timer);
  }, [snack, timestamp, clicked]);

  return (
    <div
      className={`cursor-pointer p-2 rounded-md w-72 shadow ${bg}`}
      onClick={handleRemove}
    >
      <span>{message}</span>
    </div>
  );
};
export default SnackBarItem;
