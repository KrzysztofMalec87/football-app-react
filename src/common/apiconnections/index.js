const fetchApi = async url => {
  const promise = new Promise(function(resolve, reject) {
    resolve(
      fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': process.env.REACT_APP_API_URL_HOST,
          'x-rapidapi-key': process.env.REACT_APP_API_URL_KEY,
        },
      })
        .then(response => response.json())
        .then(json => json)
        .catch(err => err)
    );
  });

  return promise;
};

export default fetchApi;
