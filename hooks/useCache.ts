import { useDispatch } from 'react-redux';
import { cacheActions } from '../store/cache-slice';
import { ArticleType } from '../types';

const useCache = () => {
  const dispatch = useDispatch();

  class Cache {
    addCache(date: string, articles: ArticleType[]) {
      dispatch(cacheActions.addToCache({ date, articles }));
    }
  }

  return new Cache();
};

export default useCache;
