const initialState = {
  photos: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_PHOTO':
    return {  
      ...state, 
      photos: action.payload.items
    }
  default:
    return state;
  }
};

export default rootReducer;