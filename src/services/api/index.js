import axios from 'axios';

const apiBase = process.env.REACT_APP_API_URL;

//TODO: add authorization to app
const headers = {};

export const API = {
  getEmployees: data => {
    return axios.get(apiBase + 'employees/', {
      headers: headers,
    });
  },
  deleteEmployees: data => {
    return axios.delete(apiBase + `employees/${data.data.employeeId}`, data, {
      headers: headers,
    });
  },
  patchEmployees: data => {
    return axios.patch(apiBase + `employees/${data.data.employeeId}`, data, {
      headers: headers,
    });
  },
  postEmployees: data => {
    return axios.post(apiBase + 'employees/', data, {
      headers: headers,
    });
  },
};
