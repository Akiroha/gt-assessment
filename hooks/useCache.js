import { useDispatch } from 'react-redux';
import { cacheActions } from '../store/cache-slice';

const useCache = () => {
  const dispatch = useDispatch();

  class Cache {
    addCache(date, articles) {
      dispatch(cacheActions.addToCache({ date, articles }));
    }
  }

  return new Cache();
};

export default useCache;
