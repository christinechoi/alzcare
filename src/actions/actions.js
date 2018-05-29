import fetch from 'isomorphic-fetch';

export function getPhotos(input) {
  const proxyURL = 'https://floating-cove-74260.herokuapp.com/'
  const url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + input + '&format=json&nojsoncallback=1'
  debugger;
  return (dispatch) => {
    return fetch(proxyURL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
      })
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Sorry, but there was an error from the server.');
        } 
        return response.json();
      })
      .then(responseJson =>  {
        dispatch({type: 'GET_PHOTO', payload: responseJson})
      })
  }
}

