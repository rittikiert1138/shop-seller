import axios from "axios";
import router from "../router";

export const product = {
  state: {
    products: [],
    product: null
  },

  actions: {
    async getProducts({ commit }) {
      await axios
        .get(
          "http://ec2-54-251-228-199.ap-southeast-1.compute.amazonaws.com:8083/apis/product"
        )
        .then(res => commit("getProducts", { res }))
        .catch(err => alert(err));
    },
    async addProduct({ dispatch }, payload) {
      await axios.post(
        "http://ec2-54-251-228-199.ap-southeast-1.compute.amazonaws.com:8083/apis/product/store",
        payload
      );
      await dispatch("getProducts");
      await router.push("/product");
    },
    async editProduct({ commit }, _id) {
      const res = await axios.get(
        `http://ec2-54-251-228-199.ap-southeast-1.compute.amazonaws.com:8083/apis/product/edit/${_id}`
      );

      commit("getProduct", { res });
    },
    async delProduct({ dispatch }, id) {
      if (window.confirm("Press a button!")) {
        await axios.delete(
          "http://ec2-54-251-228-199.ap-southeast-1.compute.amazonaws.com:8083/apis/product/destroy/" +
            id
        );
        await dispatch("getProducts");
      }
    }
  },

  mutations: {
    getProducts(state, { res }) {
      state.products = res.data;
    },
    getProduct(state, { res }) {
      state.products = res.data;
    },
    addProduct(state, { payload }) {}
  },

  getters: {
    products: state => state.products
  }
};
