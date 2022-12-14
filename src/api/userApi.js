import axiosClient from "./axiosClient";

const userApi = {
  getAll() {
    const url = "/users";
    return axiosClient.get(url);
  },
  getUserByUsername(username) {
    const url = `/users/${username}`;
    return axiosClient.get(url);
  },
  //create user
  add(username, password, data) {
    const header = {
      username: username,
      password: password,
    };
    const url = `/register`;
    return axiosClient.post(url, data, {
      headers: header,
    });
  },
  //create shipper
  addshipper(data) {
    const url = `/register/shipper`;
    return axiosClient.post(url, data);
  },
  //delete user
  remove(username) {
    const url = `/users/${username}`;
    return axiosClient.delete(url, username);
  },
  update(username, data) {
    const url = `/users/${username}`;
    return axiosClient.put(url, data);
  },
  login(data) {
    const url = `/login`;
    return axiosClient.post(url, data);
  },
  changeRole(username) {
    const url = `/change-role/${username}`;
    return axiosClient.put(url, username);
  },
  changepassword(username, data) {
    const url = `/change-password/${username}`;
    return axiosClient.post(url, data);
  },
};

export default userApi;
