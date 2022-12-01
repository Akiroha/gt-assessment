import { ArticleType } from '../../../types';
import Article from '../article';

type Props = {
  articles: ArticleType[];
  emptyMessage: string;
  quantity?: number;
};

const ArticlesContainer: React.FC<Props> = ({
  articles,
  emptyMessage,
  quantity,
}) => {
  const empty = articles && articles.length === 0;
  const display = empty ? 'grid content-center' : 'flex flex-col gap-5';

  /**
   * if articles passed are not empty then check if quantity is not null.
   * if quantity exists then we want to use that to splice the articles passed. otherwise we just set reduced articles to the ones passed
   */
  const reducedArticles: ArticleType[] | null = !empty
    ? quantity
      ? articles.slice(0, quantity)
      : articles
    : null;

  return (
    <div
      className={`'mt-2 max-h-75vh h-75vh border p-2 rounded-md shadow overflow-x-hidden overflow-y-auto ${display}`}
    >
      {empty && (
        <div className="font-bold text-3xl text-center">{emptyMessage}</div>
      )}
      {!empty &&
        reducedArticles &&
        reducedArticles.map((article) => {
          return <Article key={article.article} article={article} />;
        })}
    </div>
  );
};

export default ArticlesContainer;
