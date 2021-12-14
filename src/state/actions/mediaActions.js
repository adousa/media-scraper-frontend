export const SEARCH_MEDIA_STARTED = "SEARCH_MEDIA_STARTED";
export const SEARCH_MEDIA_COMPLETED = "SEARCH_MEDIA_COMPLETED";
export const SEARCH_MEDIA_FAILED = "SEARCH_MEDIA_FAILED";

export function getMedia() {
  return {
    type: SEARCH_MEDIA_STARTED,
  };
}

export function searchMedia(query, page, pageSize, mediaType) {
  return {
    type: SEARCH_MEDIA_STARTED,
    query,
    page,
    pageSize,
    mediaType,
  };
}

export function clearSearch() {
  return {
    type: SEARCH_MEDIA_COMPLETED,
    query: undefined,
    page: undefined,
    pageSize: undefined,
  };
}
