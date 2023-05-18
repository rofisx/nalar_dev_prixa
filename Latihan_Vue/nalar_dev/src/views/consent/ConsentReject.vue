<template>
  <div class="consentreject">
    <div class="container">
      <div class="row p-5">
        <div class="col-md-6 my-3">
          <img
            src="../../assets/images/Prixa Consent - Not Accepted.png"
            alt="consent-reject"
            class="img-fluid"
          />
        </div>
        <div class="col-md-6 my-5">
          <label for="consent-reject">
            <h3
              class="text-primary2 fw-bold"
            >Mohon maaf, Prixa tidak dapat melanjutkan pemeriksaan tanpa persetujuan Anda.</h3>
          </label>
          <div class="d-flex justify-content-end">
            <router-link
              class="btn bg-primary2 rounded-5 btn-lg px-3 m-5 text-white"
              to="/consent"
            >Ulangi</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style></style>