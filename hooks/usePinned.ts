import { useDispatch } from 'react-redux';
import { pinnedActions } from '../store/pinned-slice';
import { ArticleType } from '../types';

const usePinned = () => {
  const dispatch = useDispatch();

  class Pinned {
    addArticle(article: ArticleType) {
      dispatch(pinnedActions.addArticle(article));
    }

    removeArticle(article: string) {
      dispatch(pinnedActions.removeArticle(article));
    }

    hydrate(pinned: ArticleType[]) {
      dispatch(pinnedActions.hydrate(pinned));
    }
  }

  return new Pinned();
};

export default usePinned;
