import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ArticlesContainer from '../../components/ui/article-container';
import Spinner from '../../components/ui/spinner';
import { useCache } from '../../hooks';
import { StateType } from '../../store';
import { ArticleType } from '../../types';
import Controller from './controller';

// constant end point
const endPoint =
  'https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/';

/**
 * logic to format date in valid form for query
 * @param {Date} date date object set
 * @returns returns date formatted
 */
const formatDate = (date: moment.Moment) => {
  return date.format('YYYY/MM/DD');
};

const Home = () => {
  const cache = useCache();
  // default query to yesterday
  const [query, setQuery] = useState(
    endPoint + formatDate(moment().add(-1, 'd'))
  );
  // default quantity to 100
  const [quantity, setQuantity] = useState('100');
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  // get network from store
  const network = useSelector((state: StateType) => state.network);
  // get cached articles from store
  const cachedArticles = useSelector((state: StateType) => state.cache);

  useEffect((): (() => void) => {
    // default subscribed to true, this will help us when cleaning up component
    let isSubscribed = true;
    // get date from query by replacing endpoint with empty string
    const dateFromQuery = query.replace(endPoint, '');

    /**
     * promise that handles fetching top articles from api
     */
    const handleFetch = async () => {
      try {
        // GET from api using axios, destructure object to get data
        const { data } = await axios.get(query);
        // store items from data
        const items = data?.items[0]?.articles;

        // set local articles + add articles to cache using this date
        setArticles(items);
        cache.addCache(dateFromQuery, items);
      } catch (error: any) {
        // set error message, if error is from api then it will contain response.data.detail, otherwise we will display a generic message
        const errorMessage =
          error?.response?.data?.detail ??
          'Something went wrong. Please refresh and try again.';
        // set local error message
        setError(errorMessage);
      }
      // set loading to false once done
      setLoading(false);
    };

    /**
     * logic to get data either from cache or actual fetch call
     */
    const getData = () => {
      // default loading to true and clear out error message
      setLoading(true);
      setError('');

      // attempt to fetch articles using the date from query
      const cachedArticlesForDate = cachedArticles[dateFromQuery];

      // if cached articles for this date exist then we set local articles + loading to false
      if (cachedArticlesForDate) {
        setArticles(cachedArticlesForDate);
        setLoading(false);
      } else {
        // else call fetch
        handleFetch();
      }
    };

    // if connected to internet and subscribed is true then we can go ahead and call getData method
    if (network && isSubscribed) {
      getData();
    }

    // once component is unmounted, set isSubscribed to false
    return () => (isSubscribed = false);
  }, [query]);

  /**
   * logic to accept submit from child component and set local state
   * @param {object} values form values
   */
  const handleSubmit = (values: { quantity: string; date: moment.Moment }) => {
    const { quantity, date } = values;

    setQuantity(quantity);
    setQuery(endPoint + formatDate(moment(date)));
  };

  return (
    <div className="flex-col items-center">
      <Controller submit={handleSubmit} loading={loading} />

      {loading && (
        <div className="h-75vh grid content-center justify-center">
          <Spinner size="w-20 h-20" />
        </div>
      )}

      {!loading && error !== '' && (
        <div className="h-75vh grid content-center justify-center">
          <div className="font-bold text-xl text-center text-red-600">
            {error}
          </div>
        </div>
      )}

      {!loading && error === '' && (
        <ArticlesContainer
          articles={articles}
          emptyMessage="There are no articles that match the criteria."
          quantity={Number(quantity)}
        />
      )}
    </div>
  );
};

export default Home;
