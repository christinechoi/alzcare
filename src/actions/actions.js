import fetch from 'isomorphic-fetch';

export function getPhotos(input) {
  return (dispatch) => {
    return fetch('https://api.flickr.com/services/feeds/photos_public.gne' + input)
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Sorry, there was a bad response from the server.");
        } 
        console.log(response);
        return response.json();
      })
      .then(responseJson =>  {
        dispatch({type: 'GET_PHOTO', payload: responseJson})
      })
  }
}