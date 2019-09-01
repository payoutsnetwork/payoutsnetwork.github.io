import axios from 'axios';

const apiBase = process.env.REACT_APP_API_URL;

const headers = {
  Authorization: localStorage.mediaServerToken,
};

export const API = {
  login: data => {
    return axios.post(apiBase + 'login/', data, { headers: headers });
  },
  getMovies: data => {
    return axios.get(apiBase + 'movies/', { headers: headers });
  },
  getShows: data => {
    return axios.get(apiBase + 'tvs/shows', { headers: headers });
  },
  getShowSeasons: data => {
    return axios.get(apiBase + 'tvs/show/seasons?show=' + data.data.show, {
      headers: headers,
    });
  },
  getShowSeasonEpisodes: data => {
    return axios.get(
      apiBase +
        'tvs/show?show=' +
        data.data.show +
        '&season=' +
        data.data.season,
      { headers: headers }
    );
  },
  getEpisode: data => {
    return axios.get(apiBase + 'tvs/episode?id=' + data.data.id, {
      headers: headers,
    });
  },
  getEmployees: data => {
    return axios.get(apiBase + 'employees/', {
      headers: headers,
    });
  },
};
