<template>
  <div class="farmasi">
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
      <div class="text-primary2 fw-bold fn-12 text-center my-3">Pesan Antar Farmasi</div>
    </Navbar>
    <div class="container mt-5">
      <div class="row px-5">
        <div class="col-md-6 my-4">
          <img
            src="../../assets/images/Prixa Consent - Not Accepted.png"
            alt="consent-reject"
            class="img-fluid"
          />
        </div>
        <div class="col-md-6 py-5 mb-5">
          <h5 class="text-primary2 fw-bold">
            Prixa memerlukan resep obat
            Anda untuk proses pesan antar farmasi.
          </h5>
          <br />
          <div class="text-primary2 fst-italic fn-11">
            Konsultasi dengan dokter via chat untuk
            mendapatkan resep obat sesuai rekomendasi dokter jika dibutuhkan.
          </div>
        </div>
      </div>

      <div class="row position-fixed" style="bottom:0;left: 0; right: 0;">
        <router-link
          to="/"
          class="col-6 bg-info text-white fw-bold py-3 text-center"
        >Kembali Ke Beranda</router-link>
        <router-link
          to="/screening"
          class="col-6 bg-primary text-white fw-bold py-3 text-center"
        >Konsultasi Via Chat</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../../components/Navbar.vue";
export default {
  name: "Farmasi",
  components: {
    Navbar
  }
};
</script>