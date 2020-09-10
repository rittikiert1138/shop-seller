<template>
  <div class="container pt-3">
    <div class="row mb-3">
      <div class="col-12 text-right">
        <router-link to="/product/create">
          <button class="btn btn-primary">Create</button>
        </router-link>
      </div>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col" class="text-center" width="10%">No.</th>
          <th scope="col">Name</th>
          <th scope="col" class="text-center">Proce</th>
          <th scope="col" class="text-center" width="20%">Manage</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in $store.getters.products" :key="index">
          <th class="text-center">{{index+1}}</th>
          <td>{{ product.name }}</td>
          <td class="text-center">{{product.price}}</td>
          <td class="text-center">
            <router-link
              :to="{ name: 'Editeproduct', params: {id:product._id}}"
              class="btn btn-warning"
            >Edit</router-link>
            <button class="btn btn-danger" v-on:click="delProduct(product._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.$store.dispatch("getProducts");
    },
    delProduct(id) {
      this.$store.dispatch("delProduct", id);
    },
  },
};
</script>