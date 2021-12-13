import {
  SEARCH_MEDIA_COMPLETED,
  SEARCH_MEDIA_FAILED,
} from "../actions/mediaActions";

const initialState = {
  data: [],
  isError: false,
  searchResult: [],
  searchQuery: undefined,
};

const gistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MEDIA_COMPLETED:
      return {
        ...state,
        searchQuery: action.searchQuery,
        searchResult: action.data,
      };
    case SEARCH_MEDIA_FAILED:
      return {
        ...initialState,
        isError: action.isError,
      };
    default:
      return state;
  }
};

export default gistReducer;
