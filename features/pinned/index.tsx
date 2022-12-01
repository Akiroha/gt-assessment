import { useSelector } from 'react-redux';
import ArticlesContainer from '../../components/ui/article-container';
import { StateType } from '../../store';

const Pinned = () => {
  // get pinned articles from store
  const pinnedArticles = useSelector((state: StateType) => state.pinned);

  return (
    <div className="flex-col items-center">
      <div className="text-3xl text-center font-bold">
        Articles Pinned by you:
      </div>
      <ArticlesContainer
        articles={pinnedArticles}
        emptyMessage="You haven't pinned any articles yet. Please go to the home page to query for articles and pin them."
      />
    </div>
  );
};

export default Pinned;
