import {
  SEARCH_MEDIA_COMPLETED,
  SEARCH_MEDIA_FAILED,
} from "../actions/mediaActions";

const initialState = {
  data: [],
  isError: false,
  error: undefined,
  searchQuery: undefined,
  mediaType: undefined,
  type: SEARCH_MEDIA_COMPLETED,
  count: 0,
  prevPage: undefined,
  nextPage: undefined,
  lastPage: undefined,
  currentPage: undefined,
};

const gistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MEDIA_COMPLETED:
      return {
        ...state,
        searchQuery: action.searchQuery,
        mediaType: action.mediaType,
        data: action.data,
      };
    case SEARCH_MEDIA_FAILED:
      return {
        ...initialState,
        isError: action.isError,
        error: state.error,
      };
    default:
      return state;
  }
};

export default gistReducer;
