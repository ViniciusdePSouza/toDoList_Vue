import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      firstName: "John",
      lastName: "Snow",
      email: "snow@gmail.com",
    },
    products: [
      {
        id: 1,
        name: "Bola",
        price: 100,
      },
      {
        id: 2,
        name: "Meião",
        price: 200,
      },
      {
        id: 3,
        name: "Chuteira",
        price: 300,
      },
    ],
    cart: []
  },
  getters: {},
  mutations: {
    storeUser(state, data) {
      state.user = data;
    },
    storeCart(state, data) {
      state.cart.push(data)

      console.log(state.cart)
    },
    removeProduct(state, id) {
      const filteredCart = state.cart.filter(product => product.id !== id)
      state.cart = filteredCart

      console.log(state.cart)
    }
  },
  actions: {},
  modules: {},
});
