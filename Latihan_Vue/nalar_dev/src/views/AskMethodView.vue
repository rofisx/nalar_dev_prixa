<template>
  <div class="ask-method">
    <div class="container">
      <div class="row px-5 my-5">
        <div class="col-md-12">
          <h2 class="text-primary fw-bold">
            Informasi diri Anda dapat disimpan untuk
            konsultasi selanjutnya dengan mendaftar di Prixa.
            Apakah Anda ingin mendaftar?
          </h2>
          <em class="text-primary mt-5 fn-10">
            Anda dapat tetap menggunakan sistem periksa berbasis AI Nalar
            Prixa tanpa mendaftarkan akun.
          </em>
        </div>
      </div>
      <div class="row">
        <div class="col-7"></div>
        <div class="col-5 text-end">
          <router-link
            class="text-white mb-2 px-4 mx-1 fn-12 rounded-5 btn btn-lg bg-info2"
            to="/daftar"
          >Daftar</router-link>
          <button
            @click="OpenCloseFun()"
            :class="'text-white mb-2 px-4 mx-1 fn-12 rounded-5 btn btn-lg bg-info2 btn-'+variant"
          >Masuk</button>
          <router-link
            class="text-secondary2 fn-12 mb-2 mx-2 px-3 fw-bold rounded-5 btn btn-lg border-primary2"
            to="/consent"
          >Nanti Saja</router-link>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="OpenClose"
      class="modal fade show"
      tabindex="-1"
      aria-hidden="true"
      aria-labelledby="exampleModalLabel"
      role="dialog"
      style="display: block;"
    >
      <div class="modal-dialog modal-dialog-centered" style="align-items: flex-end;">
        <div class="modal-content">
          <div class="modal-header py-1">
            <h5 class="text-primary2 mt-2 fw-bold fn-11 text-center" style="margin-left: 40%;">Masuk</h5>
            <button type="button" class="btn-close" @click="OpenCloseFun()" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <Login />
          </div>
        </div>
      </div>
    </div>
    <!-- End Modal -->
  </div>
</template>
<script>
import Login from "../components/Login.vue";
export default {
  name: "ask_method",
  components: {
    Login
  },
  props: {
    visible: Boolean,
    variant: String
  },
  data() {
    return {
      OpenClose: this.visible
    };
  },
  methods: {
    OpenCloseFun() {
      this.OpenClose = !this.OpenClose;
    }
  },
  watch: {
    visible: function(newVal, oldVal) {
      this.OpenClose = newVal;
      console.log("new " + newVal + " == " + oldVal);
    }
  }
};
</script>
<style>
</style>