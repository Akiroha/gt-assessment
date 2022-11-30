import { useDispatch } from 'react-redux';
import { networkActions } from '../store/network-slice';

const useNetwork = () => {
  const dispatch = useDispatch();

  class Network {
    setNetworkStatus(status: boolean) {
      dispatch(networkActions.setNetworkStatus(status));
    }
  }

  return new Network();
};

export default useNetwork;
