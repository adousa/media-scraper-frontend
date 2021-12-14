import { debounce, call, put } from "redux-saga/effects";

import { mediaService } from "../../services/mediaService";

import {
  SEARCH_MEDIA_COMPLETED,
  SEARCH_MEDIA_FAILED,
  SEARCH_MEDIA_STARTED,
} from "../actions/mediaActions";

/**
 * helper function to destruct parameters
 */
const getMedia = ({ query, page, pageSize, mediaType }) => {
  return mediaService.getMedia(query, page, pageSize, mediaType);
};

export function* getMediaGenerator({ query, page, pageSize, mediaType }) {
  let response = [];
  try {
    response = yield call(getMedia, { query, page, pageSize, mediaType });
  } catch (error) {
    yield put({
      type: SEARCH_MEDIA_FAILED,
      data: [],
      error,
      isError: true,
    });
    return;
  }
  yield put({
    type: SEARCH_MEDIA_COMPLETED,
    data: (response || {}).data,
    searchQuery: query,
    mediaType: mediaType,
    count: (response || {}).count,
    prevPage: (response || {}).prevPage,
    nextPage: (response || {}).nextPage,
    lastPage: (response || {}).lastPage,
    currentPage: (response || {}).currentPage,
  });
}

export default function* rootSaga() {
  yield debounce(500, SEARCH_MEDIA_STARTED, getMediaGenerator);
}
