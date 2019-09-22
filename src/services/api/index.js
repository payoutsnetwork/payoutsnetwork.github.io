import axios from "axios";

const apiBase = process.env.REACT_APP_API_URL;

//TODO: add authorization to app
const headers = {
  "Content-Type": "application/json"
};

export const API = {
  getStates: data => {
    return axios.get(apiBase + "get-states/", {
      headers: headers
    });
  },

  getEmployees: data => {
    let sort, sortDirection;
    if (data.data.sort) {
      sort = data.data.sort.id;
      sortDirection = data.data.sort.desc ? "desc" : "asc";

      return axios.get(
        apiBase +
          `get-employees/?page=${data.data.page}&perPage=${data.data.perPage}&sort=${sort}&sortDirection=${sortDirection}`,
        {
          headers: headers
        }
      );
    } else {
      return axios.get(
        apiBase +
          `get-employees/?page=${data.data.page}&perPage=${data.data.perPage}`,
        {
          headers: headers
        }
      );
    }
  },
  deleteEmployees: data => {
    const id = data.data.employeeId;
    return axios.delete(
      apiBase + `delete-employees?id=${id}`,
      {},
      {
        headers: headers
      }
    );
  },
  patchEmployees: data => {
    const id = data.data.employeeId;
    return axios.patch(
      apiBase + `patch-employees?id=${id}`,
      {},
      {
        headers: headers
      }
    );
  },
  postEmployees: data => {
    return axios.post(apiBase + "post-employees/", data.data, {
      headers: headers
    });
  }
};
