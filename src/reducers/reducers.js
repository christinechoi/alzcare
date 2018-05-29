const initialState = {
  photos: []
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_PHOTO':
    debugger;
  default:
    return state;
  }
};

export default rootReducer;