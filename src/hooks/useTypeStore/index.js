import useStore from '../useStore';

const useTypeStore = ({ storeName }) => {
  const store = useStore();

  return store[storeName];
};

export default useTypeStore;
