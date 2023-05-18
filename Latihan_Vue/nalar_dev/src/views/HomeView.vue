<template>
  <div class="home">
    <Navbar>
      <router-link to="/">
        <img
          src="../assets/images/logo_prixa.webp"
          alt="logo"
          width="120"
          height="50"
          class="d-block mx-auto mt-2"
        />
      </router-link>
    </Navbar>
    <div class="row px-4 mt-5">
      <div class="col-md-6">
        <router-link to="/ask_method">
          <div class="card mt-4" style="border: none;">
            <div class="card-body bg_hero_1">
              <img
                src="../assets/images/CTA-Diagnosa_hero1.png"
                id="hero_1"
                class="card-img-top"
                alt="hero_cta"
              />
              <div class="card-text text-white" id="detail_hero_1">
                <h5 class="fw-bold">Prixa Gejala</h5>
                <p>Cari tahu kesehatanmu secara mandiri</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <!-- Row Right -->
      <div class="col-md-6">
        <div class="row mt-3">
          <!-- Hero 2 -->
          <div class="col-md-12">
            <router-link to="/Screening">
              <div class="card my-2 pt-2 bg_hero_2" id="hero_2">
                <div class="card-body">
                  <h5 class="card-text text-white fw-bold">Konsultasi Via Chat</h5>
                  <p class="card-text text-white">Terhubung langsung dengan dokter</p>
                </div>
              </div>
            </router-link>
          </div>
          <!-- Hero 3 -->
          <div class="col-md-12">
            <router-link to="/temudokter">
              <div class="card my-2 pt-2 bg_hero_3" id="hero_3">
                <div class="card-body">
                  <h5 class="card-text text-white fw-bold">Atur Janji Temu Dokter</h5>
                  <p class="card-text text-white">Buat jadwal ke dokter secara online</p>
                </div>
              </div>
            </router-link>
          </div>
          <!-- Hero 4 -->
          <div class="col-md-12">
            <router-link to="/prescription-not-found">
              <div class="card my-2 pt-2 bg_hero_4" id="hero_4">
                <div class="card-body">
                  <h5 class="card-text text-white fw-bold">Pesan Antar Farmasi</h5>
                  <p class="card-text text-white">Beli obat tanpa perlu ke apotek</p>
                </div>
              </div>
            </router-link>
          </div>
          <!-- Hero 5 -->
          <div class="col-md-12">
            <router-link to="/pusat_bantuan">
              <div class="card my-2 pt-2 bg_hero_5" id="hero_5">
                <div class="card-body">
                  <h5 class="card-text text-white fw-bold">Pusat Bantuan</h5>
                  <p class="card-text text-white">Temukan informasi layanan Prixa</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- End Row Right -->
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Home",
  components: {
    Navbar
  }
};
</script>
<style>
.bg_hero_1 {
  background-color: #0146ab;
  border-radius: 16px !important;
}
.bg_hero_2 {
  background-color: rgb(85, 185, 230) !important;
  border-radius: 16px !important;
}
.bg_hero_3 {
  background-color: rgb(94, 206, 30) !important;
  border-radius: 16px !important;
}
.bg_hero_4 {
  background-color: rgb(255, 178, 17) !important;
  border-radius: 16px !important;
}
.bg_hero_5 {
  background-color: rgb(1, 70, 171) !important;
  border-radius: 16px !important;
}
</style>
