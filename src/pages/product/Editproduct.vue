<template>
  <div class="container">{{ $route.params.id}}</div>
</template>

<script>
export default {
  // created() {
  //   this.editProduct();
  // },
  methods: {
    editProduct(id) {
      this.$store.dispatch("editProduct", id);
    },
  },
  mounted() {
    // console.log(this.$route.params.id);
    this.editProduct("5f5723444bf25d83a01bad2a");
  },
};
</script>