import axios from "axios";

export const product = {
  state: {
    products: []
  },

  actions: {
    async getProducts({ commit }) {
      await axios
        .get(
          "http://ec2-54-251-228-199.ap-southeast-1.compute.amazonaws.com:8083/apis/product"
        )
        .then(res => commit("getProducts", { res }))
        .catch(err => alert(err));
    }
  },

  mutations: {
    getProducts(state, { res }) {
      state.foods = res.data;
    }
  },

  getters: {
    products: state => state.products
  }
};
