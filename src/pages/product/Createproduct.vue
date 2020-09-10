<template>
  <div class="container pt-3">
    <form name="form" @submit.prevent="handleSubmit">
      <div class="row">
        <div class="col-8">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" name="name" v-model="name" />
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
export default {
  data() {
    return {
      name: "",
      price: "",
      description: "",
    };
  },
  methods: {
    handleSubmit() {
      let formData = {
        name: this.name,
        price: this.price,
        description: this.description,
        category: 2,
      };

      this.$store.dispatch("addProduct", formData);
      // this.$store.dispatch("getProducts");
      // this.$router.push("/product");
    },
  },
};
</script>