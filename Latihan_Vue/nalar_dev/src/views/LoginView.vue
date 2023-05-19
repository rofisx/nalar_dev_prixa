<template>
  <div class="login">
    <Navbar>
      <router-link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-chevron-left position-fixed ms-3"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </router-link>
      <div class="text-primary2 fw-bold fn-12 text-center my-3">Masuk Akun</div>
    </Navbar>
    <div class="container" style="margin-top: 4.5rem !important;">
      <Login />
    </div>
  </div>
</template>
<script>
import Login from "../components/Login.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "LoginView",
  components: {
    Login,
    Navbar
  }
};
</script>
<style>
</style>