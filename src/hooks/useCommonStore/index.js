import useStore from '../useStore';

const useCommonStore = () => {
  const { commonStore } = useStore();

  return commonStore;
};

export default useCommonStore;
