export const SEARCH_MEDIA_STARTED = "SEARCH_MEDIA_STARTED";
export const SEARCH_MEDIA_COMPLETED = "SEARCH_MEDIA_COMPLETED";
export const SEARCH_MEDIA_FAILED = "SEARCH_MEDIA_FAILED";

export function getMedia() {
  return {
    type: SEARCH_MEDIA_STARTED,
  };
}

export function searchMedia(query, page, pageSize) {
  return {
    type: SEARCH_MEDIA_STARTED,
    query,
    page,
    pageSize,
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
