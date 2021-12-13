const getHeaderAuthorization = () => {
  const username = process.env.REACT_APP_BASIC_AUTH_USER;
  const password = process.env.REACT_APP_BASIC_AUTH_PASS;
  return `Basic ${window.btoa(`${username}:${password}`)}`;
};

const getAbsoluteUrl = (url) => {
  const baseURL = process.env.BASE_URL || "http://localhost:3000/";
  return `${baseURL}${url}`;
};

const getMedia = (query, page = 1, pageSize = 15) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getHeaderAuthorization(),
    },
  };
  const params = { page, pageSize };
  if (query) {
    params.search = query;
  }
  const queryString = new URLSearchParams(params).toString();
  return fetch(getAbsoluteUrl(`media?${queryString}`), requestOptions);
};

export const mediaService = {
  getMedia,
};
