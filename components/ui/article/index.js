import { useSelector } from 'react-redux';
import { usePinned, useSnack } from '../../../hooks';

const NotPinned = ({ action }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 cursor-pointer"
      onClick={() => action('pin')}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
};

const Pinned = ({ action }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="blue"
      className="w-6 h-6 cursor-pointer"
      onClick={() => action('unpin')}
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const Article = ({ article }) => {
  const pinned = usePinned();
  const pinnedArticles = useSelector((state) => state.pinned);
  const isPinned =
    pinnedArticles.findIndex((a) => a.article === article.article) !== -1;
  const snack = useSnack();

  /**
   * logic to toggle an article between pinned and unpinned
   * @param {string} actionType action being taken, pinning or unpinning
   */
  const handleTogglePin = (actionType) => {
    // switch on action type
    switch (actionType) {
      // when action is pin, add article to store + display snack message
      case 'pin':
        pinned.addArticle(article);
        snack.addSnack('success', `Article "${article.article}" pinned.`);
        break;
      // when action is unpin, remove article from store + display snack message
      case 'unpin':
        pinned.removeArticle(article.article);
        snack.addSnack('success', `Removed pin from "${article.article}".`);
        break;
    }
  };

  return (
    <div className="flex bg-black text-white rounded-lg shadow-lg p-2 justify-between items-center gap-0 lg:gap-2">
      <div className="flex flex-col lg:flex-row grow items-start lg:items-center justify-between">
        <div>
          <div className="text-lg font-bold text-ellipsis overflow-hidden">
            {article.article}
          </div>
          <div className="flex gap-1">
            <div>Rank:</div>
            <div>{article.rank}</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-row lg:flex-col gap-1">
            <div>Views:</div>
            <div>{article.views}</div>
          </div>
        </div>
      </div>
      {isPinned && <Pinned action={handleTogglePin} />}
      {!isPinned && <NotPinned action={handleTogglePin} />}
    </div>
  );
};

export default Article;
