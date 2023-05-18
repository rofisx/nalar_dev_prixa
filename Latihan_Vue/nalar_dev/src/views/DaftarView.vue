<template>
  <div class="daftar">
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
      <div class="text-primary2 fw-bold fn-12 text-center my-3">Daftar</div>
    </Navbar>
    <div class="container mt-5">
      <div class="row mx-auto">
        <div class="col-md-12">
          <h2 class="text-primary mt-4">Masuk ke akun Anda untuk melanjutkan:</h2>
          <form>
            <div class="mb-3">
              <label for="nama" class="form-label fw-bold">Nama</label>
              <input
                type="text"
                class="form-control"
                id="nama"
                aria-describedby="nama"
                placeholder="Nama Lengkap"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label fw-bold">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="email"
                placeholder="nama@email.com"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label fw-bold">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Tulis Password"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label fw-bold">Konfirmasi Password</label>
              <input
                type="password"
                class="form-control"
                id="re_password"
                placeholder="Tulis Ulang Password"
              />
              <p
                class="text-muted2 fst-italic fn-10 fw-bold"
              >Pastikan password mengandung huruf kapital, huruf kecil, karakter spesial, angka, dan berjumlah 8-15 karakter</p>
            </div>
            <div class="fn-9 text-end">
              Dengan mendaftarkan akun, Anda menyetujui
              <br />
              <div class="fn-9">
                <em class="text-primary">Syarat dan Ketentuan</em> yang berlaku dari Prixa
              </div>
            </div>

            <div class="d-flex justify-content-center mt-4">
              <button type="submit" class="btn btn-primary w-100 rounded-4">Daftar</button>
            </div>
            <div class="d-flex justify-content-center mt-3 mb-5">
              <label class="text-muted fn-10">Sudah Terdaftar ? &nbsp;</label>
              <router-link for="login" class="text-secondary2 fn-10" to="/login">Masuk ke Akun</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Daftar",
  components: { Navbar }
};
</script>
<style>
</style>