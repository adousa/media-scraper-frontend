const getHeaderAuthorization = () => {
  const username = process.env.BASIC_AUTH_USER;
  const password = process.env.BASIC_AUTH_PASS;
  return `Basic ${window.btoa(`${username}:${password}`)}`;
};

const getMedia = (query, page = 1, pageSize = 15) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getHeaderAuthorization(),
    },
  };
  return fetch(
    `http://localhost:3002/media?search=${query}&page=${page}&pageSize=${pageSize}`,
    requestOptions
  );
};

export const mediaService = {
  getMedia,
};
