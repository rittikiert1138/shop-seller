import axios from "axios";
import router from '../router'

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
      await axios
        .post(
          "http://ec2-54-251-228-199.ap-southeast-1.compute.amazonaws.com:8083/apis/product/store",
          payload
        )
      await dispatch('getProducts')
      await router.push('/product')
    },
    async editProduct({ dispatch }, payload) {
      let _id = "5f5a51b92fabd608a9047316"
      console.log(payload.id)
      const res = await axios
        .get(
          `http://ec2-54-251-228-199.ap-southeast-1.compute.amazonaws.com:8083/apis/product/edit/${_id}`
        )

      // console.log(res.data)
      // await dispatch('getProducts')
      // await router.push('/product')
    },
    async delProduct({ dispatch }, id) {
      if (window.confirm('Press a button!')) {
        await axios
          .delete(
            "http://ec2-54-251-228-199.ap-southeast-1.compute.amazonaws.com:8083/apis/product/destroy/" + id
          )
        await dispatch('getProducts')
      }
    }
  },

  mutations: {
    getProducts(state, { res }) {
      state.products = res.data;
    },
    addProduct(state, { payload }) {

    },
  },

  getters: {
    products: state => state.products
  }
};
