<template>
  <div class="screenig">
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
      <div class="text-primary2 fw-bold fn-12 text-center my-3">Konsultasi Via Chat</div>
    </Navbar>
    <div class="mt-5 mb-3 py-5" id="Screening">
      <div class="row p-5">
        <div class="col-md-12">
          <h5 class="text-primary2 fw-bold">Konsultasi dengan dokter langsung!</h5>
        </div>
      </div>
    </div>
    <div class="container">
      <form>
        <div class="row mb-3">
          <div class="col-md-6">
            <input type="text" class="form-control mb-2" placeholder="Misal: Kepala Pusing" />
            <label class="text-dark fw-bold fn-11 mb-2">
              Berapa lama keluhan berlangsung
              <span class="text-danger">*</span>
            </label>
            <div class="form-check form-check-inline mb-2">
              <button class="btn px-3 py-1 btn-white border mx-2 border-secondary">
                <span class="fn-9">0-1 hari</span>
              </button>
              <button class="btn px-3 py-1 btn-white border mx-2 border-secondary">
                <span class="fn-9">1-14 hari</span>
              </button>
              <button class="btn px-3 py-1 btn-white border mx-2 border-secondary">
                <span class="fn-9">&#62; 15 hari</span>
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <label class="text-dark fw-bold fn-11 mb-2">
              Sudah Minum Obat Apa Saja ?
              <span class="text-danger">*</span>
            </label>
            <input type="text" class="form-control mb-2" placeholder="Misal: Paracetamol" />
            <label
              class="text-muted fn-9 fst-italic"
            >Jika lebih dari satu pisahkan dengan koma &#40;,&#41;</label>
          </div>
        </div>
      </form>
    </div>
    <div class="divider"></div>
    <div class="container">
      <div class="row mb-4">
        <div class="col-6 col-md-6 col-sm-6">
          <label for class="text-muted fn-10 fst-italic">Spesialisasi Dokter</label>
          <select class="form-select fn-10" aria-label="select">
            <option value="bedah digestif" selected>Bedah Digestif</option>
            <option value="bedah umum">Bedah Umum</option>
            <option value="divisi pencegahan corona">Divisi Pencegahan Corona</option>
            <option value="dokter gigi">Dokter Gigi</option>
            <option value="dokter psikologis">Dokter Psikologis</option>
            <option value="dokter umum">Dokter Umum</option>
            <option value="fisioterapi">Fisioterapi</option>
            <option value="infectious disease">Infectious Disease</option>
            <option value="laboratorium klinik">Laboratorium Klinik</option>
            <option value="physiartist">Physiartist</option>
            <option value="psikolog">Psikolog</option>
          </select>
        </div>
        <div class="col-6 col-md-6 col-sm-6">
          <label for class="text-muted fn-10 fst-italic">Konsultasi Untuk</label>
          <select class="form-select fn-10" aria-label="select">
            <option value selected>Rofi</option>
            <option value>Test 1</option>
            <option value>Test 2</option>
            <option value>Test 3</option>
            <option value>Test 4</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <router-link to="/" class="btn btn-primary w-100 rounded-5">Mulai Percakapan</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../../components/Navbar.vue";
export default {
  name: "ScreeningView",
  components: {
    Navbar,
    Navbar
  }
};
</script>
<style>
</style>