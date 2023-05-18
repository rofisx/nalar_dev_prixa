<template>
  <div class="ask-method">
    <div class="container">
      <div class="row px-5 my-5">
        <div class="col-md-12">
          <h3 class="text-primary2 fw-bold px-2">Terima kasih untuk persetujuannya.</h3>
          <br />
          <h3 class="text-primary2 fw-bold px-2">
            Selanjutnya Prixa akan menanyakan
            informasi terkait status kesehatan dan kebiasaan Anda.
          </h3>
        </div>
      </div>
      <div class="row px-5 mt-5">
        <div class="col-md-12">
          <div class="d-flex justify-content-end mt-3">
            <router-link
              class="btn bg-primary2 rounded-5 btn-lg px-3 text-white"
              to="/consent"
            >Lanjutkan</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "consent"
};
</script>
<style>
</style>