import { useDispatch } from 'react-redux';
import { pinnedActions } from '../store/pinned-slice';

const usePinned = () => {
  const dispatch = useDispatch();

  class Pinned {
    addArticle(article) {
      dispatch(pinnedActions.addArticle(article));
    }

    removeArticle(article) {
      dispatch(pinnedActions.removeArticle(article));
    }

    hydrate(pinned) {
      dispatch(pinnedActions.hydrate(pinned));
    }
  }

  return new Pinned();
};

export default usePinned;
