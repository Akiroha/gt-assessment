import { useEffect } from 'react';
import Navbar from './nav-bar';
import { useLocal, usePinned, useSnack, useNetwork } from '../../hooks';
import SnackBar from './snack-bar';

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const local = useLocal();
  const pinned = usePinned();
  const snack = useSnack();
  const network = useNetwork();

  useEffect(() => {
    // fetch pinned articles from local storage
    const getPinnedFromLocalStorage = local.getItem('pinned');

    // if pinned articles exists then we need to "hydrate" the pinned redux slice with them
    if (getPinnedFromLocalStorage) {
      pinned.hydrate(getPinnedFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    const onlineListen = () => {
      // dispatch redux action to add snack
      snack.addSnack('success', 'Reconnected to the internet');

      // dispatch redux action to update network status to is online
      network.setNetworkStatus(true);
    };

    const offlineListen = () => {
      // dispatch redux action to add snack
      snack.addSnack('error', 'Disconnected from the internet');

      // dispatch redux action to update network status to false
      network.setNetworkStatus(false);
    };

    // listen for online status changing
    window.addEventListener('online', onlineListen);
    // now we listen for network status changes
    window.addEventListener('offline', offlineListen);

    // destruct event listeners
    return () => {
      window.removeEventListener('online', onlineListen);
      window.removeEventListener('offline', offlineListen);
    };
  }, [network, snack]);

  return (
    <div>
      <div className="sticky top-0 z-40 pb-5">
        <Navbar />
      </div>
      <main className="container px-5 lg:px-auto mx-auto">{children}</main>
      <SnackBar />
    </div>
  );
};
export default Layout;
