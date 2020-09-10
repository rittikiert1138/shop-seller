<template>
  <div class="container pt-5">
    <form name="form" @submit.prevent="handleSubmit">
      <div class="row justify-content-center">
        <div class="col-6">
          <div class="form-group">
            <label>Username</label>
            <input
              type="text"
              class="form-control"
              name="email"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              name="password"
              v-model="password"
            />
          </div>
          <div class="form-group">
            <button class="btn btn-primary w-50" type="submit">Login</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async handleSubmit() {
      let formData = {
        email: this.email,
        password: this.password
      };

      const res = await axios.post(
        "http://ec2-54-251-228-199.ap-southeast-1.compute.amazonaws.com:8083/apis/admin/login",
        formData
      );

      console.log(res.data);
    }
  }
};
</script>
