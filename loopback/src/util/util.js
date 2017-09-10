

export const getTwitterInsights = screenName => {
  return fetch({
    method: 'POST',
    url: 'http://localhost:3000/getInsights',
    data: screenName
  });
};

// export const requestSingleEvent = id => dispatch => (
//   EventApiUtil.fetchSingleEvent(id).then(
//     ({data}) => dispatch(receiveSingleEvent(data)),
//     err => console.log(`from eventAction ${err}`)
//   )
// );

// const fetchByName = (name) => {
// 	return fetch('https;??swapi.co/api/people/?search={name}')
//   	.then((response) => (
//     	return response.json();
//     )).then(console.log);
// };
