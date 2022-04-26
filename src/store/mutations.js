export const SET_PRODUCTS = (state, products) => {
  state.products = products;
};
export const SET_PRODUCT = (state, product) => {
  state.product = product;
};
export const ADD_PRODUCT = (state, element) => {
  state.products.push(element);
};

export const DELET_PRODUCT = (state, productId) => {
  const index = state.products.findIndex((product) => product.id === productId);
  state.products.splice(index, 1);
};
