<template>
  <div class="temudokter">
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
      <div class="text-primary2 fw-bold fn-12 text-center my-3">Janji Temu Dokter</div>
    </Navbar>
    <div class="row px-4 mt-5 mb-3">
      <div class="col">
        <div class="input-group mt-3">
          <span class="bg-white input-group-text" id="basic-addon1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            class="form-control rounded-end"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            style="margin-right: 10px;"
          />
          <button class="btn border border-secondary rounded-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="row mb-3 px-5">
      <div class="col">
        <label for class="text-dark fw-bold fn-12 mx-3">Rumah Sakit</label>
      </div>
      <div class="col px-0 text-end">
        <label for class="text-primary2 fw-bold fn-11">Lihat Semua</label>
      </div>
    </div>
    <div class="row px-5 mb-5">
      <div class="col">
        <ul
          class="list-group list-group-flush list-group-horizontal position-relative overflow-auto"
        >
          <li class="list-group-item">
            <div class="card rounded-3 shadow" style="width: 15rem;">
              <img src="../../assets/images/logo_prixa.webp" class="card-img-top px-3" alt="..." />
              <div class="card-body">
                <h5 class="card-title fw-bold">Rumah Sakit</h5>
                <p class="card-text">Jakarta Selatan</p>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="card rounded-3 shadow" style="width: 15rem;">
              <img src="../../assets/images/logo_prixa.webp" class="card-img-top px-3" alt="..." />
              <div class="card-body">
                <h5 class="card-title fw-bold">Rumah Sakit</h5>
                <p class="card-text">Jakarta Selatan</p>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="card rounded-3 shadow" style="width: 15rem;">
              <img src="../../assets/images/logo_prixa.webp" class="card-img-top px-3" alt="..." />
              <div class="card-body">
                <h5 class="card-title fw-bold">Rumah Sakit</h5>
                <p class="card-text">Jakarta Selatan</p>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="card rounded-3 shadow" style="width: 15rem;">
              <img src="../../assets/images/logo_prixa.webp" class="card-img-top px-3" alt="..." />
              <div class="card-body">
                <h5 class="card-title fw-bold">Rumah Sakit</h5>
                <p class="card-text">Jakarta Selatan</p>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="card rounded-3 shadow" style="width: 15rem;">
              <img src="../../assets/images/logo_prixa.webp" class="card-img-top px-3" alt="..." />
              <div class="card-body">
                <h5 class="card-title fw-bold">Rumah Sakit</h5>
                <p class="card-text">Jakarta Selatan</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="row mb-3 px-5">
      <div class="col">
        <label for class="text-dark fw-bold fn-12 mx-3">Spesialisai</label>
      </div>
      <div class="col px-0 text-end">
        <label for class="text-primary2 fw-bold fn-11">Lihat Semua</label>
      </div>
    </div>
    <div class="row px-5 mb-5">
      <div class="col">
        <ul
          class="list-group list-group-flush list-group-horizontal position-relative overflow-auto"
        >
          <li class="list-group-item">
            <div class="card rounded-circle shadow py-5" style="width: 9rem;">
              <img
                src="../../assets/images/logo_prixa.webp"
                width="100"
                class="img-fluid mx-auto"
                alt="logo"
              />
            </div>
            <div class="text-muted2 fw-bold fn-12 text-center mt-3">Kedokteran</div>
          </li>
          <li class="list-group-item">
            <div class="card rounded-circle shadow py-5" style="width: 9rem;">
              <img
                src="../../assets/images/logo_prixa.webp"
                width="100"
                class="img-fluid mx-auto"
                alt="logo"
              />
            </div>
            <div class="text-muted2 fw-bold fn-12 text-center mt-3">Penyakit</div>
          </li>
          <li class="list-group-item">
            <div class="card rounded-circle shadow py-5" style="width: 9rem;">
              <img
                src="../../assets/images/logo_prixa.webp"
                width="100"
                class="img-fluid mx-auto"
                alt="logo"
              />
            </div>
            <div class="text-muted2 fw-bold fn-12 text-center mt-3">Kebidanan</div>
          </li>
          <li class="list-group-item">
            <div class="card rounded-circle shadow py-5" style="width: 9rem;">
              <img
                src="../../assets/images/logo_prixa.webp"
                width="100"
                class="img-fluid mx-auto"
                alt="logo"
              />
            </div>
            <div class="text-muted2 fw-bold fn-12 text-center mt-3">Kebidanan</div>
          </li>
          <li class="list-group-item">
            <div class="card rounded-circle shadow py-5" style="width: 9rem;">
              <img
                src="../../assets/images/logo_prixa.webp"
                width="100"
                class="img-fluid mx-auto"
                alt="logo"
              />
            </div>
            <div class="text-muted2 fw-bold fn-12 text-center mt-3">Kebidanan</div>
          </li>
          <li class="list-group-item">
            <div class="card rounded-circle shadow py-5" style="width: 9rem;">
              <img
                src="../../assets/images/logo_prixa.webp"
                width="100"
                class="img-fluid mx-auto"
                alt="logo"
              />
            </div>
            <div class="text-muted2 fw-bold fn-12 text-center mt-3">Kebidanan</div>
          </li>
          <li class="list-group-item">
            <div class="card rounded-circle shadow py-5" style="width: 9rem;">
              <img
                src="../../assets/images/logo_prixa.webp"
                width="100"
                class="img-fluid mx-auto"
                alt="logo"
              />
            </div>
            <div class="text-muted2 fw-bold fn-12 text-center mt-3">Kebidanan</div>
          </li>
          <li class="list-group-item">
            <div class="card rounded-circle shadow py-5" style="width: 9rem;">
              <img
                src="../../assets/images/logo_prixa.webp"
                width="100"
                class="img-fluid mx-auto"
                alt="logo"
              />
            </div>
            <div class="text-muted2 fw-bold fn-12 text-center mt-3">Kebidanan</div>
          </li>
          <li class="list-group-item">
            <div class="card rounded-circle shadow py-5" style="width: 9rem;">
              <img
                src="../../assets/images/logo_prixa.webp"
                width="100"
                class="img-fluid mx-auto"
                alt="logo"
              />
            </div>
            <div class="text-muted2 fw-bold fn-12 text-center mt-3">Kebidanan</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../../components/Navbar.vue";

export default {
  name: "TemuDokterView",
  components: { Navbar }
};
</script>
<style>
</style>