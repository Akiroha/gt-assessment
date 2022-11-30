import LocalStorage from '../services/LocalStorage';

const useLocal = () => {
  return new LocalStorage();
};

export default useLocal;
