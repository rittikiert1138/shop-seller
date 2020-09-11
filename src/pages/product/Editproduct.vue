<template>
  <div class="container pt-3">
    <form name="form" @submit.prevent="handleSubmit">
      <div class="row">
        <div class="col-8">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" name="name" v-model="name" value="name" />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="text" class="form-control" name="price" v-model="price" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" name="description" v-model="description"></textarea>
          </div>
          <div class="form-group">
            <button class="btn btn-success">Submit</button>
          </div>
        </div>
        <div class="col-4"></div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      name: "",
      price: "",
      description: "",
    };
  },
  methods: {
    editProduct(id) {
      this.$store.dispatch("editProduct", id);
    },
  },
  computed: {
    ...mapState({
      name: (state) => state.products.name,
    }),
  },
  mounted() {
    // console.log(this.$store.getters);
    // console.log(this.$store.getters.product);
    let productId = this.$route.params.id;
    this.editProduct(productId);
  },
};
</script>
