import axios from 'axios';

export const fetchAllRepos = () => {
  return axios
    .get('https://api.github.com/users/will-miles/repos')
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return { error };
    });
};
