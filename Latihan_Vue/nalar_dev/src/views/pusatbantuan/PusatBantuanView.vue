<template>
  <div class="bantuan">
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
      <div class="text-primary2 fw-bold fn-12 text-center my-3">Pusat Bantuan</div>
    </Navbar>
    <div class="container">
      <div class="row py-5 mt-3">
        <div class="col-6 col-sm-6 py-5 px-3">
          <h4 class="text-primary2 fw-bold">Informasi apa yang ingin anda ketahui</h4>
        </div>
        <div class="col-6 col-sm-4">
          <img src="../../assets/images/butler-banner.png" class="img-fluid" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../../components/Navbar.vue";
export default {
  name: "pusat_bantuan",
  components: {
    Navbar
  }
};
</script>
<style>
</style>