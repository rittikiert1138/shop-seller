import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

//Product
import Listproduct from '@/pages/product/Listproduct'
import Createproduct from '@/pages/product/Createproduct'
import Editproduct from '@/pages/product/Editproduct'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/product",
      name: "Listproduct",
      component: Listproduct
    },
    {
      path: "/product/create",
      name: "Createproduct",
      component: Createproduct
    },
    {
      path: "/product/create/:id",
      name: "Editeproduct",
      component: Editproduct
    }
  ]
});
