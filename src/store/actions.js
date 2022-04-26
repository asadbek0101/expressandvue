import axios from "axios";

export const getProducts = ({ commit }) => {
  axios.get("https://fakestoreapi.com/products").then((response) => {
    commit("SET_PRODUCTS", response.data);
  });
};
export const getProduct = ({ commit }, id) => {
  axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
    commit("SET_PRODUCT", response.data);
  });
};
export const delProduct = ({ commit }, id) => {
  axios.delete(`https://fakestoreapi.com/products/${id}`).then((response) => {
    commit("DELET_PRODUCT", response.data.id);
  });
};

export const addProduct = ({ commit }) => {
  axios
    .post(`https://fakestoreapi.com/products`, {
      category: "halfl",
      price: 32432,
      title: "dfdsfas",
      description: "dsafdsfa",
      image: "sdfaf",
    })
    .then((response) => {
      commit("ADD_PRODUCT", response.data);
    });
};
