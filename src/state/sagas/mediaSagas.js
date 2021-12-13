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
const getMedia = ({ query, page, pageSize }) => {
  return mediaService.getMedia(query, page, pageSize);
};

export function* getMediaGenerator({ query, page, pageSize }) {
  let response = [];
  try {
    response = yield call(getMedia, { query, page, pageSize });
  } catch (errors) {
    yield put({
      type: SEARCH_MEDIA_FAILED,
      data: [],
      isError: true,
    });
    return;
  }
  yield put({
    type: SEARCH_MEDIA_COMPLETED,
    data: (response || []).data,
    searchQuery: query,
  });
}

export default function* rootSaga() {
  yield debounce(1000, SEARCH_MEDIA_STARTED, getMediaGenerator);
}
