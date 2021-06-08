const API_KEY = process.env.REACT_APP_API_KEY;
const API_ROOT = "https://api.thedogapi.com/v1/";
export const CONFIG = {
  headers: {
    "x-api-key": API_KEY,
  },
};
export const pagination_limit = 15;
export const URL = {
  breeds: ({page}) =>
    `${API_ROOT}breeds?page=${page}&limit=${pagination_limit}&order=Asc`,
  images: ({id}) =>
    `${API_ROOT}images/search?limit=${pagination_limit}&breed_id=${id}`,
};