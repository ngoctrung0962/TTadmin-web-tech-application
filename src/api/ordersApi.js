import axiosClient from "./axiosClient";
const url = "/orders";

const ordersApi = {
  getAll() {
    return axiosClient.get(url);
  },

  getById(id) {
    return axiosClient.get(`${url}/${id}`);
  },

  add(username, data) {
    return axiosClient.post(`${url}/${username}`, data);
  },

  remove(id) {
    return axiosClient.delete(`${url}/${id}`);
  },

  update(id, username, data) {
    return axiosClient.put(`${url}/${username}/${id}`, data);
  },
  getordernoshipper() {
    return axiosClient.get(`${url}/no-shipper`);
  },
  addshippertoorder(orderId, username) {
    return axiosClient.put(
      `${url}/${orderId}/update-shipper/${username}`
    );
  },
  getorderbyshipper(username) {
    return axiosClient.get(`${url}/shippers/${username}/no-complete`);
  },
  getorderbyshippercomplete(username) {
    return axiosClient.get(`${url}/shippers/${username}/delivered`);
  },
  removeshippertoorder(orderId, username) {
    return axiosClient.put(
      `${url}/${orderId}/shippers/${username}/remove-shipper`
    );
  },
};

export default ordersApi;
