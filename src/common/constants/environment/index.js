const getUrl = () => {
  const env = process.env.REACT_APP_API;
  let api = 'http://localhost:8090/';

  switch (env) {
    case 'development':
      api = 'http://localhost:8090/';

      break;

    case 'beta':
      api = 'http://localhost:8090/';
      break;

    case 'production':
      api = 'http://localhost:8090/';
      break;

    default:
      break;
  }

  return {
    api
  };
};

const Url = getUrl();

export default Url;
